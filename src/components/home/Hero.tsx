"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import { site } from "@/config/site";

function Container({ children }: { children: React.ReactNode }) {
  return <div className="mx-auto w-full max-w-6xl px-4">{children}</div>;
}

function formatWhatsappLink(message: string) {
  const text = encodeURIComponent(message);
  return `https://wa.me/${site.contact.whatsapp}?text=${text}`;
}

export default function Hero() {
  const reduce = useReducedMotion();

  // Placeholder IA (ponlo en public/images/hero.png)
  const bgImage = "/images/hero.png";

  const whatsappHref = formatWhatsappLink(
    "Hola, me gustaría agendar una valoración para injerto capilar (FUE/DHI) en Capellcity."
  );

  const parent: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        duration: reduce ? 0 : 0.2,
        staggerChildren: reduce ? 0 : 0.09,
        delayChildren: reduce ? 0 : 0.08,
      },
    },
  };

  const item: Variants = {
    hidden: { opacity: 0, y: 12 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: reduce ? 0 : 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="relative overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 -z-20">
        <div
          className="h-full w-full bg-cover bg-center"
          style={{ backgroundImage: `url(${bgImage})` }}
        />
      </div>

      {/* Overlay (Capellcity identity) */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-r from-brand-primary/90 via-brand-primary/70 to-brand-primary/25" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0.0),rgba(0,0,0,0.35))]" />
        <div className="absolute -top-24 right-[-140px] h-[420px] w-[420px] rounded-full bg-brand-gold/20 blur-3xl" />
      </div>

      <Container>
        <div className="grid min-h-[72vh] items-center py-14 md:min-h-[82vh] md:py-20">
          <motion.div
            variants={parent}
            initial="hidden"
            animate="show"
            className="max-w-2xl"
          >
            <motion.p
              variants={item}
              className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-semibold text-white/90 backdrop-blur"
            >
              <span className="inline-block h-2 w-2 rounded-full bg-brand-gold" />
              Nuevo Laredo · Técnicas FUE y DHI
            </motion.p>

            <motion.h1
              variants={item}
              className="mt-5 text-4xl font-semibold tracking-tight text-white sm:text-5xl"
            >
              Renueva tu imagen.
              <br />
              <span className="text-white/90">Renueva tu vida.</span>
            </motion.h1>

            <motion.p
              variants={item}
              className="mt-4 max-w-prose text-base leading-relaxed text-white/85"
            >
              Clínica especializada en injerto capilar con enfoque en{" "}
              <strong>resultados naturales</strong> y en el cuidado del{" "}
              <strong>cabello nativo</strong>.
            </motion.p>

            <motion.div
              variants={item}
              className="mt-8 rounded-3xl border border-white/15 bg-white/10 p-5 backdrop-blur md:p-6"
            >
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="text-sm font-semibold text-white">
                    Agenda tu valoración personalizada
                  </p>
                  <p className="mt-1 text-sm text-white/80">
                    Resolvemos dudas, evaluamos tu caso y definimos el mejor plan.
                  </p>
                </div>

                <div className="flex flex-col gap-3 sm:flex-row">
                  <a
                    href={whatsappHref}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center rounded-full bg-brand-gold px-6 py-3 text-sm font-semibold text-brand-ink shadow-sm hover:opacity-95"
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

              <ul className="mt-5 grid gap-3 text-sm text-white/85 sm:grid-cols-3">
                <li className="rounded-2xl border border-white/10 bg-black/10 px-4 py-3">
                  Técnicas FUE y DHI
                </li>
                <li className="rounded-2xl border border-white/10 bg-black/10 px-4 py-3">
                  Plan personalizado
                </li>
                <li className="rounded-2xl border border-white/10 bg-black/10 px-4 py-3">
                  Seguimiento post
                </li>
              </ul>
            </motion.div>

            <motion.div variants={item} className="mt-6 flex items-center gap-3">
              <span className="h-[2px] w-10 rounded-full bg-brand-gold" />
              <p className="text-xs font-medium text-white/75">
                Capellcity · Injerto capilar en Nuevo Laredo
              </p>
            </motion.div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
