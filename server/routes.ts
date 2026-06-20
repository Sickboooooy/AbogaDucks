import type { Express } from "express";
import { createServer, type Server } from "http";
import { QUESTIONS } from "../shared/questions"; // Relative path might need adjustment depending on build
import { DuckProfile, Dimension, TestResult } from "../shared/schema";

// Vestuario/accesorios y descripción curada por perfil (sin alucinaciones: texto controlado).
const PROFILE_STYLE: Record<DuckProfile, { props: string; blurb: string }> = {
  [DuckProfile.PENAL]: {
    props: "wearing a black litigator robe, holding a wooden gavel, confident courtroom pose",
    blurb: "Un pato litigante de sangre fría: toga negra, mazo en ala y la mirada fija en el estrado. Donde hay batalla judicial, ahí estará graznando con argumentos.",
  },
  [DuckProfile.CIVIL]: {
    props: "wearing a smart navy suit, holding a contract and a fountain pen, warm friendly smile",
    blurb: "El pato de cabecera para la vida cotidiana: contratos, familia y patrimonio. Resuelve enredos con calma y un apretón de ala que da confianza.",
  },
  [DuckProfile.CONSTITUCIONAL]: {
    props: "holding a small constitution book, scales of justice, dignified heroic pose",
    blurb: "Un pato guardián de los derechos: defiende la Constitución con la frente en alto. Cuando hay una injusticia, levanta el vuelo y el amparo.",
  },
  [DuckProfile.LABORAL]: {
    props: "wearing a hard hat and tie, holding a workers-rights banner, determined expression",
    blurb: "El pato que pelea por los que trabajan: casco, corbata y un sentido feroz de la justicia social. Negocia duro, pero siempre con empatía.",
  },
  [DuckProfile.MERCANTIL]: {
    props: "in a sharp business suit, holding a briefcase and tablet with charts, dynamic pose",
    blurb: "Un pato de negocios de pies a pico: contratos, sociedades y operaciones de alto vuelo. Donde hay un trato que cerrar, despliega las alas.",
  },
  [DuckProfile.FISCAL]: {
    props: "with round glasses, holding a calculator and tax documents, focused analytical look",
    blurb: "El pato de los números con sello legal: impuestos, deducciones y estrategia fiscal. Encuentra el camino óptimo sin salirse del nido de la ley.",
  },
  [DuckProfile.ADMINISTRATIVO]: {
    props: "in formal government attire, holding official stamped documents, composed posture",
    blurb: "Un pato que navega la burocracia como pez en el agua: trámites, permisos y la relación con el Estado. Ordenado, meticuloso e imparable.",
  },
  [DuckProfile.INTERNACIONAL]: {
    props: "with a globe and passport, elegant cosmopolitan outfit, worldly confident smile",
    blurb: "El pato sin fronteras: tratados, comercio global y litigios entre países. Habla varios idiomas y vuela de jurisdicción en jurisdicción.",
  },
  [DuckProfile.AMBIENTAL]: {
    props: "wearing a green ranger vest, holding a leaf and a small tree, standing in nature",
    blurb: "Un pato verde de corazón: defiende ríos, bosques y comunidades frente al daño ambiental. Su misión: que el desarrollo no ahogue al planeta.",
  },
  [DuckProfile.DIGITAL]: {
    props: "with futuristic glasses, holding a glowing tablet with code, modern tech vibe",
    blurb: "El pato del futuro legal: datos personales, fintech, IA y propiedad digital. Donde la tecnología corre, él pone las reglas del juego.",
  },
  [DuckProfile.NOTARIAL]: {
    props: "with an elegant seal stamp and a leather-bound book, calm trustworthy expression",
    blurb: "Un pato que da fe y certeza: sellos, escrituras y los actos más importantes de la vida. Serio, confiable y siempre con la pluma lista.",
  },
  [DuckProfile.AGRARIO]: {
    props: "wearing a straw hat and a poncho, holding a land map, standing on farmland",
    blurb: "El pato de la tierra y el campo: ejidos, comunidades y derechos territoriales. Defiende las raíces de quienes trabajan el suelo.",
  },
};

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export function registerRoutes(app: Express): Server {
  // API to get questions
  app.get("/api/questions", (_req, res) => {
    res.json(QUESTIONS);
  });

  // API to submit answers and get result
  app.post("/api/score", (req, res) => {
    const answers: Record<number, string> = req.body.answers || {};

    // Initialize scores
    const profileScores: Record<DuckProfile, number> = Object.values(DuckProfile).reduce((acc, profile) => {
      acc[profile] = 0;
      return acc;
    }, {} as Record<DuckProfile, number>);

    const dimensionScores: Record<Dimension, number> = Object.values(Dimension).reduce((acc, dim) => {
      acc[dim] = 0;
      return acc;
    }, {} as Record<Dimension, number>);

    // Calculate scores
    QUESTIONS.forEach(question => {
      const answerText = answers[question.id];
      if (answerText) {
        const option = question.options.find(opt => opt.text === answerText);
        if (option) {
          // Add profile weights
          Object.entries(option.weights).forEach(([key, weight]) => {
             // Check if key is a DuckProfile or Dimension
             if (Object.values(DuckProfile).includes(key as DuckProfile)) {
               profileScores[key as DuckProfile] = (profileScores[key as DuckProfile] || 0) + (weight || 0);
             } else if (Object.values(Dimension).includes(key as Dimension)) {
               dimensionScores[key as Dimension] = (dimensionScores[key as Dimension] || 0) + (weight || 0);
             }
          });
        }
      }
    });

    // Find top profile
    const topProfile = Object.entries(profileScores).sort(([, a], [, b]) => b - a)[0][0] as DuckProfile;

    const result: TestResult = {
      profile: topProfile,
      scores: dimensionScores,
      description: `Based on your answers, you are best suited for ${topProfile} Law!`,
      // Placeholder image for now
      imageUrl: "/abogaduck_variations.png"
    };

    res.json(result);
  });

  // Generación del patito personalizado vía ModelsLab (image-to-image sobre el pato base)
  app.post("/api/generate-duck", async (req, res) => {
    const { profile, customPrompt } = req.body;

    // Leemos la config aquí (no a nivel módulo) para garantizar que dotenv ya cargó el .env.
    const MODELSLAB_API_KEY = process.env.MODELSLAB_API_KEY;
    const MODELSLAB_MODEL_ID = process.env.MODELSLAB_MODEL_ID || "gemini-3.1-i2i";
    const MODELSLAB_API_URL =
      process.env.MODELSLAB_API_URL || "https://modelslab.com/api/v6/images/img2img";
    // La imagen de referencia DEBE ser una URL pública (ModelsLab no alcanza tu localhost).
    const BASE_DUCK_IMAGE_URL =
      process.env.BASE_DUCK_IMAGE_URL ||
      "https://raw.githubusercontent.com/Sickboooooy/AbogaDucks/main/client/public/abogaduck_variations.png";

    const style = PROFILE_STYLE[profile as DuckProfile] || {
      props: "wearing a classic lawyer outfit, holding law books",
      blurb: "Un pato abogado listo para cualquier reto legal.",
    };

    // Sin API key configurada → devolvemos descripción curada + imagen base (modo demo).
    if (!MODELSLAB_API_KEY) {
      return res.json({
        success: true,
        description: style.blurb,
        imageUrl: "/abogaduck_variations.png",
        note: "MODELSLAB_API_KEY no configurada; usando imagen base.",
      });
    }

    try {
      const prompt = `Cute cartoon lawyer duck character, ${style.props}. ${customPrompt || ""} Adorable Pixar/sticker style, soft lighting, clean simple background, high quality.`;

      const body = {
        key: MODELSLAB_API_KEY,
        model_id: MODELSLAB_MODEL_ID,
        prompt,
        init_image: [BASE_DUCK_IMAGE_URL],
        aspect_ratio: "1:1",
        resolution: "1K",
      };

      let response = await fetch(MODELSLAB_API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      let data: any = await response.json();

      // Respuesta asíncrona: sondeamos fetch_result hasta tener la imagen (tope ~30s).
      let attempts = 0;
      while (data?.status === "processing" && data?.fetch_result && attempts < 10) {
        const waitMs = Math.min((data.eta ? data.eta * 1000 : 3000), 5000);
        await sleep(waitMs);
        const poll = await fetch(data.fetch_result, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ key: MODELSLAB_API_KEY }),
        });
        data = await poll.json();
        attempts++;
      }

      const imageUrl = Array.isArray(data?.output) ? data.output[0] : data?.output;

      if (!imageUrl) {
        throw new Error(data?.message || data?.messege || "ModelsLab no devolvió imagen");
      }

      res.json({ success: true, description: style.blurb, imageUrl });
    } catch (error: any) {
      console.error("ModelsLab Error:", error);
      // Fallback elegante: el usuario igual ve su patito (base) y su descripción.
      res.json({
        success: true,
        description: style.blurb,
        imageUrl: "/abogaduck_variations.png",
        note: "No se pudo generar la imagen; usando imagen base.",
      });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
