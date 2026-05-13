"use client";
import { motion } from "framer-motion";
import { ShieldCheck, Smile, Users2, Route } from "lucide-react";

const items = [
  { icon: ShieldCheck, label: "Verified Drivers", desc: "Every driver is ID-checked and plate-verified", color: "#1D4ED8", bg: "#EFF6FF" },
  { icon: Smile, label: "Comfortable Rides", desc: "Clean vehicles with limited passengers", color: "#F59E0B", bg: "#FFFBEB" },
  { icon: Users2, label: "Shared Travel", desc: "Split the cost with trusted co-travelers", color: "#10B981", bg: "#F0FDF4" },
  { icon: Route, label: "Safer Journeys", desc: "Tracked routes with community trust", color: "#8B5CF6", bg: "#F5F3FF" },
];

export default function TrustStrip() {
  return (
    <section className="relative bg-white py-12 border-y border-gray-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {items.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              className="flex flex-col sm:flex-row items-start sm:items-center gap-3 p-4 rounded-xl hover:bg-gray-50 transition-colors group"
            >
              <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 transition-transform group-hover:scale-105"
                style={{ backgroundColor: item.bg }}>
                <item.icon size={18} style={{ color: item.color }} />
              </div>
              <div>
                <p className="text-sm font-semibold text-gray-900">{item.label}</p>
                <p className="text-xs text-gray-400 mt-0.5 hidden sm:block">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
