"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { site } from "@/config/site";
import { Instagram, Facebook } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const whatsappHref = `https://wa.me/${site.contact.whatsapp}?text=${encodeURIComponent(
    "Hola, quiero agendar una valoración para injerto capilar en Capellcity."
  )}`;

  return (
    <header className="sticky top-0 z-50 w-full border-b border-black/5 bg-white/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        
        {/* LOGO */}
        <Link href="/" className="flex items-center">
          <Image
            src="/brand/logo.png"
            alt="Capellcity"
            width={220}
            height={80}
            priority
            className="h-10 w-auto md:h-12"
          />
        </Link>

        {/* DESKTOP NAV */}
        <nav className="hidden items-center gap-8 md:flex">
          <Link
            href="/servicios"
            className="text-sm font-medium text-brand-ink hover:text-brand-primary transition"
          >
            Servicios
          </Link>

          <Link
            href="/resultados"
            className="text-sm font-medium text-brand-ink hover:text-brand-primary transition"
          >
            Resultados
          </Link>

          <Link
            href="/especialista"
            className="text-sm font-medium text-brand-ink hover:text-brand-primary transition"
          >
            Especialista
          </Link>

          <Link
            href="/contacto"
            className="text-sm font-medium text-brand-ink hover:text-brand-primary transition"
          >
            Contacto
          </Link>
        </nav>

        {/* CTA DESKTOP */}
        <div className="hidden items-center gap-4 md:flex">
          
          {/* Social icons discretos */}
          <div className="flex items-center gap-3 border-r border-black/10 pr-4">
            <a
              href={site.social.instagram}
              target="_blank"
              rel="noreferrer"
              className="text-brand-ink/70 hover:text-brand-primary transition"
              aria-label="Instagram"
            >
              <Instagram className="h-5 w-5" strokeWidth={1.8} />
            </a>

            <a
              href={site.social.facebook}
              target="_blank"
              rel="noreferrer"
              className="text-brand-ink/70 hover:text-brand-primary transition"
              aria-label="Facebook"
            >
              <Facebook className="h-5 w-5" strokeWidth={1.8} />
            </a>
          </div>

          <a
            href={`tel:${site.contact.phone}`}
            className="rounded-full border border-black/10 px-5 py-2 text-sm font-semibold text-brand-ink hover:border-black/20 transition"
          >
            Llamar
          </a>

          <a
            href={whatsappHref}
            target="_blank"
            rel="noreferrer"
            className="rounded-full bg-brand-primary px-5 py-2 text-sm font-semibold text-white shadow-sm hover:opacity-95 transition"
          >
            WhatsApp
          </a>
        </div>

        {/* MOBILE BUTTON */}
        <button
          onClick={() => setOpen(!open)}
          className="flex items-center md:hidden"
          aria-label="Abrir menú"
        >
          <div className="space-y-1.5">
            <span className="block h-0.5 w-6 bg-brand-ink"></span>
            <span className="block h-0.5 w-6 bg-brand-ink"></span>
            <span className="block h-0.5 w-6 bg-brand-ink"></span>
          </div>
        </button>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="border-t border-black/5 bg-white md:hidden">
          <div className="mx-auto flex max-w-6xl flex-col gap-5 px-4 py-6">

            <Link href="/servicios" onClick={() => setOpen(false)}>
              Servicios
            </Link>

            <Link href="/resultados" onClick={() => setOpen(false)}>
              Resultados
            </Link>

            <Link href="/especialista" onClick={() => setOpen(false)}>
              Especialista
            </Link>

            <Link href="/contacto" onClick={() => setOpen(false)}>
              Contacto
            </Link>

            {/* Social mobile */}
            <div className="flex items-center gap-4 pt-2">
              <a
                href={site.social.instagram}
                target="_blank"
                rel="noreferrer"
                className="text-brand-ink/70"
              >
                <Instagram className="h-6 w-6" />
              </a>

              <a
                href={site.social.facebook}
                target="_blank"
                rel="noreferrer"
                className="text-brand-ink/70"
              >
                <Facebook className="h-6 w-6" />
              </a>
            </div>

            <a
              href={`tel:${site.contact.phone}`}
              className="rounded-full border border-black/10 px-4 py-2 text-center text-sm font-semibold text-brand-ink"
            >
              Llamar
            </a>

            <a
              href={whatsappHref}
              target="_blank"
              rel="noreferrer"
              className="rounded-full bg-brand-primary px-4 py-2 text-center text-sm font-semibold text-white"
            >
              WhatsApp
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
