import type { Express } from "express";
import { createServer, type Server } from "http";
import { QUESTIONS } from "../shared/questions"; // Relative path might need adjustment depending on build
import { DuckProfile, Dimension, TestResult } from "../shared/schema";

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

  // Gemini Image Generation (Scenario Generation)
  app.post("/api/generate-duck", async (req, res) => {
    const { profile, customPrompt } = req.body;
    
    try {
        const apiKey = process.env.GEMINI_API_KEY;
        let aiDescription = "Gemini API Key not configured. Using standard profile.";

        if (apiKey) {
            const { GoogleGenerativeAI } = await import("@google/generative-ai");
            const genAI = new GoogleGenerativeAI(apiKey);
            const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

            const prompt = `
              You are a creative character designer for 'AbogaDucks', a game about lawyer ducks.
              Create a short, fun, 2-sentence visual description of a duck character with the profile: ${profile} Law.
              User custom note: ${customPrompt || "None"}.
              The description should mention their outfit, accessories (like a gavel, books, etc.), and personality.
              Keep it cute and Nano Banana style.
            `;

            const result = await model.generateContent(prompt);
            const response = await result.response;
            aiDescription = response.text();
        }

        // Mock Image Generation (returning one of our assets based on profile logic or random)
        // In a real app with Imagen 3, we would send 'aiDescription' to the image generator.
        
        // Simple mapping for demo
        let imageUrl = "/abogaduck_variations.png"; // Default set
        if (profile === DuckProfile.PENAL) imageUrl = "/abogaduck_variations.png"; // We only have the one sheet for now

        res.json({ 
            success: true, 
            description: aiDescription,
            imageUrl: imageUrl
        });

    } catch (error: any) {
        console.error("Gemini Error:", error);
        res.status(500).json({ success: false, message: error.message });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
