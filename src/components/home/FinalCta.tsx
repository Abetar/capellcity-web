"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import { site } from "@/config/site";

function Container({ children }: { children: React.ReactNode }) {
  return <div className="mx-auto w-full max-w-6xl px-4">{children}</div>;
}

export default function FinalCta() {
  const reduce = useReducedMotion();

  const parent: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { duration: reduce ? 0 : 0.2, staggerChildren: reduce ? 0 : 0.08 },
    },
  };

  const item: Variants = {
    hidden: { opacity: 0, y: 10 },
    show: { opacity: 1, y: 0, transition: { duration: reduce ? 0 : 0.45, ease: "easeOut" } },
  };

  const whatsappHref = `https://wa.me/${site.contact.whatsapp}?text=${encodeURIComponent(
    "Hola, quiero agendar una valoración para injerto capilar en Capellcity."
  )}`;

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
          <motion.div
            variants={item}
            className="overflow-hidden rounded-3xl border border-black/10 bg-brand-primary p-8 text-white shadow-[0_10px_30px_rgba(0,0,0,0.10)] md:p-12"
          >
            <div className="max-w-2xl">
              <p className="text-xs font-semibold tracking-wide text-white/80">
                CAPELLCITY
              </p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl text-white">
                Renueva tu imagen. Renueva tu vida.
              </h2>
              <p className="mt-3 text-base leading-relaxed text-white/85">
                Agenda una valoración y recibe orientación personalizada. La vía más rápida es WhatsApp.
              </p>

              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <a
                  href={whatsappHref}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center rounded-full bg-brand-gold px-6 py-3 text-sm font-semibold text-brand-ink hover:opacity-95"
                >
                  Agendar por WhatsApp
                </a>
                <a
                  href={`tel:${site.contact.phone}`}
                  className="inline-flex items-center justify-center rounded-full border border-white/25 bg-transparent px-6 py-3 text-sm font-semibold text-white hover:border-white/40"
                >
                  Llamar ahora
                </a>
              </div>
            </div>

            <div className="pointer-events-none relative mt-10 h-0">
              <div className="absolute -right-24 -top-40 h-72 w-72 rounded-full bg-white/10 blur-2xl" />
              <div className="absolute -right-10 -top-24 h-44 w-44 rounded-full bg-brand-gold/20 blur-2xl" />
            </div>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
