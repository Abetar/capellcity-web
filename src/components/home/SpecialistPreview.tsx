"use client";

import Link from "next/link";
import { motion, useReducedMotion, type Variants } from "framer-motion";

function Container({ children }: { children: React.ReactNode }) {
  return <div className="mx-auto w-full max-w-6xl px-4">{children}</div>;
}

export default function SpecialistPreview() {
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
    <section className="bg-white">
      <Container>
        <motion.div
          variants={parent}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          className="py-14 md:py-20"
        >
          <motion.p
            variants={item}
            className="text-xs font-semibold tracking-wide text-brand-primary/80"
          >
            ESPECIALISTA
          </motion.p>

          <motion.div variants={item} className="mt-4 grid gap-6 md:grid-cols-3">
            <div className="aspect-square rounded-3xl border border-black/10 bg-brand-mist" />
            <div className="md:col-span-2 rounded-3xl border border-black/10 bg-brand-mist p-6 md:p-8">
              <h2 className="text-2xl font-semibold tracking-tight text-brand-ink">
                Atención profesional con enfoque estético y natural
              </h2>
              <p className="mt-3 text-base leading-relaxed text-brand-ink/70">
                Aquí pondremos la experiencia, credenciales y filosofía del especialista.
                (Nombre, cédula, certificaciones, etc.)
              </p>
              <div className="mt-6">
                <Link
                  href="/especialista"
                  className="inline-flex items-center justify-center rounded-full border border-black/10 bg-white px-6 py-3 text-sm font-semibold text-brand-ink hover:border-black/20"
                >
                  Ver perfil y credenciales
                </Link>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
