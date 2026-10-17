"use client";
import { motion } from "framer-motion";

const markets = [
  { country: "Poland", code: "PL", apps: ["Uber", "Bolt", "FreeNow"] },
  { country: "United States", code: "US", apps: ["Uber", "Lyft"] },
];

export default function TrustStrip() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="bg-white py-12 border-y border-gray-100"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <p className="text-center text-sm text-gray-500 mb-8">
          Your car is set up to work with the apps you already drive for.
        </p>
        <div className="grid sm:grid-cols-2 gap-8 sm:gap-0 sm:divide-x divide-gray-100">
          {markets.map((m) => (
            <div key={m.code} className="flex flex-col items-center gap-3 sm:px-8">
              <span className="text-xs font-semibold text-gray-400">{m.country}</span>
              <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-2">
                {m.apps.map((a) => (
                  <span
                    key={a}
                    className="text-2xl sm:text-3xl font-extrabold text-gray-300"
                    style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}
                  >
                    {a}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
        <p className="text-center text-xs text-gray-400 mt-8">
          Which apps you can use depends on your city and each platform&apos;s own rules.
        </p>
      </div>
    </motion.section>
  );
}
