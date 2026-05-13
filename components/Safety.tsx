"use client";
import { motion } from "framer-motion";
import { ShieldCheck, BadgeCheck, Star, Fingerprint, MessageSquare, MapPin } from "lucide-react";

const features = [
  { icon: Fingerprint, title: "Identity verification", desc: "Every driver's identity is verified before going live on the platform.", color: "#1D4ED8", bg: "#EFF6FF" },
  { icon: BadgeCheck, title: "Plate & vehicle check", desc: "Vehicle details are confirmed and tied to the driver's profile.", color: "#10B981", bg: "#F0FDF4" },
  { icon: Star, title: "Ratings & reviews", desc: "Every trip is rated. Trusted drivers rise. Low-quality ones don't stay.", color: "#F59E0B", bg: "#FFFBEB" },
  { icon: MessageSquare, title: "Pre-trip coordination", desc: "Riders and drivers communicate clearly before departure — no surprises.", color: "#8B5CF6", bg: "#F5F3FF" },
  { icon: MapPin, title: "Shared trip details", desc: "Share your trip details with someone you trust before you depart.", color: "#EF4444", bg: "#FEF2F2" },
  { icon: ShieldCheck, title: "Community trust layer", desc: "Verified profiles, mutual reviews, and a community that keeps each other accountable.", color: "#0EA5E9", bg: "#F0F9FF" },
];

export default function Safety() {
  return (
    <section className="bg-white py-24 sm:py-32">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="inline-block px-3 py-1 bg-[#F0FDF4] text-[#15803D] text-xs font-semibold rounded-full mb-4">
            Safety & trust
          </span>
          <h2 className="text-[2rem] sm:text-[2.5rem] font-extrabold text-gray-900 mb-4"
            style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}>
            Trust is built into every trip
          </h2>
          <p className="text-gray-500 text-lg leading-relaxed">
            You shouldn't have to take someone's word for it. Our verification and review system makes trust visible — before you ever get in the car.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              className="group flex gap-4 p-5 rounded-2xl border border-gray-100 hover:shadow-md hover:border-gray-200 hover:-translate-y-0.5 transition-all duration-200 bg-white"
            >
              <div className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 transition-transform group-hover:scale-105"
                style={{ backgroundColor: f.bg }}>
                <f.icon size={20} style={{ color: f.color }} />
              </div>
              <div>
                <h3 className="text-sm font-bold text-gray-900 mb-1">{f.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{f.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-12 max-w-xl mx-auto text-center bg-[#EFF6FF] rounded-2xl p-6 border border-[#BFDBFE]"
        >
          <ShieldCheck size={28} className="text-[#1D4ED8] mx-auto mb-3" />
          <p className="text-sm font-semibold text-gray-900 mb-1">
            Only verified drivers can accept ride requests
          </p>
          <p className="text-sm text-gray-500">
            Before a driver can offer any trip, they go through our complete verification process. No shortcuts.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
