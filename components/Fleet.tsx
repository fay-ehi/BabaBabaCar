"use client";
import { motion } from "framer-motion";
import CarArt from "./CarArt";

const cars = [
  {
    variant: "sedan" as const,
    color: "#1D4ED8",
    panel: "#EFF6FF",
    title: "Hybrid sedans",
    body: "Lower fuel costs across long shifts. The everyday choice for most ride-hailing drivers.",
    fit: "Best for full-time drivers",
  },
  {
    variant: "compact" as const,
    color: "#D97706",
    panel: "#FFFBEB",
    title: "Compact cars",
    body: "Easy to park and cheap to run in busy city centres.",
    fit: "Best for city driving and part-time work",
  },
  {
    variant: "suv" as const,
    color: "#0F172A",
    panel: "#F3F4F6",
    title: "Larger sedans and SUVs",
    body: "Space for luggage and groups, for higher-fare or XL tiers where the platform allows it.",
    fit: "Best for airport runs and groups",
  },
];

export default function Fleet() {
  return (
    <section id="vehicles" className="bg-white py-20 sm:py-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="max-w-2xl mb-12">
          <h2
            className="text-[2rem] sm:text-[2.6rem] font-extrabold text-gray-900 leading-[1.1] text-balance mb-4"
            style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}
          >
            Choose a car that fits how you drive
          </h2>
          <p className="text-gray-500 text-lg leading-relaxed">
            Every car is checked against the platforms&apos; vehicle rules before we offer it to you.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {cars.map((c, i) => (
            <motion.article
              key={c.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.45, delay: i * 0.08 }}
              className="flex flex-col"
            >
              <div className="rounded-3xl px-6 pt-10 pb-6" style={{ background: c.panel }}>
                <CarArt variant={c.variant} color={c.color} className="w-full h-auto" />
              </div>
              <h3
                className="text-xl font-bold text-gray-900 mt-5 mb-1.5"
                style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}
              >
                {c.title}
              </h3>
              <p className="text-gray-500 leading-relaxed mb-3">{c.body}</p>
              <p className="text-sm font-semibold text-[#1D4ED8] mt-auto">{c.fit}</p>
            </motion.article>
          ))}
        </div>

        <p className="text-sm text-gray-400 mt-10 max-w-xl">
          Available models depend on what our suppliers have in each city. You&apos;ll see the cars near you once your
          application is approved.
        </p>
      </div>
    </section>
  );
}
