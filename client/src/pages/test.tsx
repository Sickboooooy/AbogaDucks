import { useState } from "react";
import { useQuery, useMutation } from "@tanstack/react-query";
import { useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Question } from "@shared/schema";
import { toast } from "@/components/ui/use-toast";
import { Loader2 } from "lucide-react";

// Initial mock questions if backend not ready, but we will try to fetch
const fetchQuestions = async (): Promise<Question[]> => {
  const res = await fetch("/api/questions");
  if (!res.ok) throw new Error("Failed to fetch questions");
  return res.json();
};

const submitAnswers = async (answers: Record<number, string>) => {
  const res = await fetch("/api/score", {
     method: "POST",
     headers: { "Content-Type": "application/json" },
     body: JSON.stringify({ answers })
  });
  if (!res.ok) throw new Error("Failed to calculate score");
  return res.json();
};

export default function TestPage() {
  const [, setLocation] = useLocation();
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  
  const { data: questions, isLoading, isError } = useQuery({
    queryKey: ["questions"],
    queryFn: fetchQuestions
  });

  const mutation = useMutation({
    mutationFn: submitAnswers,
    onSuccess: (data) => {
      // Navigate to result, passing data via state or query params. 
      // For simplicity in this demo, we'll store in localStorage or just pass via ID if we stored it in backend.
      // Since we just get the result back without ID, we might need to display it differently.
      // Let's assume we pass the result object in state (wouter doesn't support state nav easily without backend persistence).
      // We will persist to localStorage for now.
      localStorage.setItem("lastResult", JSON.stringify(data));
      setLocation("/result");
    },
    onError: () => {
      toast({ title: "Error", description: "Could not submit answers", variant: "destructive" });
    }
  });

  if (isLoading) return <div className="flex h-screen items-center justify-center"><Loader2 className="h-8 w-8 animate-spin text-blue-600" /></div>;
  if (isError || !questions) return <div className="text-center p-8">Error loading questions. Is the backend running?</div>;

  const currentQuestion = questions[currentQuestionIndex];
  const isLastQuestion = currentQuestionIndex === questions.length - 1;
  const progress = ((currentQuestionIndex + 1) / questions.length) * 100;

  const handleOptionSelect = (text: string) => {
    setAnswers(prev => ({ ...prev, [currentQuestion.id]: text }));
  };

  const handleNext = () => {
    if (isLastQuestion) {
      mutation.mutate(answers);
    } else {
      setCurrentQuestionIndex(prev => prev + 1);
    }
  };

  const canProceed = !!answers[currentQuestion.id];

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-2xl mb-8">
        <div className="flex justify-between text-sm text-gray-500 mb-2">
           <span>Pregunta {currentQuestionIndex + 1} de {questions.length}</span>
           <span>{Math.round(progress)}%</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2.5">
          <div className="bg-blue-600 h-2.5 rounded-full transition-all duration-300" style={{ width: `${progress}%` }}></div>
        </div>
      </div>

      <Card className="w-full max-w-2xl">
        <CardHeader>
          <span className="text-xs font-bold text-blue-600 uppercase tracking-wider mb-2 block">
            {currentQuestion.section}
          </span>
          <CardTitle className="text-2xl">{currentQuestion.text}</CardTitle>
          <CardDescription>Selecciona la opción que mejor te describa</CardDescription>
        </CardHeader>
        <CardContent className="space-y-3">
          {currentQuestion.options.map((option, idx) => (
             <button
               key={idx}
               onClick={() => handleOptionSelect(option.text)}
               className={`w-full text-left p-4 rounded-lg border-2 transition-all duration-200 flex items-center justify-between
                 ${answers[currentQuestion.id] === option.text 
                   ? "border-blue-600 bg-blue-50 text-blue-900 font-medium shadow-sm" 
                   : "border-gray-200 hover:border-blue-300 hover:bg-gray-50 text-gray-700"}`}
             >
               {option.text}
             </button>
          ))}
        </CardContent>
        <CardFooter className="flex justify-end pt-6">
           <Button 
             onClick={handleNext} 
             disabled={!canProceed || mutation.isPending}
             size="lg"
             className="w-full md:w-auto"
           >
             {mutation.isPending ? "Analizando..." : isLastQuestion ? "Finalizar Test" : "Siguiente"}
           </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
