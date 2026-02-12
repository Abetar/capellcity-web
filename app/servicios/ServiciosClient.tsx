"use client";

import Link from "next/link";
import { motion, useReducedMotion, type Variants } from "framer-motion";
import { site } from "@/config/site";
import Proceso from "./Proceso";
import {
  Scissors,
  Sparkles,
  User,
  Feather,
  Droplet,
  ShieldCheck,
} from "lucide-react";

function Container({ children }: { children: React.ReactNode }) {
  return <div className="mx-auto w-full max-w-6xl px-4">{children}</div>;
}

type Service = {
  title: string;
  desc: string;
  bullets: string[];
};

const SERVICES = [
  {
    title: "Injerto Capilar FUE",
    icon: Scissors,
    desc: "Técnica de extracción folicular individual para una apariencia natural y recuperación controlada.",
    bullets: [
      "Diseño personalizado de línea frontal",
      "Resultados naturales y densidad progresiva",
      "Seguimiento post-procedimiento",
    ],
  },
  {
    title: "Injerto Capilar DHI",
    icon: Sparkles,
    desc: "Implantación directa con control de ángulo, dirección y densidad.",
    bullets: [
      "Control fino en implantación",
      "Ideal para zonas específicas",
      "Enfoque en naturalidad y detalle",
    ],
  },
  {
    title: "Injerto de Barba",
    icon: User,
    desc: "Densificación y diseño acorde a tu rostro para una barba uniforme.",
    bullets: [
      "Diseño facial",
      "Corrección de zonas despobladas",
      "Resultado natural",
    ],
  },
  {
    title: "Injerto de Cejas",
    icon: Feather,
    desc: "Reconstrucción y definición de cejas con apariencia natural.",
    bullets: [
      "Diseño simétrico",
      "Corrección de baja densidad",
      "Cuidado y seguimiento",
    ],
  },
  {
    title: "PRP Capilar",
    icon: Droplet,
    desc: "Terapia complementaria para fortalecer y apoyar planes capilares.",
    bullets: [
      "Apoyo al folículo",
      "Complemento del plan",
      "Sesiones según valoración",
    ],
  },
  {
    title: "Conservación de Cabello Nativo",
    icon: ShieldCheck,
    desc: "Evaluación y plan para frenar caída, mejorar densidad y mantener resultados.",
    bullets: [
      "Diagnóstico inicial",
      "Plan personalizado",
      "Seguimiento clínico",
    ],
  },
];

export default function ServiciosClient() {
  const reduce = useReducedMotion();

  const parent: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        duration: reduce ? 0 : 0.2,
        staggerChildren: reduce ? 0 : 0.08,
        delayChildren: reduce ? 0 : 0.06,
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

  const ctaHref = `https://wa.me/${site.contact.whatsapp}?text=${encodeURIComponent(
    "Hola, quiero agendar una valoración y conocer qué servicio es mejor para mi caso.",
  )}`;

  return (
    <>
      {/* HERO */}
      <section className="bg-white">
        <Container>
          <motion.div
            variants={parent}
            initial="hidden"
            animate="show"
            className="py-12 md:py-16"
          >
            <motion.p
              variants={item}
              className="text-xs font-semibold tracking-wide text-brand-primary/80"
            >
              SERVICIOS
            </motion.p>

            <motion.h1
              variants={item}
              className="mt-2 text-3xl font-semibold tracking-tight text-brand-ink sm:text-4xl"
            >
              Servicios capilares en Nuevo Laredo
            </motion.h1>

            <motion.p
              variants={item}
              className="mt-3 max-w-2xl text-base leading-relaxed text-brand-ink/70"
            >
              Injerto capilar con técnicas <strong>FUE</strong> y{" "}
              <strong>DHI</strong>, además de procedimientos complementarios
              para fortalecer y conservar el cabello nativo.
            </motion.p>

            <motion.div
              variants={item}
              className="mt-7 flex flex-col gap-3 sm:flex-row"
            >
              <Link
                href="/contacto"
                className="inline-flex items-center justify-center rounded-full bg-brand-primary px-6 py-3 text-sm font-semibold text-white shadow-sm hover:opacity-95"
              >
                Agendar valoración
              </Link>

              <a
                href={`tel:${site.contact.phone}`}
                className="inline-flex items-center justify-center rounded-full border border-black/10 bg-white px-6 py-3 text-sm font-semibold text-brand-ink hover:border-black/20"
              >
                Llamar ahora
              </a>
            </motion.div>
          </motion.div>
        </Container>
      </section>

      {/* GRID */}
      <section className="bg-brand-mist">
        <Container>
          <div className="py-12 md:py-16">
            <motion.div
              variants={parent}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
            >
              {SERVICES.map((s) => {
                const Icon = s.icon;

                return (
                  <motion.div
                    key={s.title}
                    variants={item}
                    className="rounded-3xl border border-black/10 bg-white p-6 shadow-soft transition hover:-translate-y-1 hover:shadow-lg"
                  >
                    {/* Icon + Title */}
                    <div className="flex items-center gap-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-primary/10">
                        <Icon
                          className="h-6 w-6 text-brand-primary"
                          strokeWidth={1.8}
                        />
                      </div>

                      <h2 className="text-lg font-semibold text-brand-ink">
                        {s.title}
                      </h2>
                    </div>

                    <p className="mt-4 text-sm leading-relaxed text-brand-ink/70">
                      {s.desc}
                    </p>

                    <ul className="mt-4 space-y-2 text-sm text-brand-ink/70">
                      {s.bullets.map((b) => (
                        <li key={b} className="flex gap-2">
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-gold" />
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                );
              })}
            </motion.div>

            {/* CTA */}
            <motion.div
              variants={parent}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.25 }}
              className="mt-10"
            >
              <motion.div
                variants={item}
                className="rounded-3xl border border-black/10 bg-white p-6 md:p-8"
              >
                <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
                  <div>
                    <p className="text-sm font-semibold text-brand-ink">
                      ¿No sabes qué tratamiento es ideal para ti?
                    </p>
                    <p className="mt-1 text-sm text-brand-ink/70">
                      Agenda una valoración y definimos el mejor plan para tu
                      caso.
                    </p>
                  </div>

                  <div className="flex flex-col gap-3 sm:flex-row">
                    <a
                      href={ctaHref}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center justify-center rounded-full bg-brand-gold px-6 py-3 text-sm font-semibold text-brand-ink shadow-sm hover:opacity-95"
                    >
                      WhatsApp
                    </a>
                    <Link
                      href="/contacto"
                      className="inline-flex items-center justify-center rounded-full border border-black/10 bg-white px-6 py-3 text-sm font-semibold text-brand-ink hover:border-black/20"
                    >
                      Ver contacto
                    </Link>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* PROCESO */}
      <Proceso />

      {/* FAQ */}
      <section className="bg-white">
        <Container>
          <div className="py-12 md:py-16">
            <h2 className="text-2xl font-semibold tracking-tight text-brand-ink">
              Preguntas frecuentes
            </h2>

            <motion.div
              variants={parent}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              className="mt-6 grid gap-4 md:grid-cols-2"
            >
              {[
                {
                  q: "¿Cuál es la diferencia entre FUE y DHI?",
                  a: "La técnica ideal depende de tu zona a tratar y tus objetivos. En valoración te orientamos con base en tu caso.",
                },
                {
                  q: "¿Los resultados son inmediatos?",
                  a: "El resultado es progresivo. Te explicamos expectativas y etapas de evolución durante el seguimiento.",
                },
                {
                  q: "¿Qué pasa si aún tengo cabello nativo?",
                  a: "Se planifica respetando y cuidando el cabello existente y, si aplica, con un plan de conservación.",
                },
                {
                  q: "¿Necesito valoración antes de agendar?",
                  a: "Sí, para confirmar candidaturía y definir un plan claro y realista.",
                },
              ].map((f) => (
                <motion.div
                  key={f.q}
                  variants={item}
                  className="rounded-3xl border border-black/10 bg-brand-mist p-6"
                >
                  <p className="text-sm font-semibold text-brand-ink">{f.q}</p>
                  <p className="mt-2 text-sm leading-relaxed text-brand-ink/70">
                    {f.a}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </Container>
      </section>
    </>
  );
}
