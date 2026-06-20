import { useState } from "react";
import { useQuery, useMutation } from "@tanstack/react-query";
import { useLocation } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import { Question } from "@shared/schema";
import { toast } from "@/components/ui/use-toast";
import { Loader2, Check, ArrowLeft, ArrowRight, Scale } from "lucide-react";

const fetchQuestions = async (): Promise<Question[]> => {
  const res = await fetch("/api/questions");
  if (!res.ok) throw new Error("Failed to fetch questions");
  return res.json();
};

const submitAnswers = async (answers: Record<number, string>) => {
  const res = await fetch("/api/score", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ answers }),
  });
  if (!res.ok) throw new Error("Failed to calculate score");
  return res.json();
};

const SECTION_STYLES: Record<string, string> = {
  Situacional: "bg-blue-100 text-blue-700",
  Aptitudes: "bg-amber-100 text-amber-700",
  Valores: "bg-emerald-100 text-emerald-700",
};

const OPTION_LETTERS = ["A", "B", "C", "D", "E"];

export default function TestPage() {
  const [, setLocation] = useLocation();
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [answers, setAnswers] = useState<Record<number, string>>({});

  const { data: questions, isLoading, isError } = useQuery({
    queryKey: ["questions"],
    queryFn: fetchQuestions,
  });

  const mutation = useMutation({
    mutationFn: submitAnswers,
    onSuccess: (data) => {
      localStorage.setItem("lastResult", JSON.stringify(data));
      setLocation("/result");
    },
    onError: () => {
      toast({ title: "Error", description: "No pudimos enviar tus respuestas", variant: "destructive" });
    },
  });

  if (isLoading)
    return (
      <div className="flex min-h-screen items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin text-brand-navy" />
      </div>
    );

  if (isError || !questions)
    return (
      <div className="flex min-h-screen items-center justify-center px-4 text-center">
        <div className="surface max-w-sm p-8">
          <p className="font-heading text-lg font-bold text-brand-navy">No se pudieron cargar las preguntas</p>
          <p className="mt-2 text-sm text-slate-600">Verifica que el servidor esté corriendo e inténtalo de nuevo.</p>
        </div>
      </div>
    );

  const currentQuestion = questions[currentQuestionIndex];
  const isLastQuestion = currentQuestionIndex === questions.length - 1;
  const progress = ((currentQuestionIndex + 1) / questions.length) * 100;
  const canProceed = !!answers[currentQuestion.id];

  const handleOptionSelect = (text: string) => {
    setAnswers((prev) => ({ ...prev, [currentQuestion.id]: text }));
  };

  const handleNext = () => {
    if (isLastQuestion) {
      mutation.mutate(answers);
    } else {
      setDirection(1);
      setCurrentQuestionIndex((prev) => prev + 1);
    }
  };

  const handleBack = () => {
    if (currentQuestionIndex === 0) {
      setLocation("/");
    } else {
      setDirection(-1);
      setCurrentQuestionIndex((prev) => prev - 1);
    }
  };

  return (
    <div className="relative min-h-screen overflow-hidden">
      <div className="blob -left-20 top-10 h-72 w-72 bg-amber-200" />
      <div className="blob right-[-8rem] bottom-10 h-80 w-80 bg-blue-200" />

      <div className="relative z-10 mx-auto flex min-h-screen max-w-2xl flex-col px-5 py-6">
        {/* Top bar: marca + progreso */}
        <div className="mb-8">
          <div className="mb-3 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="grid h-8 w-8 place-items-center rounded-xl bg-brand-navy text-white">
                <Scale className="h-4 w-4" />
              </span>
              <span className="font-heading text-sm font-extrabold text-brand-navy">AbogaDucks</span>
            </div>
            <span className="text-sm font-semibold text-slate-500">
              {currentQuestionIndex + 1} / {questions.length}
            </span>
          </div>
          <div className="h-2.5 w-full overflow-hidden rounded-full bg-slate-200">
            <motion.div
              className="h-full rounded-full bg-gradient-to-r from-brand-navy to-brand-navy-soft"
              initial={false}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            />
          </div>
        </div>

        {/* Tarjeta de pregunta */}
        <div className="flex flex-1 items-center">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={currentQuestion.id}
              custom={direction}
              initial={{ opacity: 0, x: direction * 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: direction * -40 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="surface w-full p-6 md:p-8"
            >
              <span
                className={`inline-block rounded-full px-3 py-1 text-xs font-bold uppercase tracking-wide ${
                  SECTION_STYLES[currentQuestion.section] ?? "bg-slate-100 text-slate-600"
                }`}
              >
                {currentQuestion.section}
              </span>

              <h2 className="mt-4 font-heading text-xl font-bold leading-snug text-brand-navy md:text-2xl">
                {currentQuestion.text}
              </h2>
              <p className="mt-1.5 text-sm text-slate-500">Elige la opción que mejor te describa</p>

              <div className="mt-6 space-y-3">
                {currentQuestion.options.map((option, idx) => {
                  const selected = answers[currentQuestion.id] === option.text;
                  return (
                    <button
                      type="button"
                      key={idx}
                      onClick={() => handleOptionSelect(option.text)}
                      aria-pressed={selected ? "true" : "false"}
                      className={`flex w-full items-center gap-3 rounded-2xl border-2 p-4 text-left transition-all duration-200 cursor-pointer ${
                        selected
                          ? "border-brand-navy bg-secondary shadow-card"
                          : "border-slate-200 bg-white hover:border-brand-navy-soft/50 hover:bg-slate-50"
                      }`}
                    >
                      <span
                        className={`grid h-8 w-8 shrink-0 place-items-center rounded-xl text-sm font-bold transition-colors ${
                          selected ? "bg-brand-navy text-white" : "bg-slate-100 text-slate-500"
                        }`}
                      >
                        {selected ? <Check className="h-4 w-4" /> : OPTION_LETTERS[idx]}
                      </span>
                      <span
                        className={`text-[15px] leading-snug ${
                          selected ? "font-semibold text-brand-navy" : "text-slate-700"
                        }`}
                      >
                        {option.text}
                      </span>
                    </button>
                  );
                })}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navegación */}
        <div className="mt-8 flex items-center justify-between gap-4">
          <button
            type="button"
            onClick={handleBack}
            className="inline-flex items-center gap-1.5 rounded-2xl px-4 py-3 text-sm font-semibold text-slate-500 transition-colors hover:text-brand-navy cursor-pointer"
          >
            <ArrowLeft className="h-4 w-4" />
            {currentQuestionIndex === 0 ? "Inicio" : "Anterior"}
          </button>

          <button
            type="button"
            onClick={handleNext}
            disabled={!canProceed || mutation.isPending}
            className="btn-duck disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:translate-y-0"
          >
            {mutation.isPending ? (
              <>
                <Loader2 className="h-5 w-5 animate-spin" />
                Analizando...
              </>
            ) : isLastQuestion ? (
              <>
                Ver mi resultado
                <ArrowRight className="h-5 w-5" />
              </>
            ) : (
              <>
                Siguiente
                <ArrowRight className="h-5 w-5" />
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
