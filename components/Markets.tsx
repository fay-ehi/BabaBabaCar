"use client";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const markets = [
  {
    code: "PL",
    name: "Poland",
    body: "Drivers in Polish cities often switch between Uber, Bolt and FreeNow. We set your car up for the apps you choose.",
    note: "You'll typically need a clean criminal-record certificate and medical checks. We'll tell you exactly what applies in your city.",
  },
  {
    code: "US",
    name: "United States",
    body: "We're starting in selected cities. Rules on vehicle age, insurance and licensing differ by state and city, so we match cars to your local requirements.",
    note: "Platforms in the US include Uber and Lyft.",
  },
];

export default function Markets() {
  return (
    <section id="markets" className="bg-white py-20 sm:py-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="max-w-2xl mb-12">
          <h2
            className="text-[2rem] sm:text-[2.6rem] font-extrabold text-gray-900 leading-[1.1] text-balance mb-4"
            style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}
          >
            Starting in Poland and the USA
          </h2>
          <p className="text-gray-500 text-lg leading-relaxed">
            We&apos;re building our first fleets where our vehicle suppliers are. More countries will follow.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {markets.map((m, i) => (
            <motion.div
              key={m.code}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.45, delay: i * 0.08 }}
              className="relative overflow-hidden rounded-3xl border border-gray-100 bg-[#F8FAFC] p-8 sm:p-10"
            >
              <span
                aria-hidden
                className="absolute right-4 -top-5 text-[8rem] sm:text-[10rem] leading-none font-extrabold text-[#1D4ED8]/8 select-none"
                style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}
              >
                {m.code}
              </span>
              <h3
                className="relative text-2xl font-bold text-gray-900 mb-3"
                style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}
              >
                {m.name}
              </h3>
              <p className="relative text-gray-600 leading-relaxed mb-4 max-w-md">{m.body}</p>
              <p className="relative text-sm text-gray-400 leading-relaxed max-w-md">{m.note}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-8 flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6 rounded-2xl border border-dashed border-gray-200 px-6 py-5">
          <p className="text-gray-600 flex-1">Not in Poland or the USA? Tell us where you are and we&apos;ll let you know when we arrive.</p>
          <a
            href="#apply"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#1D4ED8] hover:text-[#1e40af] group"
          >
            Request your country
            <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
}
