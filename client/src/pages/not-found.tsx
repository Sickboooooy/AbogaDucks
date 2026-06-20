import { useLocation } from "wouter";
import { Compass, ArrowLeft } from "lucide-react";

export default function NotFound() {
  const [, setLocation] = useLocation();

  return (
    <div className="relative flex min-h-screen w-full items-center justify-center overflow-hidden px-4">
      <div className="blob -left-20 top-10 h-72 w-72 bg-amber-200" />
      <div className="blob right-[-6rem] bottom-10 h-72 w-72 bg-blue-200" />

      <div className="surface relative z-10 w-full max-w-md p-8 text-center">
        <span className="mx-auto grid h-14 w-14 place-items-center rounded-2xl bg-secondary text-brand-navy">
          <Compass className="h-7 w-7" />
        </span>
        <h1 className="mt-5 font-heading text-5xl font-extrabold text-brand-navy">404</h1>
        <p className="mt-2 font-heading text-lg font-bold text-brand-navy">
          Este pato voló a otro estanque
        </p>
        <p className="mt-2 text-sm text-slate-600">
          La página que buscas no existe. Volvamos a terreno conocido.
        </p>
        <button type="button" onClick={() => setLocation("/")} className="btn-duck mt-6">
          <ArrowLeft className="h-5 w-5" />
          Volver al inicio
        </button>
      </div>
    </div>
  );
}
