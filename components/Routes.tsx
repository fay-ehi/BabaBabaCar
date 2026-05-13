"use client";
import { motion } from "framer-motion";
import { ArrowRight, Clock, MapPin, Users } from "lucide-react";

const routes = [
  {
    from: "Lagos",
    to: "Ibadan",
    duration: "~2h 30m",
    freq: "Daily",
    seats: "4 seats max",
    price: "From ₦3,500",
    fromCode: "LOS",
    toCode: "IBA",
    color: "#1D4ED8",
    accent: "#EFF6FF",
    tag: "Most popular",
    tagColor: "#1D4ED8",
    tagBg: "#EFF6FF",
  },
  {
    from: "Abuja",
    to: "Kaduna",
    duration: "~2h 15m",
    freq: "Daily",
    seats: "4 seats max",
    price: "From ₦4,200",
    fromCode: "ABJ",
    toCode: "KDN",
    color: "#F59E0B",
    accent: "#FFFBEB",
    tag: "High demand",
    tagColor: "#D97706",
    tagBg: "#FFFBEB",
  },
  {
    from: "Enugu",
    to: "Owerri",
    duration: "~2h 45m",
    freq: "Daily",
    seats: "4 seats max",
    price: "From ₦3,800",
    fromCode: "ENU",
    toCode: "OWR",
    color: "#10B981",
    accent: "#F0FDF4",
    tag: "Growing route",
    tagColor: "#059669",
    tagBg: "#F0FDF4",
  },
];

export default function Routes() {
  return (
    <section className="bg-[#FAFAFA] py-24 sm:py-32">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="inline-block px-3 py-1 bg-gray-200 text-gray-600 text-xs font-semibold rounded-full mb-4">
            Routes
          </span>
          <h2 className="text-[2rem] sm:text-[2.5rem] font-extrabold text-gray-900 mb-4"
            style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}>
            Popular intercity routes
          </h2>
          <p className="text-gray-500 text-lg">Starting with Nigeria&apos;s busiest corridors. More cities coming soon.</p>
        </motion.div>

        <div className="grid sm:grid-cols-3 gap-6">
          {routes.map((r, i) => (
            <motion.div
              key={`${r.from}-${r.to}`}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ delay: i * 0.12, duration: 0.6 }}
              className="bg-white rounded-2xl border border-gray-100 overflow-hidden hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 group cursor-pointer"
            >
              {/* Header */}
              <div className="p-6 relative" style={{ background: `linear-gradient(135deg, ${r.accent} 0%, white 70%)` }}>
                <div className="flex items-center justify-between mb-4">
                  <span className="px-2.5 py-1 text-[10px] font-bold rounded-full uppercase tracking-wide"
                    style={{ color: r.tagColor, backgroundColor: r.tagBg }}>
                    {r.tag}
                  </span>
                  <div className="w-8 h-8 rounded-full flex items-center justify-center" style={{ backgroundColor: r.accent }}>
                    <MapPin size={14} style={{ color: r.color }} />
                  </div>
                </div>

                {/* City names */}
                <div className="flex items-center gap-3">
                  <div>
                    <p className="text-xs text-gray-400 font-medium">{r.fromCode}</p>
                    <p className="text-2xl font-extrabold text-gray-900"
                      style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}>{r.from}</p>
                  </div>
                  <div className="flex-1 flex items-center justify-center gap-1">
                    <div className="flex-1 h-px border-t-2 border-dashed" style={{ borderColor: r.color, opacity: 0.3 }} />
                    <ArrowRight size={16} style={{ color: r.color }} />
                    <div className="flex-1 h-px border-t-2 border-dashed" style={{ borderColor: r.color, opacity: 0.3 }} />
                  </div>
                  <div className="text-right">
                    <p className="text-xs text-gray-400 font-medium">{r.toCode}</p>
                    <p className="text-2xl font-extrabold text-gray-900"
                      style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}>{r.to}</p>
                  </div>
                </div>
              </div>

              {/* Details */}
              <div className="px-6 py-4 border-t border-gray-50">
                <div className="grid grid-cols-3 gap-3 mb-4">
                  {[
                    { icon: Clock, val: r.duration, label: "Duration" },
                    { icon: Users, val: r.seats, label: "Per trip" },
                  ].map((detail) => (
                    <div key={detail.label} className="col-span-1">
                      <div className="flex items-center gap-1.5 mb-0.5">
                        <detail.icon size={12} className="text-gray-400" />
                        <p className="text-[10px] text-gray-400">{detail.label}</p>
                      </div>
                      <p className="text-xs font-semibold text-gray-700">{detail.val}</p>
                    </div>
                  ))}
                  <div>
                    <p className="text-[10px] text-gray-400 mb-0.5">Price</p>
                    <p className="text-xs font-bold" style={{ color: r.color }}>{r.price}</p>
                  </div>
                </div>

                <a href="#waitlist"
                  className="block w-full text-center py-2.5 text-sm font-semibold rounded-xl border transition-all duration-200 group-hover:text-white group-hover:border-transparent"
                  style={{
                    color: r.color,
                    borderColor: `${r.color}30`,
                  }}
                  onMouseEnter={e => {
                    (e.target as HTMLElement).style.backgroundColor = r.color;
                    (e.target as HTMLElement).style.color = 'white';
                  }}
                  onMouseLeave={e => {
                    (e.target as HTMLElement).style.backgroundColor = 'transparent';
                    (e.target as HTMLElement).style.color = r.color;
                  }}
                >
                  Join waitlist for this route
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-sm text-gray-400 mt-8"
        >
          Port Harcourt, Benin, Kano, Ogun and more routes launching soon.
        </motion.p>
      </div>
    </section>
  );
}
