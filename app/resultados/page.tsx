import type { Metadata } from "next";
import ResultadosClient from "./ResultadosClient";

export const metadata: Metadata = {
  title: "Resultados",
  description:
    "Galería de resultados de injerto capilar y procedimientos capilares en Capellcity.",
  alternates: { canonical: "/resultados" },
};

export default function ResultadosPage() {
  return (
    <main>
      <ResultadosClient />
    </main>
  );
}
