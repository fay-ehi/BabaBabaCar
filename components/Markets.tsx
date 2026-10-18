"use client";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const tiles = [
  {
    big: "PL",
    name: "Poland",
    body: "Drivers here often switch between Uber, Bolt and FreeNow. We set your car up for the apps you choose.",
  },
  {
    big: "US",
    name: "United States",
    body: "Starting in selected cities. Vehicle age, insurance and licensing rules vary, so we match cars to local requirements.",
  },
  {
    big: "+",
    name: "More countries",
    body: "We're adding countries after Poland and the USA. Tell us where you are and we'll let you know when we arrive.",
    link: true,
  },
];

export default function Markets() {
  return (
    <section id="markets" className="bg-[#0B1220] py-20 sm:py-28 text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="max-w-2xl mb-14">
          <h2 className="text-3xl sm:text-5xl font-semibold tracking-tight leading-[1.1] text-balance mb-4">
            Where we&apos;re launching
          </h2>
          <p className="text-lg text-white/65 leading-relaxed">
            We&apos;re building our first fleets in Poland and the USA, where our vehicle suppliers are.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          {tiles.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.45, delay: i * 0.08 }}
              className="rounded-3xl border border-white/12 bg-white/5 p-8 flex flex-col"
            >
              <span aria-hidden className="text-6xl sm:text-7xl font-semibold text-[#60A5FA] leading-none mb-8">
                {t.big}
              </span>
              <h3 className="text-xl font-semibold mb-2">{t.name}</h3>
              <p className="text-white/65 leading-relaxed mb-6">{t.body}</p>
              {t.link && (
                <a
                  href="#apply"
                  className="mt-auto inline-flex items-center gap-2 text-sm font-semibold text-white underline underline-offset-4 group"
                >
                  Request your country
                  <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
                </a>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
