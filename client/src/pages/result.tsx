import { useEffect, useState } from "react";
import { useLocation } from "wouter";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { TestResult, Dimension } from "@shared/schema";
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from "recharts";
import { Loader2, Download, Share2 } from "lucide-react";

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

  // Format data for Recharts
  const chartData = Object.keys(result.scores).map(key => ({
    subject: key.split(" ")[0], // Shorten name for chart
    A: result.scores[key as Dimension],
    fullMark: 10, // Assuming max score
  }));

  const handleGenerate = async () => {
    setGenerating(true);
    try {
      const res = await fetch("/api/generate-duck", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ 
            profile: result.profile,
            customPrompt: `A cute lawyer duck specializing in ${result.profile} law` 
        })
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

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-8">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
        
        {/* Left Column: Result Card */}
        <div className="space-y-6">
          <Card className="border-t-4 border-t-blue-600 shadow-lg">
            <CardHeader className="text-center pb-2">
              <div className="mx-auto bg-blue-100 text-blue-800 px-4 py-1 rounded-full text-sm font-semibold w-fit mb-4">
                Resultado de Compatibilidad
              </div>
              <CardTitle className="text-4xl font-bold text-gray-900">{result.profile}Duck</CardTitle>
              <CardDescription className="text-lg mt-2">{result.description}</CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col items-center">
              
              <div className="aspect-square w-full max-w-sm bg-gray-100 rounded-xl overflow-hidden mb-6 relative group">
                {generatedImage ? (
                    <img src={generatedImage} alt="Generated Duck" className="w-full h-full object-cover" />
                ) : result.imageUrl ? (
                    <img src={result.imageUrl} alt="Profile Placeholder" className="w-full h-full object-cover" />
                ) : (
                    <div className="w-full h-full flex items-center justify-center text-gray-400">No Image</div>
                )}
                
                {/* Overlay for generated image actions */}
                {generatedImage && (
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                    <Button variant="secondary" size="icon"><Download className="h-4 w-4" /></Button>
                    <Button variant="secondary" size="icon"><Share2 className="h-4 w-4" /></Button>
                  </div>
                )}
              </div>

              {aiDescription && (
                <div className="w-full bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-4 text-center">
                    <h3 className="text-sm font-bold text-yellow-800 mb-1">¡AbogaDuck Personalizado!</h3>
                    <p className="text-gray-700 text-sm italic">"{aiDescription}"</p>
                </div>
              )}

              {!generatedImage || !aiDescription ? (
                <Button 
                  onClick={handleGenerate} 
                  disabled={generating || (!!generatedImage && !!aiDescription)}
                  className="w-full max-w-sm bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-white font-bold py-6 shadow-md"
                >
                  {generating ? (
                    <><Loader2 className="mr-2 h-4 w-4 animate-spin" /> Creando tu AbogaDuck...</>
                  ) : (
                    "¡Generar mi AbogaDuck Oficial!"
                  )}
                </Button>
              ) : null}
            </CardContent>
          </Card>
        </div>

        {/* Right Column: Analytics */}
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Perfil de Habilidades</CardTitle>
              <CardDescription>Tus fortalezas en las 10 dimensiones jurídicas</CardDescription>
            </CardHeader>
            <CardContent className="h-[400px]">
              <ResponsiveContainer width="100%" height="100%">
                <RadarChart cx="50%" cy="50%" outerRadius="80%" data={chartData}>
                  <PolarGrid />
                  <PolarAngleAxis dataKey="subject" tick={{ fill: '#6b7280', fontSize: 12 }} />
                  <PolarRadiusAxis angle={30} domain={[0, 10]} />
                  <Radar
                    name="Tus Puntos"
                    dataKey="A"
                    stroke="#2563eb"
                    fill="#3b82f6"
                    fillOpacity={0.5}
                  />
                </RadarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          <Card className="bg-blue-50 border-blue-100">
            <CardHeader>
              <CardTitle className="text-blue-900">¿Qué significa este perfil?</CardTitle>
            </CardHeader>
            <CardContent className="text-blue-800 text-sm leading-relaxed">
              Tu perfil indica una fuerte inclinación hacia áreas que requieren {Object.entries(result.scores).sort(([,a], [,b]) => b-a)[0][0]}. 
              Esto sugiere que te desempeñarías excelentemente en entornos donde la precisión y el análisis son clave.
              <br /><br />
              <strong>Siguientes pasos recomendados:</strong>
              <ul className="list-disc pl-5 mt-2 space-y-1">
                <li>Buscar pasantías en despachos especializados en {result.profile}.</li>
                <li>Tomar optativas relacionadas con {chartData[0].subject} y {chartData[1].subject}.</li>
              </ul>
            </CardContent>
          </Card>

          <div className="flex justify-center">
             <Button variant="outline" onClick={() => { localStorage.removeItem("lastResult"); setLocation("/"); }}>
               Volver al Inicio
             </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
