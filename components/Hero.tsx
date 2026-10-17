"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Check, ShieldCheck, Wrench, Car, KeyRound, HandCoins } from "lucide-react";
import CarArt from "./CarArt";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.6, ease: "easeOut" as const },
  }),
};

const platforms = ["Uber", "Bolt", "FreeNow"] as const;

export default function Hero() {
  const [linked, setLinked] = useState<string[]>([]);

  // One-time demo: the page loader covers the first ~1.8s, so link two apps right after it clears.
  useEffect(() => {
    const add = (p: string) => setLinked((l) => (l.includes(p) ? l : [...l, p]));
    const t1 = setTimeout(() => add("Uber"), 2400);
    const t2 = setTimeout(() => add("Bolt"), 3300);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, []);

  const toggle = (p: string) =>
    setLinked((l) => (l.includes(p) ? l.filter((x) => x !== p) : [...l, p]));

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-16">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#EFF6FF] via-white to-[#FFFBEB]" />
      <div className="absolute top-20 right-0 w-[600px] h-[600px] rounded-full bg-[#1D4ED8]/5 blur-3xl" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-[#F59E0B]/8 blur-3xl" />
      <div
        className="absolute inset-0 opacity-[0.025]"
        style={{ backgroundImage: "radial-gradient(#1D4ED8 1px, transparent 1px)", backgroundSize: "32px 32px" }}
      />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 py-20 w-full">
        <div className="grid lg:grid-cols-2 gap-14 lg:gap-8 items-center">
          {/* Left: Copy */}
          <div className="max-w-xl">
            <motion.div custom={0} variants={fadeUp} initial="hidden" animate="visible">
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-[#1D4ED8]/8 text-[#1D4ED8] text-xs font-semibold rounded-full mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-[#1D4ED8] pulse-dot inline-block" />
                Launching in Poland and the USA
              </span>
            </motion.div>

            <motion.h1
              custom={1}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="text-[2.6rem] sm:text-[3.4rem] lg:text-[3.9rem] font-extrabold text-gray-900 leading-[1.05] mb-6"
              style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}
            >
              Get the car.
              <br />
              Link your apps.
              <br />
              Start driving.
            </motion.h1>

            <motion.p
              custom={2}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="text-lg text-gray-500 leading-relaxed mb-8 max-w-[480px]"
            >
              SYNQ RIDE gives approved drivers a used car that Bablo owns and maintains, ready to work with Uber, Bolt and
              other ride-hailing apps. Pay weekly, and rent the car or work toward owning it.
            </motion.p>

            <motion.div
              custom={3}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="flex flex-col sm:flex-row gap-3"
            >
              <a
                href="#apply"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#1D4ED8] text-white font-semibold rounded-xl hover:bg-[#1e40af] transition-all duration-200 shadow-md hover:shadow-[0_8px_25px_-5px_rgba(29,78,216,0.4)] group"
              >
                Apply to drive
                <ArrowRight size={16} className="group-hover:translate-x-0.5 transition-transform" />
              </a>
              <a
                href="#partners"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-white text-gray-800 font-semibold rounded-xl border border-gray-200 hover:border-gray-300 hover:bg-gray-50 transition-all duration-200 shadow-sm"
              >
                I have cars to supply
              </a>
            </motion.div>

            <motion.ul
              custom={4}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="mt-10 flex flex-wrap gap-x-7 gap-y-3"
            >
              {[
                { icon: HandCoins, text: "No car to buy" },
                { icon: ShieldCheck, text: "We handle onboarding" },
                { icon: KeyRound, text: "Own it later" },
              ].map(({ icon: Icon, text }) => (
                <li key={text} className="flex items-center gap-2.5 text-sm text-gray-600 font-medium">
                  <span className="w-8 h-8 rounded-lg bg-white border border-gray-100 shadow-sm flex items-center justify-center flex-shrink-0">
                    <Icon size={15} className="text-[#1D4ED8]" />
                  </span>
                  {text}
                </li>
              ))}
            </motion.ul>
          </div>

          {/* Right: vehicle card — tap a platform to link it */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="relative flex justify-center lg:justify-end"
          >
            <div className="relative w-[320px] sm:w-[370px]">
              <div className="bg-white rounded-3xl shadow-[0_20px_60px_-10px_rgba(0,0,0,0.12)] border border-gray-100 p-5">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <p className="text-xs text-gray-400 font-medium">Owned by Bablo</p>
                    <p
                      className="text-base font-bold text-gray-900"
                      style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}
                    >
                      Hybrid sedan
                    </p>
                  </div>
                  <span className="text-[10px] font-medium text-gray-400 border border-gray-200 rounded-full px-2 py-0.5">
                    Illustrative preview
                  </span>
                </div>

                <div className="bg-[#EFF6FF] rounded-2xl px-4 pt-5 pb-3 mb-3">
                  <CarArt variant="sedan" className="w-full h-auto" />
                </div>

                <div className="flex gap-2 mb-5">
                  <span className="inline-flex items-center gap-1.5 text-xs font-medium text-gray-600 bg-gray-50 rounded-lg px-2.5 py-1.5">
                    <ShieldCheck size={13} className="text-[#15803D]" /> Inspected
                  </span>
                  <span className="inline-flex items-center gap-1.5 text-xs font-medium text-gray-600 bg-gray-50 rounded-lg px-2.5 py-1.5">
                    <Wrench size={13} className="text-[#1D4ED8]" /> Serviced for you
                  </span>
                </div>

                <p className="text-xs font-semibold text-gray-500 mb-2">Link your platforms</p>
                <div className="space-y-2">
                  {platforms.map((p) => {
                    const on = linked.includes(p);
                    return (
                      <div
                        key={p}
                        className="flex items-center justify-between rounded-xl border border-gray-100 px-3 py-2.5"
                      >
                        <div className="flex items-center gap-2.5">
                          <span className="w-7 h-7 rounded-lg bg-gray-900 text-white text-xs font-bold flex items-center justify-center">
                            {p[0]}
                          </span>
                          <span className="text-sm font-semibold text-gray-900">{p}</span>
                        </div>
                        <button
                          type="button"
                          role="switch"
                          aria-checked={on}
                          aria-label={`${on ? "Unlink" : "Link"} ${p}`}
                          onClick={() => toggle(p)}
                          className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-semibold transition-colors duration-200 ${
                            on ? "bg-[#DCFCE7] text-[#15803D]" : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                          }`}
                        >
                          {on && <Check size={12} />}
                          {on ? "Linked" : "Link"}
                        </button>
                      </div>
                    );
                  })}
                </div>

                <div
                  aria-live="polite"
                  className={`mt-4 rounded-xl px-3.5 py-3 text-sm font-semibold flex items-center gap-2 transition-colors duration-300 ${
                    linked.length ? "bg-[#1D4ED8] text-white" : "bg-gray-50 text-gray-500"
                  }`}
                >
                  <Car size={16} />
                  {linked.length
                    ? `Ready to drive · ${linked.length} ${linked.length === 1 ? "app" : "apps"} linked`
                    : "Link an app to get started"}
                </div>
              </div>

            </div>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent" />
    </section>
  );
}
