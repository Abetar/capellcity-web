import Hero from "@/components/home/Hero";
import Services from "@/components/home/Services";
import Process from "@/components/home/Process";
import ResultsPreview from "@/components/home/ResultsPreview";
import SpecialistPreview from "@/components/home/SpecialistPreview";
import ContactPreview from "@/components/home/ContactPreview";
import FinalCta from "@/components/home/FinalCta";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Services />
      <Process />
      <ResultsPreview />
      <SpecialistPreview />
      <ContactPreview />
      <FinalCta />
    </>
  );
}
