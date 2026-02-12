"use client";

import Link from "next/link";
import Image from "next/image";
import { site } from "@/config/site";
import { Instagram, Facebook } from "lucide-react";

export default function Footer() {
  const whatsappHref = `https://wa.me/${site.contact.whatsapp}?text=${encodeURIComponent(
    "Hola, quiero agendar una valoración para injerto capilar en Capellcity."
  )}`;

  return (
    <footer className="border-t border-black/5 bg-white">
      <div className="mx-auto max-w-6xl px-4 py-12">
        {/* Top grid */}
        <div className="grid gap-10 md:grid-cols-4">
          {/* Brand */}
          <div className="md:col-span-2">
            <Image
              src="/brand/logo.png"
              alt="Capellcity"
              width={220}
              height={80}
              priority
              className="h-10 w-auto md:h-11"
            />

            <p className="mt-4 max-w-md text-sm leading-relaxed text-brand-ink/70">
              Clínica especializada en injerto capilar con técnicas FUE y DHI,
              además del cuidado y conservación del cabello nativo en Nuevo Laredo.
            </p>

            <a
              href={whatsappHref}
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-flex items-center justify-center rounded-full bg-brand-primary px-5 py-2 text-sm font-semibold text-white shadow-sm transition hover:opacity-95"
            >
              Agendar por WhatsApp
            </a>
          </div>

          {/* Navegación */}
          <div>
            <h4 className="text-sm font-semibold text-brand-ink">Navegación</h4>
            <ul className="mt-4 space-y-2 text-sm text-brand-ink/70">
              <li>
                <Link className="transition hover:text-brand-primary" href="/">
                  Inicio
                </Link>
              </li>
              <li>
                <Link className="transition hover:text-brand-primary" href="/servicios">
                  Servicios
                </Link>
              </li>
              <li>
                <Link className="transition hover:text-brand-primary" href="/resultados">
                  Resultados
                </Link>
              </li>
              <li>
                <Link className="transition hover:text-brand-primary" href="/especialista">
                  Especialista
                </Link>
              </li>
              <li>
                <Link className="transition hover:text-brand-primary" href="/contacto">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>

          {/* Contacto + Redes */}
          <div>
            <h4 className="text-sm font-semibold text-brand-ink">Contacto</h4>
            <ul className="mt-4 space-y-2 text-sm text-brand-ink/70">
              <li>{site.location.fullAddress}</li>
              <li>
                <a
                  href={`tel:${site.contact.phone}`}
                  className="transition hover:text-brand-primary hover:underline"
                >
                  {site.contact.displayPhone}
                </a>
              </li>
              <li>
                <a
                  href={whatsappHref}
                  target="_blank"
                  rel="noreferrer"
                  className="transition hover:text-brand-primary hover:underline"
                >
                  WhatsApp
                </a>
              </li>
            </ul>

            {/* Redes */}
            <div className="mt-6">
              <p className="text-sm font-semibold text-brand-ink">Síguenos</p>
              <div className="mt-3 flex items-center gap-4">
                <a
                  href={site.social.instagram}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Instagram"
                  className="text-brand-ink/70 transition hover:text-brand-primary"
                >
                  <Instagram className="h-6 w-6" strokeWidth={1.8} />
                </a>

                <a
                  href={site.social.facebook}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Facebook"
                  className="text-brand-ink/70 transition hover:text-brand-primary"
                >
                  <Facebook className="h-6 w-6" strokeWidth={1.8} />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom strip */}
        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-black/5 pt-6 text-xs text-brand-ink/60 md:flex-row">
          <p>© {new Date().getFullYear()} Capellcity. Todos los derechos reservados.</p>

          <a
            href="https://agsolutions.dev"
            target="_blank"
            rel="noopener noreferrer"
            className="transition hover:text-brand-primary"
          >
            Created by AG Solutions
          </a>
        </div>
      </div>
    </footer>
  );
}
