"use client";

import Link from "next/link";
import { motion, useReducedMotion, type Variants } from "framer-motion";
import {
  Scissors,
  Sparkles,
  User,
  Eye,
  ShieldPlus,
  Leaf,
  ArrowRight,
} from "lucide-react";
import { site } from "@/config/site";

function Container({ children }: { children: React.ReactNode }) {
  return <div className="mx-auto w-full max-w-6xl px-4">{children}</div>;
}

function formatWhatsappLink(message: string) {
  const text = encodeURIComponent(message);
  return `https://wa.me/${site.contact.whatsapp}?text=${text}`;
}

const SERVICES = [
  {
    title: "Injerto Capilar FUE",
    desc: "Extracción folicular para resultados naturales y recuperación controlada.",
    icon: Scissors,
  },
  {
    title: "Injerto Capilar DHI",
    desc: "Implantación precisa con control de ángulo y densidad.",
    icon: Sparkles,
  },
  {
    title: "Injerto de Barba",
    desc: "Diseño y densidad acorde a tu rostro para una barba uniforme.",
    icon: User,
  },
  {
    title: "Injerto de Cejas",
    desc: "Reconstrucción y definición con apariencia natural.",
    icon: Eye,
  },
  {
    title: "PRP Capilar",
    desc: "Terapia complementaria para fortalecer y estimular el crecimiento.",
    icon: ShieldPlus,
  },
  {
    title: "Cabello Nativo",
    desc: "Diagnóstico y plan de conservación para frenar la caída y mejorar densidad.",
    icon: Leaf,
  },
];

export default function Services() {
  const reduce = useReducedMotion();

  const whatsappHref = formatWhatsappLink(
    "Hola, quiero información sobre los servicios de Capellcity y agendar una valoración."
  );

  const parent: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        // Si reduce=true, simplemente hacemos la animación instantánea
        duration: reduce ? 0 : 0.2,
        staggerChildren: reduce ? 0 : 0.08,
        delayChildren: reduce ? 0 : 0.05,
      },
    },
  };

  const card: Variants = {
    hidden: { opacity: 0, y: 10 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: reduce ? 0 : 0.45,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="bg-white">
      <Container>
        <div className="py-14 md:py-20">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-xs font-semibold tracking-wide text-brand-primary/80">
                SERVICIOS
              </p>
              <h2 className="mt-2 text-3xl font-semibold tracking-tight text-brand-ink sm:text-4xl">
                Soluciones para recuperar y conservar tu cabello
              </h2>
              <p className="mt-3 max-w-2xl text-base leading-relaxed text-brand-ink/70">
                Técnicas avanzadas y tratamientos complementarios para lograr un
                resultado natural y un plan de cuidado a largo plazo.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <Link
                href="/servicios"
                className="inline-flex items-center justify-center rounded-full border border-black/10 bg-white px-6 py-3 text-sm font-semibold text-brand-ink hover:border-black/20"
              >
                Ver todos
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>

              <a
                href={whatsappHref}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-full bg-brand-primary px-6 py-3 text-sm font-semibold text-white shadow-sm hover:opacity-95"
              >
                Pedir info por WhatsApp
              </a>
            </div>
          </div>

          <motion.div
            variants={parent}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
          >
            {SERVICES.map((s) => {
              const Icon = s.icon;
              return (
                <motion.div
                  key={s.title}
                  variants={card}
                  className="group rounded-3xl border border-black/10 bg-brand-mist p-6 shadow-[0_10px_30px_rgba(0,0,0,0.05)] transition hover:-translate-y-0.5 hover:border-black/15"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white shadow-sm">
                      <Icon className="h-5 w-5 text-brand-primary" />
                    </div>
                    <div className="h-2 w-2 rounded-full bg-brand-gold opacity-70" />
                  </div>

                  <h3 className="mt-5 text-lg font-semibold text-brand-ink">
                    {s.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-brand-ink/70">
                    {s.desc}
                  </p>

                  <a href="/servicios" className="mt-5 inline-flex items-center text-sm font-semibold text-brand-primary">
                    <div className="mt-5 inline-flex items-center text-sm font-semibold text-brand-primary">
                    Conocer más
                    <ArrowRight className="ml-2 h-4 w-4 transition group-hover:translate-x-0.5" />
                  </div>
                  </a>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
