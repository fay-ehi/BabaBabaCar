"use client";
import { motion } from "framer-motion";
import { Fuel, Users, Coins, ArrowRight } from "lucide-react";

const perks = [
  { icon: Fuel, title: "Offset your fuel costs", desc: "Riders share the cost of the trip with you — fairly and transparently.", color: "#F59E0B", bg: "#FFFBEB" },
  { icon: Users, title: "Vetted co-travelers only", desc: "Only verified riders can request to join your trip. You always have the final say.", color: "#1D4ED8", bg: "#EFF6FF" },
  { icon: Coins, title: "Earn on trips you're already making", desc: "Turn your regular Lagos-Ibadan commute into a smarter, more economical journey.", color: "#10B981", bg: "#F0FDF4" },
];

export default function Driver() {
  return (
    <section id="drivers" className="bg-white py-24 sm:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#EFF6FF]/40 via-white to-[#FFFBEB]/30" />
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Perks */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="space-y-5"
          >
            {perks.map((p, i) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.15 + i * 0.1, duration: 0.5 }}
                className="flex gap-4 p-5 bg-white rounded-2xl border border-gray-100 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 group"
              >
                <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 transition-transform group-hover:scale-105"
                  style={{ backgroundColor: p.bg }}>
                  <p.icon size={22} style={{ color: p.color }} />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">{p.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{p.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Copy */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-block px-3 py-1 bg-[#FFFBEB] text-[#D97706] text-xs font-semibold rounded-full mb-6">
              For drivers
            </span>
            <h2 className="text-[2rem] sm:text-[2.75rem] font-extrabold text-gray-900 mb-5 leading-tight"
              style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}>
              Already making the trip?<br />
              <span className="text-[#F59E0B]">Share the empty seats.</span>
            </h2>
            <p className="text-gray-500 text-lg leading-relaxed mb-8">
              You&apos;re already heading to Ibadan this weekend. Why not connect with two or three verified travelers going the same way? You cover your fuel costs. They get a comfortable, trusted ride. Everyone wins.
            </p>

            {/* Mini metric */}
            <div className="flex gap-6 mb-8">
              {[
                { val: "~₦6k", label: "Avg fuel saving per trip" },
                { val: "4.8★", label: "Avg driver rating" },
              ].map(m => (
                <div key={m.label}>
                  <p className="text-2xl font-extrabold text-gray-900"
                    style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}>{m.val}</p>
                  <p className="text-xs text-gray-400">{m.label}</p>
                </div>
              ))}
            </div>

            <a
              href="#waitlist"
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#F59E0B] text-white font-semibold rounded-xl hover:bg-[#D97706] transition-all duration-200 shadow-md hover:shadow-[0_8px_25px_-5px_rgba(245,158,11,0.4)] group"
            >
              Register as a Driver
              <ArrowRight size={16} className="group-hover:translate-x-0.5 transition-transform" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
