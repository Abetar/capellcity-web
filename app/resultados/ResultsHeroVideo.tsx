"use client";

import { useEffect, useMemo, useRef, useState } from "react";

type Props = {
  src: string; // ejemplo: "/videos/resultados-hero.mp4"
  poster?: string; // opcional: "/images/resultados-poster.jpg"
};

export default function ResultsHeroVideo({ src, poster }: Props) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const [muted, setMuted] = useState(true);
  const [isFullscreen, setIsFullscreen] = useState(false);

  // Detecta cambios de fullscreen para actualizar UI
  useEffect(() => {
    const onFsChange = () => {
      const fsEl = document.fullscreenElement;
      setIsFullscreen(Boolean(fsEl));
    };

    document.addEventListener("fullscreenchange", onFsChange);
    return () => document.removeEventListener("fullscreenchange", onFsChange);
  }, []);

  // Asegura que el estado "muted" controle el video real
  useEffect(() => {
    if (!videoRef.current) return;
    videoRef.current.muted = muted;
    // Si se desmutea por usuario, intentamos reproducir (por políticas de autoplay)
    if (!muted) {
      videoRef.current.play().catch(() => {});
    }
  }, [muted]);

  const toggleMute = () => setMuted((m) => !m);

  const enterFullscreen = async () => {
    const container = containerRef.current;
    const video = videoRef.current;
    if (!container || !video) return;

    // Guardamos tiempo actual (por si algún browser resetea, raro pero posible)
    const t = video.currentTime;

    try {
      if (container.requestFullscreen) {
        await container.requestFullscreen();
      } else if ((video as any).requestFullscreen) {
        await (video as any).requestFullscreen();
      } else if ((video as any).webkitEnterFullscreen) {
        // iOS Safari fallback (fullscreen del video)
        (video as any).webkitEnterFullscreen();
      }
    } catch {
      // ignore
    }

    // Reaplica tiempo (solo por seguridad)
    requestAnimationFrame(() => {
      if (!videoRef.current) return;
      videoRef.current.currentTime = t;
      videoRef.current.play().catch(() => {});
    });
  };

  const exitFullscreen = async () => {
    const video = videoRef.current;
    if (!video) return;

    const t = video.currentTime;

    try {
      if (document.fullscreenElement) {
        await document.exitFullscreen();
      }
    } catch {
      // ignore
    }

    requestAnimationFrame(() => {
      if (!videoRef.current) return;
      videoRef.current.currentTime = t;
      videoRef.current.play().catch(() => {});
    });
  };

  const toggleFullscreen = () => {
    if (document.fullscreenElement) exitFullscreen();
    else enterFullscreen();
  };

  const controls = useMemo(() => {
    return (
      <div className="pointer-events-auto absolute bottom-4 right-4 flex items-center gap-2">
        <button
          type="button"
          onClick={toggleMute}
          className="rounded-full bg-white/90 px-4 py-2 text-xs font-semibold text-brand-ink shadow-sm backdrop-blur hover:bg-white"
          aria-label={muted ? "Activar audio" : "Silenciar"}
        >
          {muted ? "Activar audio" : "Silenciar"}
        </button>

        <button
          type="button"
          onClick={toggleFullscreen}
          className="rounded-full bg-brand-primary px-4 py-2 text-xs font-semibold text-white shadow-sm hover:opacity-95"
          aria-label={isFullscreen ? "Salir de pantalla completa" : "Pantalla completa"}
        >
          {isFullscreen ? "Salir" : "Pantalla completa"}
        </button>
      </div>
    );
  }, [muted, isFullscreen]);

  return (
    <div
      ref={containerRef}
      className="relative overflow-hidden rounded-3xl border border-black/10 bg-black shadow-soft"
    >
      {/* Video */}
      <video
        ref={videoRef}
        className="h-full w-full object-cover"
        src={src}
        poster={poster}
        muted
        loop
        playsInline
        preload="metadata"
        autoPlay
        controls={false}
      />

      {/* Overlay gradient (look premium) */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/45 via-black/10 to-transparent" />

      {/* Top-left label */}
      <div className="pointer-events-none absolute left-4 top-4">
        <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-semibold text-white/90 backdrop-blur">
          <span className="h-2 w-2 rounded-full bg-brand-gold" />
          Resultados reales (video)
        </div>
      </div>

      {/* Controls */}
      {controls}
    </div>
  );
}
