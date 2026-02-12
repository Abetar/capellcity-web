"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import ResultsHeroVideo from "./ResultsHeroVideo";
import { site } from "@/config/site";
import { Instagram, Facebook } from "lucide-react";

function Container({ children }: { children: React.ReactNode }) {
  return <div className="mx-auto w-full max-w-6xl px-4">{children}</div>;
}

export default function ResultadosClient() {
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
        <motion.div
          variants={parent}
          initial="hidden"
          animate="show"
          className="py-12 md:py-16"
        >
          <motion.h1
            variants={item}
            className="text-3xl font-semibold tracking-tight text-brand-ink sm:text-4xl"
          >
            Resultados
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-3 max-w-2xl text-base text-brand-ink/70"
          >
            Próximamente mostraremos casos y resultados reales. Mientras tanto,
            puedes ver más evidencia en nuestras redes sociales.
          </motion.p>

          {/* Video Hero */}
          <motion.div variants={item} className="mt-8">
            <ResultsHeroVideo
              src="/videos/resultados-hero.mp4"
              poster="/images/resultados-poster.jpg"
            />
          </motion.div>

          {/* CTA Redes (FUERTES) */}
          <motion.div
            variants={item}
            className="mt-6 flex flex-col gap-3 sm:flex-row"
          >
            <a
              href={site.social.instagram}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 px-6 py-3 text-sm font-semibold text-white shadow-md transition hover:opacity-95"
            >
              <Instagram className="h-5 w-5" />
              Ver más en Instagram
            </a>

            <a
              href={site.social.facebook}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[#1877F2] px-6 py-3 text-sm font-semibold text-white shadow-md transition hover:opacity-95"
            >
              <Facebook className="h-5 w-5" />
              Ver casos en Facebook
            </a>
          </motion.div>

          {/* Grid de cards */}
          <motion.div
            variants={parent}
            className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
          >
            {Array.from({ length: 9 }).map((_, i) => (
              <motion.div
                key={i}
                variants={item}
                className="aspect-[4/5] rounded-3xl border border-black/10 bg-brand-mist"
              />
            ))}
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
