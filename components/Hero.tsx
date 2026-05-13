"use client";
import { motion } from "framer-motion";
import { ArrowRight, MapPin, Star, Users, Shield } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.12, duration: 0.6, ease: "easeOut" as const }
  }),
};

function FloatingCard({ className, children }: { className?: string; children: React.ReactNode }) {
  return (
    <div className={`glass rounded-2xl shadow-lg px-4 py-3 ${className}`}
      style={{ background: "rgba(255,255,255,0.88)", backdropFilter: "blur(16px)", border: "1px solid rgba(255,255,255,0.7)" }}>
      {children}
    </div>
  );
}

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-16">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#EFF6FF] via-white to-[#FFFBEB]" />
      <div className="absolute top-20 right-0 w-[600px] h-[600px] rounded-full bg-[#1D4ED8]/5 blur-3xl" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-[#F59E0B]/8 blur-3xl" />

      {/* Grid pattern */}
      <div className="absolute inset-0 opacity-[0.025]"
        style={{ backgroundImage: "radial-gradient(#1D4ED8 1px, transparent 1px)", backgroundSize: "32px 32px" }} />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 py-20 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Left: Copy */}
          <div className="max-w-xl">
            <motion.div custom={0} variants={fadeUp} initial="hidden" animate="visible">
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-[#1D4ED8]/8 text-[#1D4ED8] text-xs font-semibold rounded-full mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-[#1D4ED8] pulse-dot inline-block" />
                Now accepting waitlist signups
              </span>
            </motion.div>

            <motion.h1
              custom={1} variants={fadeUp} initial="hidden" animate="visible"
              className="text-[2.75rem] sm:text-[3.5rem] lg:text-[4rem] font-extrabold text-gray-900 leading-[1.05] mb-6"
              style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}
            >
              Travel between
              <br />
              <span className="text-[#1D4ED8]">cities</span>, better.
            </motion.h1>

            <motion.p
              custom={2} variants={fadeUp} initial="hidden" animate="visible"
              className="text-lg text-gray-500 leading-relaxed mb-8 max-w-[440px]"
            >
              Verified shared rides between Nigerian cities. Find a comfortable seat on a trusted driver&apos;s trip — or share yours with verified co-travelers.
            </motion.p>

            <motion.div
              custom={3} variants={fadeUp} initial="hidden" animate="visible"
              className="flex flex-col sm:flex-row gap-3"
            >
              <a
                href="#waitlist"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#1D4ED8] text-white font-semibold rounded-xl hover:bg-[#1e40af] transition-all duration-200 shadow-md hover:shadow-[0_8px_25px_-5px_rgba(29,78,216,0.4)] group"
              >
                Join the Waitlist
                <ArrowRight size={16} className="group-hover:translate-x-0.5 transition-transform" />
              </a>
              <a
                href="#drivers"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-white text-gray-800 font-semibold rounded-xl border border-gray-200 hover:border-gray-300 hover:bg-gray-50 transition-all duration-200 shadow-sm"
              >
                Become a Driver
              </a>
            </motion.div>

            {/* Social proof */}
            <motion.div
              custom={4} variants={fadeUp} initial="hidden" animate="visible"
              className="mt-10 flex items-center gap-5"
            >
              <div className="flex -space-x-2.5">
                {["#1D4ED8","#F59E0B","#10B981","#8B5CF6","#EF4444"].map((c, i) => (
                  <div key={i} className="w-8 h-8 rounded-full border-2 border-white flex items-center justify-center text-white text-xs font-bold shadow-sm"
                    style={{ backgroundColor: c }}>
                    {["A","B","C","D","E"][i]}
                  </div>
                ))}
              </div>
              <div>
                <div className="flex items-center gap-1">
                  {[1,2,3,4,5].map(s => <Star key={s} size={12} className="fill-[#F59E0B] text-[#F59E0B]" />)}
                </div>
                <p className="text-xs text-gray-500 mt-0.5">Trusted by early travelers across Nigeria</p>
              </div>
            </motion.div>
          </div>

          {/* Right: Visual mockup */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="relative flex justify-center lg:justify-end"
          >
            {/* Main app card */}
            <div className="relative w-[320px] sm:w-[360px]">
              <div className="bg-white rounded-3xl shadow-[0_20px_60px_-10px_rgba(0,0,0,0.12)] border border-gray-100 p-5">
                {/* App header */}
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <p className="text-xs text-gray-400 font-medium">Your next trip</p>
                    <p className="text-sm font-bold text-gray-900" style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}>Lagos → Ibadan</p>
                  </div>
                  <div className="px-2.5 py-1 bg-[#F0FDF4] text-[#15803D] text-xs font-semibold rounded-lg">Seats available</div>
                </div>

                {/* Route visualization */}
                <div className="relative bg-[#EFF6FF] rounded-2xl p-4 mb-4 overflow-hidden">
                  <svg viewBox="0 0 280 80" className="w-full h-16">
                    {/* Route line */}
                    <path d="M 20 60 C 80 60, 90 20, 140 20 C 190 20, 200 60, 260 60"
                      stroke="#1D4ED8" strokeWidth="2.5" fill="none"
                      strokeDasharray="6 4" className="route-line" />
                    {/* Origin dot */}
                    <circle cx="20" cy="60" r="5" fill="#1D4ED8" />
                    <circle cx="20" cy="60" r="9" fill="#1D4ED8" opacity="0.15" />
                    {/* Dest dot */}
                    <circle cx="260" cy="60" r="5" fill="#F59E0B" />
                    <circle cx="260" cy="60" r="9" fill="#F59E0B" opacity="0.15" />
                    {/* Car icon area */}
                    <circle cx="140" cy="20" r="12" fill="white" />
                    <text x="140" y="25" textAnchor="middle" fontSize="12">🚗</text>
                  </svg>
                  <div className="flex justify-between text-xs mt-1">
                    <span className="font-semibold text-[#1D4ED8]">Lagos</span>
                    <span className="text-gray-400">~2h 30m</span>
                    <span className="font-semibold text-[#D97706]">Ibadan</span>
                  </div>
                </div>

                {/* Driver info */}
                <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl mb-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#1D4ED8] to-[#7C3AED] flex items-center justify-center text-white font-bold text-sm">AK</div>
                  <div className="flex-1">
                    <p className="text-sm font-semibold text-gray-900">Adewale K.</p>
                    <div className="flex items-center gap-1">
                      <Star size={11} className="fill-[#F59E0B] text-[#F59E0B]" />
                      <span className="text-xs text-gray-500">4.9 · 127 trips</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-1">
                    <Shield size={13} className="text-[#15803D]" />
                    <span className="text-xs text-[#15803D] font-medium">Verified</span>
                  </div>
                </div>

                {/* Seats & price */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Users size={14} className="text-gray-400" />
                    <span className="text-xs text-gray-500">3 seats left</span>
                  </div>
                  <div className="text-right">
                    <span className="text-xs text-gray-400">per seat</span>
                    <p className="text-lg font-bold text-gray-900" style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}>₦3,500</p>
                  </div>
                </div>

                <button className="mt-3 w-full py-3 bg-[#1D4ED8] text-white text-sm font-semibold rounded-xl hover:bg-[#1e40af] transition-colors">
                  Reserve Seat
                </button>
              </div>

              {/* Floating badge 1 */}
              <div className="float-card absolute -left-12 top-12 bg-white rounded-2xl shadow-lg border border-gray-100 px-3 py-2.5">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-lg bg-[#F0FDF4] flex items-center justify-center">
                    <Shield size={14} className="text-[#15803D]" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-gray-900">Verified</p>
                    <p className="text-[10px] text-gray-400">ID + Plate</p>
                  </div>
                </div>
              </div>

              {/* Floating badge 2 */}
              <div className="float-card-delayed absolute -right-10 bottom-16 bg-white rounded-2xl shadow-lg border border-gray-100 px-3 py-2.5">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-lg bg-[#FFFBEB] flex items-center justify-center">
                    <Star size={14} className="text-[#F59E0B] fill-[#F59E0B]" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-gray-900">4.9/5</p>
                    <p className="text-[10px] text-gray-400">Avg rating</p>
                  </div>
                </div>
              </div>

              {/* Location badge */}
              <div className="float-card absolute -right-8 top-6 bg-[#1D4ED8] rounded-2xl shadow-lg px-3 py-2">
                <div className="flex items-center gap-1.5">
                  <MapPin size={13} className="text-white" />
                  <p className="text-xs font-semibold text-white">5 routes</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent" />
    </section>
  );
}
