import type { Metadata } from "next";
import ContactoClient from "./ContactoClient";

export const metadata: Metadata = {
  title: "Contacto",
  description:
    "Contacto directo con Capellcity en Nuevo Laredo. Agenda por WhatsApp o llama para valoración.",
  alternates: { canonical: "/contacto" },
};

export default function ContactoPage() {
  return (
    <main>
      <ContactoClient />
    </main>
  );
}
