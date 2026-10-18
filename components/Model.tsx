"use client";
import { motion } from "framer-motion";
import { Car, Wrench, Link2 } from "lucide-react";

const pillars = [
  {
    icon: Car,
    title: "Vehicles",
    body: "We source used cars from dealers and fleet owners in Poland and the USA, check them, and keep ownership with Bablo. You never have to find or buy a car first.",
  },
  {
    icon: Wrench,
    title: "Upkeep",
    body: "Servicing and repairs are arranged by us, so the car stays on the road and a breakdown doesn't become your problem to organise.",
  },
  {
    icon: Link2,
    title: "Platform setup",
    body: "Once you and the car are approved, we guide you through adding the car to your Uber, Bolt or other driver account.",
  },
];

export default function Model() {
  return (
    <section id="about" className="bg-white py-20 sm:py-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="max-w-2xl mb-14">
          <h2 className="text-3xl sm:text-5xl font-semibold tracking-tight text-gray-900 leading-[1.1] text-balance mb-4">
            How SYNQ RIDE gets you driving
          </h2>
          <p className="text-lg text-gray-500 leading-relaxed">
            The car, the upkeep and the platform setup, combined into one service.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          {pillars.map(({ icon: Icon, title, body }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.45, delay: i * 0.08 }}
              className="rounded-3xl bg-[#F5F6F8] p-8"
            >
              <div className="w-12 h-12 rounded-2xl bg-[#1D4ED8] flex items-center justify-center mb-8">
                <Icon size={22} className="text-white" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-3">{title}</h3>
              <p className="text-gray-500 leading-relaxed">{body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
