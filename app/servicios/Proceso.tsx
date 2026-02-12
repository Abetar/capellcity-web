"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";


function Container({ children }: { children: React.ReactNode }) {
  return <div className="mx-auto w-full max-w-6xl px-4">{children}</div>;
}

const STEPS = [
  {
    n: "01",
    title: "Valoración",
    desc: "Revisamos tu caso, expectativas y el objetivo de densidad. Te explicamos opciones y etapas.",
  },
  {
    n: "02",
    title: "Diseño",
    desc: "Definimos línea frontal, distribución y zonas prioritarias para un resultado natural.",
  },
  {
    n: "03",
    title: "Procedimiento",
    desc: "Realizamos el injerto con técnica FUE o DHI según tu plan, con enfoque en detalle y naturalidad.",
  },
  {
    n: "04",
    title: "Seguimiento",
    desc: "Indicaciones y controles para cuidar el cabello nativo y acompañar la evolución del resultado.",
  },
];

export default function Proceso() {
  const reduce = useReducedMotion();

  const parent: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        duration: reduce ? 0 : 0.2,
        staggerChildren: reduce ? 0 : 0.08,
        delayChildren: reduce ? 0 : 0.05,
      },
    },
  };

  const item: Variants = {
    hidden: { opacity: 0, y: 10 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: reduce ? 0 : 0.45, ease: "easeOut" },
    },
  };

  return (
    <section className="bg-white">
      <Container>
        <div className="py-12 md:py-16">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-xs font-semibold tracking-wide text-brand-primary/80">
                PROCESO
              </p>
              <h2 className="mt-2 text-2xl font-semibold tracking-tight text-brand-ink sm:text-3xl">
                Un proceso claro, de principio a fin
              </h2>
              <p className="mt-3 max-w-2xl text-base leading-relaxed text-brand-ink/70">
                No vendemos “milagros”. Te damos un plan realista, una ejecución
                cuidadosa y seguimiento para proteger tu resultado.
              </p>
            </div>

            {/* “Sello” visual para identidad (no copiado de capillarte) */}
            <div className="inline-flex items-center gap-2 self-start rounded-full border border-black/10 bg-brand-mist px-4 py-2 text-xs font-semibold text-brand-ink">
              <span className="h-2 w-2 rounded-full bg-brand-gold" />
              Enfoque en resultados naturales
            </div>
          </div>

          <motion.div
            variants={parent}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            className="mt-10 grid gap-4 lg:grid-cols-2"
          >
            {STEPS.map((s) => (
              <motion.div
                key={s.n}
                variants={item}
                className="relative overflow-hidden rounded-3xl border border-black/10 bg-brand-mist p-6"
              >
                {/* Número grande de fondo */}
                <div className="pointer-events-none absolute -right-3 -top-10 select-none text-[110px] font-semibold tracking-tight text-brand-primary/10">
                  {s.n}
                </div>

                <div className="relative">
                  <p className="text-xs font-semibold tracking-wide text-brand-primary/80">
                    PASO {s.n}
                  </p>
                  <h3 className="mt-2 text-lg font-semibold text-brand-ink">
                    {s.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-brand-ink/70">
                    {s.desc}
                  </p>

                  {/* Línea dorada para identidad */}
                  <div className="mt-5 h-[2px] w-14 rounded-full bg-brand-gold/80" />
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Barra final tipo “confidence strip” */}
          <div className="mt-10 rounded-3xl border border-black/10 bg-white p-6 md:p-8">
            <div className="grid gap-4 md:grid-cols-3">
              {[
                { t: "Valoración honesta", d: "Te decimos qué es realista para tu caso." },
                { t: "Diseño natural", d: "Línea frontal y densidad con criterio estético." },
                { t: "Seguimiento", d: "Indicaciones y control para cuidar tu inversión." },
              ].map((x) => (
                <div key={x.t} className="rounded-2xl bg-brand-mist p-5">
                  <p className="text-sm font-semibold text-brand-ink">{x.t}</p>
                  <p className="mt-1 text-sm text-brand-ink/70">{x.d}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
