"use client";

import Link from "next/link";
import { motion, useReducedMotion, type Variants } from "framer-motion";

function Container({ children }: { children: React.ReactNode }) {
  return <div className="mx-auto w-full max-w-6xl px-4">{children}</div>;
}

const STEPS = [
  { n: "01", t: "Valoración", d: "Evaluamos tu caso y definimos objetivos realistas." },
  { n: "02", t: "Diseño", d: "Línea frontal y distribución para un resultado natural." },
  { n: "03", t: "Procedimiento", d: "Técnica FUE o DHI según tu plan personalizado." },
  { n: "04", t: "Seguimiento", d: "Indicaciones y control para cuidar tu inversión." },
];

export default function Process() {
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
        <div className="py-14 md:py-20">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-xs font-semibold tracking-wide text-brand-primary/80">
                PROCESO
              </p>
              <h2 className="mt-2 text-3xl font-semibold tracking-tight text-brand-ink sm:text-4xl">
                Un proceso claro, de principio a fin
              </h2>
              <p className="mt-3 max-w-2xl text-base leading-relaxed text-brand-ink/70">
                Te explicamos expectativas, plan, ejecución y seguimiento. Sin humo.
              </p>
            </div>

            <Link
              href="/servicios"
              className="inline-flex items-center justify-center rounded-full border border-black/10 bg-white px-6 py-3 text-sm font-semibold text-brand-ink hover:border-black/20"
            >
              Ver servicios
            </Link>
          </div>

          <motion.div
            variants={parent}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
          >
            {STEPS.map((s) => (
              <motion.div
                key={s.n}
                variants={item}
                className="relative overflow-hidden rounded-3xl border border-black/10 bg-brand-mist p-6"
              >
                <div className="pointer-events-none absolute -right-3 -top-10 select-none text-[88px] font-semibold text-brand-primary/10">
                  {s.n}
                </div>
                <div className="relative">
                  <p className="text-xs font-semibold tracking-wide text-brand-primary/80">
                    PASO {s.n}
                  </p>
                  <p className="mt-2 text-lg font-semibold text-brand-ink">{s.t}</p>
                  <p className="mt-2 text-sm leading-relaxed text-brand-ink/70">{s.d}</p>
                  <div className="mt-5 h-[2px] w-14 rounded-full bg-brand-gold/80" />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
