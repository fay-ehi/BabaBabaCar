"use client";
import { motion } from "framer-motion";
import { Check } from "lucide-react";

const rental = [
  "Weekly payment, agreed before you take the car",
  "Hand the car back when you want to stop",
  "Servicing arranged by us",
  "Good for trying ride-hailing or driving part-time",
];

const own = [
  "Weekly payment, agreed before you take the car",
  "Payments go toward owning the car",
  "Servicing arranged by us",
  "Good for full-time drivers who want to build an asset",
];

function Item({ text, dark }: { text: string; dark?: boolean }) {
  return (
    <li className="flex items-start gap-3">
      <span
        className={`mt-0.5 w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 ${
          dark ? "bg-white/15" : "bg-[#EFF6FF]"
        }`}
      >
        <Check size={12} className={dark ? "text-white" : "text-[#1D4ED8]"} />
      </span>
      <span className={`text-[15px] leading-relaxed ${dark ? "text-white/90" : "text-gray-600"}`}>{text}</span>
    </li>
  );
}

export default function Plans() {
  return (
    <section id="plans" className="bg-[#FAFAFA] py-20 sm:py-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="max-w-2xl mb-12">
          <h2
            className="text-[2rem] sm:text-[2.6rem] font-extrabold text-gray-900 leading-[1.1] text-balance mb-4"
            style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}
          >
            Two ways to drive
          </h2>
          <p className="text-gray-500 text-lg leading-relaxed">
            Start with a rental, or go straight to drive-to-own. Either way, you pay weekly and the car is serviced for
            you.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.45 }}
            className="bg-white rounded-3xl border border-gray-200 p-8"
          >
            <h3
              className="text-2xl font-bold text-gray-900 mb-1"
              style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}
            >
              Weekly rental
            </h3>
            <p className="text-gray-500 mb-6">Flexible. Use the car while you need it.</p>
            <ul className="space-y-3.5">
              {rental.map((t) => (
                <Item key={t} text={t} />
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.45, delay: 0.08 }}
            className="bg-[#1D4ED8] rounded-3xl p-8"
          >
            <h3
              className="text-2xl font-bold text-white mb-1"
              style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}
            >
              Drive-to-own
            </h3>
            <p className="text-white/70 mb-6">A longer agreement that ends with the car in your name.</p>
            <ul className="space-y-3.5">
              {own.map((t) => (
                <Item key={t} text={t} dark />
              ))}
            </ul>
          </motion.div>
        </div>

        <p className="text-sm text-gray-400 mt-8 max-w-2xl">
          Rates and terms are confirmed when you&apos;re approved. They depend on your country, city and the vehicle you
          choose.
        </p>
      </div>
    </section>
  );
}
