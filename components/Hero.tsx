"use client";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

/**
 * HERO VIDEO
 * Drop your file at:  public/videos/hero.mp4
 * (H.264 MP4, no audio needed, 6–15 s loop, ideally under ~6 MB.)
 * If the file is missing, the animated dark background below shows instead.
 */
const VIDEO_SRC = "/videos/hero.mp4";

const platforms = ["Uber", "Bolt", "FreeNow", "Lyft"];

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoOk, setVideoOk] = useState(true);

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    const fail = () => setVideoOk(false);
    if (v.error) fail();
    v.addEventListener("error", fail);
    v.muted = true;
    v.play().catch(() => {});
    return () => v.removeEventListener("error", fail);
  }, []);

  return (
    <section className="relative min-h-[100svh] flex flex-col overflow-hidden bg-[#0B1220] text-white">
      {/* Fallback / base background (always rendered, sits under the video) */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0B1220] via-[#0F1B3D] to-[#0B1220]" />
      <div className="hero-glow absolute -top-32 -left-24 w-[640px] h-[640px] rounded-full bg-[#1D4ED8]/35 blur-3xl" />
      <div className="hero-glow-2 absolute bottom-0 right-0 w-[520px] h-[520px] rounded-full bg-[#F59E0B]/15 blur-3xl" />

      {/* Video */}
      {videoOk && (
        <video
          ref={videoRef}
          src={VIDEO_SRC}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          aria-hidden
          className="absolute inset-0 w-full h-full object-cover motion-reduce:hidden"
        />
      )}

      {/* Legibility overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0B1220]/85 via-[#0B1220]/55 to-[#0B1220]/20" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#0B1220] to-transparent" />

      {/* Content */}
      <div className="relative flex-1 flex items-center max-w-6xl w-full mx-auto px-4 sm:px-6 pt-40 pb-16">
        <div className="max-w-3xl">
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="text-[2.6rem] sm:text-6xl lg:text-7xl font-semibold leading-[1.04] tracking-tight"
          >
            Get the car.
            <br />
            Link your apps.
            <br />
            Start driving.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.12, ease: "easeOut" }}
            className="mt-6 text-lg sm:text-xl text-white/75 leading-relaxed max-w-xl"
          >
            SYNQ RIDE gives approved drivers a used car that Bablo owns and maintains, ready to work with Uber, Bolt and
            other ride-hailing apps. Launching in Poland and the USA.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.24, ease: "easeOut" }}
            className="mt-9 flex flex-col sm:flex-row gap-3"
          >
            <a
              href="#apply"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-white text-gray-900 font-semibold rounded-xl hover:bg-white/90 transition-colors group"
            >
              Apply to drive
              <ArrowRight size={16} className="group-hover:translate-x-0.5 transition-transform" />
            </a>
            <a
              href="#partners"
              className="inline-flex items-center justify-center px-7 py-3.5 font-semibold rounded-xl border border-white/40 text-white hover:bg-white/10 transition-colors"
            >
              Supply vehicles
            </a>
          </motion.div>
        </div>
      </div>

      {/* Platforms */}
      <div className="relative border-t border-white/10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-5 flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-8">
          <p className="text-sm text-white/55">Your car links to the apps you already drive for</p>
          <ul className="flex flex-wrap gap-x-8 gap-y-1">
            {platforms.map((p) => (
              <li key={p} className="text-base font-semibold text-white/80">
                {p}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
