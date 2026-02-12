"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import { site } from "@/config/site";

function Container({ children }: { children: React.ReactNode }) {
  return <div className="mx-auto w-full max-w-6xl px-4">{children}</div>;
}

export default function ContactPreview() {
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

  const whatsappHref = `https://wa.me/${site.contact.whatsapp}?text=${encodeURIComponent(
    "Hola, quiero agendar una valoración para injerto capilar en Capellcity."
  )}`;

  return (
    <section className="bg-brand-mist">
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
            CONTACTO
          </motion.p>

          <motion.h2
            variants={item}
            className="mt-2 text-3xl font-semibold tracking-tight text-brand-ink sm:text-4xl"
          >
            Agenda por WhatsApp
          </motion.h2>

          <motion.p
            variants={item}
            className="mt-3 max-w-2xl text-base text-brand-ink/70"
          >
            Estamos en Nuevo Laredo. Contáctanos para valoración y plan personalizado.
          </motion.p>

          <motion.div
            variants={parent}
            className="mt-10 grid gap-6 md:grid-cols-2"
          >
            {/* Card Contacto */}
            <motion.div
              variants={item}
              className="rounded-3xl border border-black/10 bg-white p-6 shadow-sm"
            >
              <p className="text-sm font-semibold text-brand-ink">
                Capellcity
              </p>

              <p className="mt-2 text-sm text-brand-ink/70">
                {site.location.fullAddress}
              </p>

              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <a
                  href={whatsappHref}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center rounded-full bg-brand-primary px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:opacity-95"
                >
                  WhatsApp
                </a>

                <a
                  href={`tel:${site.contact.phone}`}
                  className="inline-flex items-center justify-center rounded-full border border-black/10 bg-white px-6 py-3 text-sm font-semibold text-brand-ink transition hover:border-black/20"
                >
                  Llamar
                </a>
              </div>
            </motion.div>

            {/* Card Mapa */}
            <motion.div
              variants={item}
              className="rounded-3xl border border-black/10 bg-white p-6 shadow-sm"
            >
              <p className="text-sm font-semibold text-brand-ink">
                Ubicación
              </p>

              <p className="mt-2 text-sm text-brand-ink/70">
                Encuéntranos fácilmente en Google Maps.
              </p>

              <div className="mt-4 overflow-hidden rounded-2xl border border-black/10">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d113280.01281166408!2d-99.5106003!3d27.4692469!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8661230064832dc5%3A0x6f4a7bba4864610!2sCapellcity!5e0!3m2!1ses!2smx!4v1770822211719!5m2!1ses!2smx"
                  className="h-64 w-full md:h-72"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
