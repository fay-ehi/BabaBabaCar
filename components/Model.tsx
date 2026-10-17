"use client";
import { motion } from "framer-motion";
import { Car, Wrench, Link2, KeyRound } from "lucide-react";

const items = [
  {
    icon: Car,
    title: "The car",
    body: "We source used vehicles from dealers and fleet owners in Poland and the USA, check them, and keep ownership with Bablo. You never need to find or buy a car first.",
  },
  {
    icon: Wrench,
    title: "The upkeep",
    body: "Servicing and repairs are arranged by us, so the car stays on the road and a breakdown doesn't become your problem to organise.",
  },
  {
    icon: Link2,
    title: "The platform setup",
    body: "Once you and the car are approved, we guide you through adding the car to your Uber, Bolt or other driver account.",
  },
  {
    icon: KeyRound,
    title: "The route to ownership",
    body: "Choose drive-to-own and your weekly payments go toward owning the car, instead of paying rent with nothing to show for it.",
  },
];

export default function Model() {
  return (
    <section id="about" className="bg-white py-20 sm:py-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 grid lg:grid-cols-5 gap-12 lg:gap-16">
        <div className="lg:col-span-2 lg:sticky lg:top-28 self-start">
          <h2
            className="text-[2rem] sm:text-[2.6rem] font-extrabold text-gray-900 leading-[1.1] text-balance mb-5"
            style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}
          >
            You bring the driving. We bring the car and the setup.
          </h2>
          <p className="text-gray-500 text-lg leading-relaxed">
            Most people who want to drive for Uber or Bolt get stuck at the same step: they don&apos;t have a car the
            platforms will accept. SYNQ RIDE takes that step off you.
          </p>
        </div>

        <div className="lg:col-span-3 divide-y divide-gray-100 border-y border-gray-100">
          {items.map(({ icon: Icon, title, body }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.45, delay: i * 0.04 }}
              className="flex gap-5 py-7"
            >
              <div className="w-11 h-11 rounded-xl bg-[#EFF6FF] flex items-center justify-center flex-shrink-0">
                <Icon size={20} className="text-[#1D4ED8]" />
              </div>
              <div>
                <h3
                  className="text-xl font-bold text-gray-900 mb-1.5"
                  style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}
                >
                  {title}
                </h3>
                <p className="text-gray-500 leading-relaxed max-w-lg">{body}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
