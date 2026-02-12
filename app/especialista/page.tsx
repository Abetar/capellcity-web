import type { Metadata } from "next";
import EspecialistaClient from "./EspecialistaClient";

export const metadata: Metadata = {
  title: "Especialista",
  description:
    "Conoce al especialista y credenciales profesionales de Capellcity en Nuevo Laredo.",
  alternates: { canonical: "/especialista" },
};

export default function EspecialistaPage() {
  return (
    <main>
      <EspecialistaClient />
    </main>
  );
}
