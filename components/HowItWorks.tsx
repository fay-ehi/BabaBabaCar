"use client";
import { motion } from "framer-motion";
import { FileText, BadgeCheck, KeyRound, ArrowRight } from "lucide-react";

const steps = [
  {
    icon: FileText,
    title: "Apply",
    body: "Tell us your country, city and the platform you want to drive for.",
  },
  {
    icon: BadgeCheck,
    title: "Get verified",
    body: "We check your licence, ID and the documents your city requires. Then you choose a car and agree a weekly plan.",
  },
  {
    icon: KeyRound,
    title: "Start driving",
    body: "We help you link the car to Uber, Bolt or your other driver account. You drive and pay weekly.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how" className="bg-white py-20 sm:py-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-14">
          <div className="max-w-2xl">
            <h2 className="text-3xl sm:text-5xl font-semibold tracking-tight text-gray-900 leading-[1.1] text-balance mb-4">
              Three steps to get driving
            </h2>
            <p className="text-lg text-gray-500 leading-relaxed">
              We handle the car and the paperwork. You handle the driving.
            </p>
          </div>
          <a
            href="#apply"
            className="inline-flex items-center gap-2 self-start sm:self-auto px-6 py-3.5 bg-[#1D4ED8] text-white font-semibold rounded-xl hover:bg-[#1e40af] transition-colors group"
          >
            Get started
            <ArrowRight size={16} className="group-hover:translate-x-0.5 transition-transform" />
          </a>
        </div>

        <ol className="grid md:grid-cols-3 gap-5">
          {steps.map(({ icon: Icon, title, body }, i) => (
            <motion.li
              key={title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.45, delay: i * 0.08 }}
              className="rounded-3xl border border-gray-200 p-8"
            >
              <div className="flex items-center justify-between mb-10">
                <div className="w-14 h-14 rounded-2xl bg-[#EFF6FF] flex items-center justify-center">
                  <Icon size={26} className="text-[#1D4ED8]" />
                </div>
                <span className="text-sm font-semibold text-gray-400">Step {i + 1}</span>
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-3">{title}</h3>
              <p className="text-gray-500 leading-relaxed">{body}</p>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
}
