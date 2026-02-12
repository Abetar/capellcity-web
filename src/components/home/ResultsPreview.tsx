"use client";

import Link from "next/link";
import { motion, useReducedMotion, type Variants } from "framer-motion";

function Container({ children }: { children: React.ReactNode }) {
  return <div className="mx-auto w-full max-w-6xl px-4">{children}</div>;
}

export default function ResultsPreview() {
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
    show: { opacity: 1, y: 0, transition: { duration: reduce ? 0 : 0.45, ease: "easeOut" } },
  };

  return (
    <section className="bg-brand-mist">
      <Container>
        <div className="py-14 md:py-20">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-xs font-semibold tracking-wide text-brand-primary/80">
                RESULTADOS
              </p>
              <h2 className="mt-2 text-3xl font-semibold tracking-tight text-brand-ink sm:text-4xl">
                Casos reales (próximamente)
              </h2>
              <p className="mt-3 max-w-2xl text-base leading-relaxed text-brand-ink/70">
                Aquí mostraremos resultados antes/después y evolución por etapas.
              </p>
            </div>

            <Link
              href="/resultados"
              className="inline-flex items-center justify-center rounded-full bg-brand-primary px-6 py-3 text-sm font-semibold text-white shadow-sm hover:opacity-95"
            >
              Ver galería
            </Link>
          </div>

          <motion.div
            variants={parent}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
          >
            {Array.from({ length: 6 }).map((_, i) => (
              <motion.div
                key={i}
                variants={item}
                className="aspect-[4/5] rounded-3xl border border-black/10 bg-white/70"
              />
            ))}
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
