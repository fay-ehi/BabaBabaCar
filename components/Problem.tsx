"use client";
import { motion } from "framer-motion";
import { AlertCircle, Users, Wind, Clock } from "lucide-react";

const problems = [
  {
    icon: Users,
    title: "Overcrowded parks",
    desc: "Waiting at motor parks for buses that only depart when full is exhausting — nobody wants that to be their Friday afternoon.",
    color: "#EF4444", bg: "#FEF2F2"
  },
  {
    icon: Wind,
    title: "Unpredictable comfort",
    desc: "You never quite know what kind of ride you&apos;re getting — cramped seats, no AC, stops you didn&apos;t expect.",
    color: "#F59E0B", bg: "#FFFBEB"
  },
  {
    icon: Clock,
    title: "Wasted hours",
    desc: "Late departures, long loading times, and routes that seem to zig-zag across the city before getting anywhere.",
    color: "#8B5CF6", bg: "#F5F3FF"
  },
  {
    icon: AlertCircle,
    title: "Questionable trust",
    desc: "Sharing a long journey with strangers you know nothing about can feel uncomfortable — especially without any verification.",
    color: "#1D4ED8", bg: "#EFF6FF"
  },
];

export default function Problem() {
  return (
    <section id="about" className="bg-[#FAFAFA] py-24 sm:py-32">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          
          <h2 className="text-[2rem] sm:text-[2.5rem] font-extrabold text-gray-900 mb-4"
            style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}>
            Nigerian intercity travel is overdue for an upgrade
          </h2>
          <p className="text-gray-500 text-lg leading-relaxed">
            The experience of traveling between cities in Nigeria has hardly changed. We think it should be calmer, more comfortable, and built on trust.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {problems.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ delay: i * 0.1, duration: 0.55 }}
              className="bg-white rounded-2xl p-6 border border-gray-100 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 group"
            >
              <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-4 transition-transform group-hover:scale-105"
                style={{ backgroundColor: p.bg }}>
                <p.icon size={20} style={{ color: p.color }} />
              </div>
              <h3 className="font-bold text-gray-900 mb-2 text-[0.95rem]">{p.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed" dangerouslySetInnerHTML={{ __html: p.desc }} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
