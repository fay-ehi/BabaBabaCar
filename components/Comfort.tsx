"use client";
import { motion } from "framer-motion";
import { Wind, Volume2, UserCheck, Leaf } from "lucide-react";

const comforts = [
  { icon: UserCheck, title: "Max 4 passengers", desc: "No squeezing. No overflow. Every seat is a proper seat.", color: "#1D4ED8", bg: "#EFF6FF" },
  { icon: Wind, title: "Clean vehicles", desc: "Rides that are tidy, ventilated, and actually pleasant to be in.", color: "#10B981", bg: "#F0FDF4" },
  { icon: Volume2, title: "Calmer journeys", desc: "No blaring music you didn't ask for. Just a peaceful ride.", color: "#F59E0B", bg: "#FFFBEB" },
  { icon: Leaf, title: "No unexpected stops", desc: "Drivers head directly to the destination. Your time matters.", color: "#8B5CF6", bg: "#F5F3FF" },
];

export default function Comfort() {
  return (
    <section className="bg-[#111827] py-24 sm:py-32 relative overflow-hidden">
      {/* BG decoration */}
      <div className="absolute top-0 left-1/3 w-[500px] h-[500px] rounded-full bg-[#1D4ED8]/10 blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] rounded-full bg-[#F59E0B]/8 blur-3xl" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Copy */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-block px-3 py-1 bg-white/10 text-white/60 text-xs font-semibold rounded-full mb-6">
              The Baba Baba Car difference
            </span>
            <h2 className="text-[2rem] sm:text-[2.75rem] font-extrabold text-white mb-6 leading-tight"
              style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}>
              Intercity travel that actually feels good
            </h2>
            <p className="text-white/55 text-lg leading-relaxed mb-10">
              We believe long-distance travel shouldn&apos;t leave you drained. Small choices — fewer passengers, verified drivers, clear routes — add up to a completely different experience.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4">
              {[
                { val: "≤4", label: "Passengers per trip" },
                { val: "100%", label: "Verified drivers" },
                { val: "0", label: "Unexpected stops" },
              ].map((stat) => (
                <div key={stat.label} className="bg-white/6 rounded-xl p-4 border border-white/8">
                  <p className="text-2xl font-extrabold text-white mb-1"
                    style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}>{stat.val}</p>
                  <p className="text-xs text-white/40 leading-snug">{stat.label}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right: Feature cards */}
          <div className="grid grid-cols-2 gap-4">
            {comforts.map((c, i) => (
              <motion.div
                key={c.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ delay: i * 0.1, duration: 0.55 }}
                className="bg-white/6 border border-white/8 rounded-2xl p-5 hover:bg-white/10 transition-all duration-200 group"
              >
                <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-4 transition-transform group-hover:scale-105"
                  style={{ backgroundColor: c.bg }}>
                  <c.icon size={18} style={{ color: c.color }} />
                </div>
                <h3 className="text-sm font-bold text-white mb-1.5">{c.title}</h3>
                <p className="text-xs text-white/40 leading-relaxed">{c.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
