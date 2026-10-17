"use client";
import { motion } from "framer-motion";
import { Check } from "lucide-react";

const needs = [
  "A valid driving licence",
  "A government ID and the right to work as a driver in your country",
  "A criminal-record certificate where your city requires one",
  "Medical or other checks where local rules require them",
  "A smartphone and an account on the platform you want to drive for",
];

export default function Requirements() {
  return (
    <section id="requirements" className="bg-[#FAFAFA] py-20 sm:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 grid lg:grid-cols-5 gap-10 lg:gap-16 items-start">
        <div className="lg:col-span-2">
          <h2
            className="text-[2rem] sm:text-[2.4rem] font-extrabold text-gray-900 leading-[1.1] text-balance mb-4"
            style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}
          >
            What you&apos;ll need to apply
          </h2>
          <p className="text-gray-500 text-lg leading-relaxed">
            Requirements differ by country and city. After you apply, we confirm exactly what applies to you.
          </p>
        </div>

        <ul className="lg:col-span-3 grid sm:grid-cols-2 gap-x-8 gap-y-5">
          {needs.map((n, i) => (
            <motion.li
              key={n}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: i * 0.05 }}
              className="flex items-start gap-3"
            >
              <span className="mt-0.5 w-5 h-5 rounded-full bg-[#1D4ED8] flex items-center justify-center flex-shrink-0">
                <Check size={12} className="text-white" />
              </span>
              <span className="text-gray-700 leading-relaxed">{n}</span>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}
