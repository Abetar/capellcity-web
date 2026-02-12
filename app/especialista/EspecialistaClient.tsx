"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import { site } from "@/config/site";

function Container({ children }: { children: React.ReactNode }) {
  return <div className="mx-auto w-full max-w-6xl px-4">{children}</div>;
}

export default function EspecialistaClient() {
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
        <motion.div variants={parent} initial="hidden" animate="show" className="py-12 md:py-16">
          <motion.h1
            variants={item}
            className="text-3xl font-semibold tracking-tight text-brand-ink sm:text-4xl"
          >
            Especialista
          </motion.h1>

          <motion.p variants={item} className="mt-3 max-w-2xl text-base text-brand-ink/70">
            Aquí irá la información profesional, credenciales y experiencia del especialista.
            (Nombre, cédula, certificaciones, enfoque, etc.)
          </motion.p>

          <motion.div variants={parent} className="mt-10 grid gap-6 md:grid-cols-3">
            <motion.div
              variants={item}
              className="aspect-square rounded-3xl border border-black/10 bg-brand-mist"
            />
            <motion.div
              variants={item}
              className="md:col-span-2 rounded-3xl border border-black/10 bg-brand-mist p-6"
            >
              <p className="text-sm font-semibold text-brand-ink">Información de contacto</p>
              <p className="mt-2 text-sm text-brand-ink/70">
                Teléfono:{" "}
                <a className="underline" href={`tel:${site.contact.phone}`}>
                  {site.contact.displayPhone}
                </a>
              </p>
              <p className="mt-1 text-sm text-brand-ink/70">
                Ubicación: {site.location.fullAddress}
              </p>
            </motion.div>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
