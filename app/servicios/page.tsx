import type { Metadata } from "next";
import Link from "next/link";
import ServiciosClient from "./ServiciosClient";

export const metadata: Metadata = {
  title: "Servicios de Injerto Capilar",
  description:
    "Conoce los servicios de Capellcity: injerto capilar FUE y DHI, injerto de barba y cejas, PRP y tratamientos para conservar el cabello nativo en Nuevo Laredo.",
  alternates: { canonical: "/servicios" },
};

export default function ServiciosPage() {
  return (
    <main>
      <ServiciosClient />
    </main>
  );
}
