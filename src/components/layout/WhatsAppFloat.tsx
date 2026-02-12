"use client";

import { motion } from "framer-motion";
import { site } from "@/config/site";
import { MessageCircle } from "lucide-react";

export default function WhatsAppFloat() {
  const whatsappHref = `https://wa.me/${site.contact.whatsapp}?text=${encodeURIComponent(
    "Hola, quiero agendar una valoración para injerto capilar en Capellcity."
  )}`;

  return (
    <motion.a
      href={whatsappHref}
      target="_blank"
      rel="noreferrer"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.95 }}
      aria-label="Agendar por WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-xl shadow-black/20 transition hover:shadow-2xl"
    >
      <MessageCircle className="h-7 w-7" strokeWidth={2.2} />
    </motion.a>
  );
}
