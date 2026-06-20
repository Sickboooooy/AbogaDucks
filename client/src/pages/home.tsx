import { useLocation } from "wouter";
import { motion } from "framer-motion";
import {
  Scale,
  Sparkles,
  Radar as RadarIcon,
  ListChecks,
  Clock,
  Layers,
  ArrowRight,
  ShieldCheck,
} from "lucide-react";

const features = [
  {
    icon: Scale,
    title: "12 perfiles jurídicos",
    desc: "Desde Penal y Constitucional hasta Digital y Ambiental. Encuentra dónde brilla tu vocación.",
  },
  {
    icon: RadarIcon,
    title: "Radar de 10 habilidades",
    desc: "Visualiza tus fortalezas: análisis, oratoria, negociación, ética y más, en un gráfico claro.",
  },
  {
    icon: Sparkles,
    title: "Tu AbogaDuck con IA",
    desc: "Recibe un pato abogado personalizado, generado a tu medida según tu resultado.",
  },
];

const stats = [
  { icon: ListChecks, value: "30", label: "preguntas" },
  { icon: Clock, value: "~4", label: "minutos" },
  { icon: Layers, value: "12", label: "perfiles" },
];

export default function HomePage() {
  const [, setLocation] = useLocation();

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Blobs decorativos */}
      <div className="blob -left-24 -top-24 h-96 w-96 bg-amber-200" />
      <div className="blob right-[-10rem] top-32 h-[28rem] w-[28rem] bg-blue-200" style={{ animationDelay: "-6s" }} />
      <div className="blob bottom-[-8rem] left-1/3 h-80 w-80 bg-sky-200" style={{ animationDelay: "-12s" }} />

      {/* Navbar flotante */}
      <header className="relative z-10 mx-auto flex max-w-6xl items-center justify-between px-5 pt-6">
        <div className="flex items-center gap-2.5">
          <span className="grid h-10 w-10 place-items-center rounded-2xl bg-brand-navy text-white shadow-soft">
            <Scale className="h-5 w-5" />
          </span>
          <span className="font-heading text-xl font-extrabold tracking-tight text-brand-navy">
            Aboga<span className="text-brand-amber-deep">Ducks</span>
          </span>
        </div>
        <span className="hidden items-center gap-1.5 rounded-full border border-slate-200 bg-white/70 px-3.5 py-1.5 text-sm font-semibold text-slate-600 backdrop-blur sm:inline-flex">
          <ShieldCheck className="h-4 w-4 text-emerald-600" />
          Hecho para estudiantes de Derecho · MX
        </span>
      </header>

      {/* Hero */}
      <main className="relative z-10 mx-auto max-w-6xl px-5">
        <section className="grid grid-cols-1 items-center gap-10 py-14 md:grid-cols-2 md:py-20">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <span className="inline-flex items-center gap-2 rounded-full bg-secondary px-4 py-1.5 text-sm font-semibold text-brand-navy">
              <Sparkles className="h-4 w-4 text-brand-amber-deep" />
              Test vocacional jurídico
            </span>

            <h1 className="mt-5 font-heading text-4xl font-extrabold leading-[1.1] tracking-tight text-brand-navy md:text-6xl">
              Descubre tu{" "}
              <span className="bg-gradient-to-r from-brand-amber-deep to-brand-amber bg-clip-text text-transparent">
                AbogaDuck
              </span>{" "}
              interior
            </h1>

            <p className="mt-5 max-w-md text-lg leading-relaxed text-slate-600">
              Responde un test ágil y diseñado para ti. Identifica tu especialidad ideal del
              Derecho y llévate tu pato abogado personalizado. Sin rollo, en minutos.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <button type="button" onClick={() => setLocation("/test")} className="btn-duck text-lg">
                Iniciar test
                <ArrowRight className="h-5 w-5" />
              </button>
              <span className="text-sm font-medium text-slate-500">
                Gratis · menos de 4 minutos
              </span>
            </div>

            {/* Stats */}
            <div className="mt-10 flex max-w-md items-stretch gap-3">
              {stats.map((s) => (
                <div
                  key={s.label}
                  className="surface flex flex-1 flex-col items-center gap-1 px-3 py-4 text-center"
                >
                  <s.icon className="h-5 w-5 text-brand-navy-soft" />
                  <span className="font-heading text-2xl font-bold text-brand-navy">{s.value}</span>
                  <span className="text-xs font-medium text-slate-500">{s.label}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Showcase del pato */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.15, ease: [0.34, 1.56, 0.64, 1] }}
            className="relative"
          >
            <div className="absolute inset-6 rounded-[2.5rem] bg-brand-amber/30 blur-2xl" />
            <div className="surface relative overflow-hidden rounded-[2.5rem] p-3 animate-float">
              <img
                src="/abogaduck_variations.png"
                alt="Variaciones de patos abogados (AbogaDucks) según especialidad jurídica"
                className="w-full rounded-[2rem] object-cover"
              />
            </div>
            <div className="absolute -bottom-4 -left-3 rotate-[-4deg] rounded-2xl bg-brand-navy px-4 py-2 text-sm font-semibold text-white shadow-soft">
              ¿Cuál serás tú? 🦆
            </div>
          </motion.div>
        </section>

        {/* Features */}
        <section className="pb-16">
          <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
            {features.map((f, i) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="surface group p-6 transition-shadow duration-200 hover:shadow-soft"
              >
                <span className="grid h-12 w-12 place-items-center rounded-2xl bg-secondary text-brand-navy transition-transform duration-200 group-hover:scale-105">
                  <f.icon className="h-6 w-6" />
                </span>
                <h3 className="mt-4 font-heading text-lg font-bold text-brand-navy">{f.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* CTA final */}
        <section className="pb-20">
          <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-brand-navy to-brand-navy-deep px-8 py-12 text-center shadow-soft">
            <div className="blob right-0 top-0 h-64 w-64 bg-blue-400/40" />
            <h2 className="relative font-heading text-2xl font-extrabold text-white md:text-3xl">
              ¿Listo para conocer a tu pato abogado?
            </h2>
            <p className="relative mx-auto mt-3 max-w-lg text-blue-100">
              Un test, doce posibilidades. Tu vocación jurídica te está esperando.
            </p>
            <button
              type="button"
              onClick={() => setLocation("/test")}
              className="btn-duck relative mt-7 text-lg"
            >
              Comenzar ahora
              <ArrowRight className="h-5 w-5" />
            </button>
          </div>
        </section>
      </main>

      <footer className="relative z-10 pb-8 text-center text-sm text-slate-400">
        AbogaDucks · Herramienta educativa de orientación vocacional
      </footer>
    </div>
  );
}
