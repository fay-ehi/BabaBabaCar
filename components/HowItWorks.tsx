"use client";
import { motion } from "framer-motion";
import { Search, CalendarCheck, Armchair } from "lucide-react";

const steps = [
  {
    icon: Search,
    step: "01",
    title: "Find a ride",
    desc: "Enter your origin, destination, and travel date. Browse available trips from verified drivers headed your way.",
    color: "#1D4ED8", bg: "#EFF6FF",
    detail: "Lagos, Abuja, Ibadan, Enugu, Owerri, Kaduna and more."
  },
  {
    icon: CalendarCheck,
    step: "02",
    title: "Reserve your seat",
    desc: "Choose the driver you're comfortable with. Reserve and confirm your seat in just a few taps.",
    color: "#F59E0B", bg: "#FFFBEB",
    detail: "No waiting at parks. No last-minute stress."
  },
  {
    icon: Armchair,
    step: "03",
    title: "Travel comfortably",
    desc: "Meet your driver and co-travelers at the agreed point. Enjoy a calmer, more comfortable journey between cities.",
    color: "#10B981", bg: "#F0FDF4",
    detail: "Fewer passengers. Cleaner rides. Better journeys."
  },
];

export default function HowItWorks() {
  return (
    <section id="home" className="bg-white py-24 sm:py-32">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="inline-block px-3 py-1 bg-[#EFF6FF] text-[#1D4ED8] text-xs font-semibold rounded-full mb-4">
            How it works
          </span>
          <h2 className="text-[2rem] sm:text-[2.5rem] font-extrabold text-gray-900 mb-4"
            style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}>
            Three steps to a better trip
          </h2>
          <p className="text-gray-500 text-lg">Simple, clear, and designed around how Nigerians actually travel.</p>
        </motion.div>

        <div className="grid sm:grid-cols-3 gap-6 relative">
          {/* Connecting line (desktop) */}
          <div className="hidden sm:block absolute top-[60px] left-[calc(16.67%+20px)] right-[calc(16.67%+20px)] h-px bg-gradient-to-r from-[#1D4ED8] via-[#F59E0B] to-[#10B981] opacity-20" />

          {steps.map((s, i) => (
            <motion.div
              key={s.step}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ delay: i * 0.14, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="relative bg-white rounded-2xl border border-gray-100 p-6 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group"
            >
              {/* Step number */}
              <div className="absolute -top-3 right-5 text-[0.65rem] font-extrabold text-gray-300 tracking-widest"
                style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}>
                {s.step}
              </div>

              <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5 transition-all duration-200 group-hover:scale-105 group-hover:shadow-md"
                style={{ backgroundColor: s.bg }}>
                <s.icon size={24} style={{ color: s.color }} />
              </div>

              <h3 className="text-lg font-bold text-gray-900 mb-2"
                style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}>
                {s.title}
              </h3>
              <p className="text-sm text-gray-500 leading-relaxed mb-3">{s.desc}</p>
              <p className="text-xs font-medium" style={{ color: s.color }}>{s.detail}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
