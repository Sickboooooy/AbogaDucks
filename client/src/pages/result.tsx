import { useEffect, useState } from "react";
import { useLocation } from "wouter";
import { motion } from "framer-motion";
import { TestResult, Dimension } from "@shared/schema";
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from "recharts";
import { Loader2, Download, Share2, Sparkles, RotateCcw, Trophy, ArrowRight } from "lucide-react";

export default function ResultPage() {
  const [, setLocation] = useLocation();
  const [result, setResult] = useState<TestResult | null>(null);
  const [generating, setGenerating] = useState(false);
  const [generatedImage, setGeneratedImage] = useState<string | null>(null);
  const [aiDescription, setAiDescription] = useState<string | null>(null);

  useEffect(() => {
    const stored = localStorage.getItem("lastResult");
    if (!stored) {
      setLocation("/");
      return;
    }
    setResult(JSON.parse(stored));
  }, [setLocation]);

  if (!result) return null;

  const chartData = Object.keys(result.scores).map((key) => ({
    subject: key.split(" ")[0],
    A: result.scores[key as Dimension],
    fullMark: 10,
  }));

  const topDimension = Object.entries(result.scores).sort(([, a], [, b]) => b - a)[0][0];

  const handleGenerate = async () => {
    setGenerating(true);
    try {
      const res = await fetch("/api/generate-duck", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          profile: result.profile,
          customPrompt: `A cute lawyer duck specializing in ${result.profile} law`,
        }),
      });
      const data = await res.json();
      if (data.success) {
        if (data.imageUrl) setGeneratedImage(data.imageUrl);
        if (data.description) setAiDescription(data.description);
      }
    } catch (e) {
      console.error(e);
    } finally {
      setGenerating(false);
    }
  };

  const duckReady = !!generatedImage && !!aiDescription;

  return (
    <div className="relative min-h-screen overflow-hidden">
      <div className="blob -left-24 top-0 h-96 w-96 bg-amber-200" />
      <div className="blob right-[-10rem] top-40 h-[26rem] w-[26rem] bg-blue-200" />

      <div className="relative z-10 mx-auto max-w-6xl px-5 py-8">
        {/* Encabezado celebratorio */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="mb-8 text-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full bg-amber-100 px-4 py-1.5 text-sm font-bold text-amber-700">
            <Trophy className="h-4 w-4" />
            ¡Tu resultado está listo!
          </span>
          <h1 className="mt-4 font-heading text-4xl font-extrabold tracking-tight text-brand-navy md:text-5xl">
            Eres un{" "}
            <span className="bg-gradient-to-r from-brand-amber-deep to-brand-amber bg-clip-text text-transparent">
              {result.profile}Duck
            </span>
          </h1>
          <p className="mx-auto mt-3 max-w-xl text-slate-600">{result.description}</p>
        </motion.div>

        <div className="grid grid-cols-1 items-start gap-6 lg:grid-cols-2">
          {/* Columna izquierda: el patito */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.45, ease: [0.34, 1.56, 0.64, 1] }}
            className="surface overflow-hidden"
          >
            <div className="relative aspect-square w-full bg-gradient-to-br from-secondary to-white">
              {/* Imagen o skeleton */}
              {generating && !generatedImage ? (
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 text-brand-navy">
                  <div className="relative h-16 w-16">
                    <div className="absolute inset-0 animate-ping rounded-full bg-brand-amber/40" />
                    <div className="relative grid h-16 w-16 place-items-center rounded-full bg-brand-amber text-white">
                      <Sparkles className="h-7 w-7" />
                    </div>
                  </div>
                  <p className="text-sm font-semibold">Creando tu AbogaDuck...</p>
                </div>
              ) : (
                <img
                  src={generatedImage ?? result.imageUrl ?? "/abogaduck_variations.png"}
                  alt={`Pato abogado personalizado para el perfil ${result.profile}`}
                  className="h-full w-full object-cover"
                />
              )}

              <span className="absolute left-4 top-4 rounded-full bg-brand-navy px-3 py-1 text-xs font-bold text-white shadow-soft">
                {result.profile}
              </span>

              {generatedImage && (
                <div className="absolute bottom-4 right-4 flex gap-2">
                  <button
                    type="button"
                    aria-label="Descargar imagen"
                    className="grid h-10 w-10 place-items-center rounded-xl bg-white/90 text-brand-navy shadow-card transition-colors hover:bg-white cursor-pointer"
                  >
                    <Download className="h-4 w-4" />
                  </button>
                  <button
                    type="button"
                    aria-label="Compartir"
                    className="grid h-10 w-10 place-items-center rounded-xl bg-white/90 text-brand-navy shadow-card transition-colors hover:bg-white cursor-pointer"
                  >
                    <Share2 className="h-4 w-4" />
                  </button>
                </div>
              )}
            </div>

            <div className="p-6">
              {aiDescription && (
                <div className="mb-4 rounded-2xl border border-amber-200 bg-amber-50 p-4 text-center">
                  <h3 className="mb-1 font-heading text-sm font-bold text-amber-800">
                    ¡AbogaDuck personalizado!
                  </h3>
                  <p className="text-sm italic leading-relaxed text-slate-700">"{aiDescription}"</p>
                </div>
              )}

              {!duckReady && (
                <button
                  type="button"
                  onClick={handleGenerate}
                  disabled={generating}
                  className="btn-duck w-full disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {generating ? (
                    <>
                      <Loader2 className="h-5 w-5 animate-spin" />
                      Creando tu AbogaDuck...
                    </>
                  ) : (
                    <>
                      <Sparkles className="h-5 w-5" />
                      Generar mi AbogaDuck oficial
                    </>
                  )}
                </button>
              )}
            </div>
          </motion.div>

          {/* Columna derecha: analíticas */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.1 }}
            className="space-y-6"
          >
            <div className="surface p-6">
              <h2 className="font-heading text-lg font-bold text-brand-navy">Perfil de habilidades</h2>
              <p className="mb-2 text-sm text-slate-500">Tus fortalezas en las 10 dimensiones jurídicas</p>
              <div className="h-[360px]">
                <ResponsiveContainer width="100%" height="100%">
                  <RadarChart cx="50%" cy="50%" outerRadius="78%" data={chartData}>
                    <PolarGrid stroke="#e2e8f0" />
                    <PolarAngleAxis dataKey="subject" tick={{ fill: "#475569", fontSize: 13 }} />
                    <PolarRadiusAxis angle={30} domain={[0, 10]} tick={{ fill: "#94a3b8", fontSize: 12 }} />
                    <Radar name="Tus puntos" dataKey="A" stroke="#1E3A8A" strokeWidth={2} fill="#F59E0B" fillOpacity={0.45} />
                  </RadarChart>
                </ResponsiveContainer>
              </div>
            </div>

            <div className="surface bg-gradient-to-br from-secondary to-white p-6">
              <h2 className="font-heading text-lg font-bold text-brand-navy">¿Qué significa este perfil?</h2>
              <p className="mt-2 text-sm leading-relaxed text-slate-700">
                Tu perfil revela una fuerte inclinación hacia áreas que requieren{" "}
                <strong className="text-brand-navy">{topDimension.toLowerCase()}</strong>. Te
                desempeñarías excelentemente donde la precisión y el análisis son clave.
              </p>
              <p className="mt-4 text-sm font-bold text-brand-navy">Siguientes pasos recomendados</p>
              <ul className="mt-2 space-y-2 text-sm text-slate-700">
                <li className="flex gap-2">
                  <ArrowRight className="mt-0.5 h-4 w-4 shrink-0 text-brand-amber-deep" />
                  Busca prácticas en despachos especializados en {result.profile}.
                </li>
                <li className="flex gap-2">
                  <ArrowRight className="mt-0.5 h-4 w-4 shrink-0 text-brand-amber-deep" />
                  Toma optativas relacionadas con {chartData[0]?.subject} y {chartData[1]?.subject}.
                </li>
              </ul>
            </div>

            <button
              type="button"
              onClick={() => {
                localStorage.removeItem("lastResult");
                setLocation("/");
              }}
              className="inline-flex w-full items-center justify-center gap-2 rounded-2xl border-2 border-slate-200 bg-white py-3.5 font-heading font-semibold text-brand-navy transition-colors hover:bg-slate-50 cursor-pointer"
            >
              <RotateCcw className="h-4 w-4" />
              Volver al inicio
            </button>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
