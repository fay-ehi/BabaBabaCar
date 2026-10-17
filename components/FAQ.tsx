"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";

const faqs = [
  {
    q: "Who owns the cars?",
    a: "Bablo owns the vehicles. You use the car as a driver, either on a weekly rental or on a drive-to-own agreement. If you choose drive-to-own, the car moves to you once the agreement is completed.",
  },
  {
    q: "Which apps can I drive for?",
    a: "We set your car up to work with the platforms you choose. In Poland that is typically Uber, Bolt and FreeNow, and in the USA Uber and Lyft. What's available to you depends on your city and each platform's own rules, and we'll confirm it when you apply.",
  },
  {
    q: "How much does it cost?",
    a: "You pay a weekly amount that is agreed before you take the car. The exact rate and structure are confirmed when you're approved, because they depend on your country, city and the vehicle.",
  },
  {
    q: "Do I need my own licence or permit to drive?",
    a: "Yes. You need a valid driving licence and whatever your city requires to work as a ride-hailing driver. That can include a criminal-record certificate and medical checks. We tell you exactly what applies to you and help you through it.",
  },
 
  {
    q: "Am I an employee of SYNQ RIDE?",
    a: "No. You drive as an independent driver on the platforms you choose. SYNQ RIDE provides the vehicle and the support around it.",
  },
  {
    q: "I have used cars. Can I work with you?",
    a: "Yes. We're looking for dealers, leasing companies and fleet owners in Poland and the USA. Use the form above and choose Vehicle supplier, and we'll talk about the vehicles you have and the terms.",
  },
  {
    q: "When can I start?",
    a: "We're launching first in Poland and the USA. Apply now and we'll contact you as vehicles become available in your city. If you're in another country, tell us where, and we'll let you know when we arrive.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section
      id="faq"
      className="relative overflow-hidden py-12 sm:py-16"
      style={{
        background:
          "linear-gradient(180deg, #FAFCFF 0%, #FFFFFF 100%)",
      }}
    >
      {/* soft glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at top, rgba(37,99,235,0.05), transparent 45%)",
        }}
      />

      <div className="relative max-w-2xl mx-auto px-4 sm:px-6">
        {/* header */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="text-center mb-7"
        >
          <h2
            className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900"
            style={{
              fontFamily: "'Bricolage Grotesque', sans-serif",
            }}
          >
            Questions before you apply
          </h2>
        </motion.div>

        {/* faq items */}
        <div className="space-y-2.5">
          {faqs.map((faq, i) => {
            const isOpen = open === i;

            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.35,
                  delay: i * 0.03,
                }}
                className="overflow-hidden rounded-xl border border-slate-200/80 bg-white/90 backdrop-blur-sm"
                style={{
                  boxShadow: isOpen
                    ? "0 10px 30px rgba(37,99,235,0.08)"
                    : "0 2px 10px rgba(15,23,42,0.03)",
                }}
              >
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full flex items-center justify-between gap-4 px-4 sm:px-5 py-4 text-left"
                >
                  <h3
                    className={`text-sm sm:text-[15px] font-medium leading-6 transition-colors ${
                      isOpen
                        ? "text-[#1D4ED8]"
                        : "text-slate-800"
                    }`}
                  >
                    {faq.q}
                  </h3>

                  <div
                    className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 transition-all duration-300 ${
                      isOpen
                        ? "bg-[#1D4ED8] text-white rotate-45"
                        : "bg-slate-100 text-slate-500"
                    }`}
                  >
                    <Plus size={15} />
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{
                        duration: 0.22,
                        ease: "easeInOut",
                      }}
                      className="overflow-hidden"
                    >
                      <div className="px-4 sm:px-5 pb-4">
                        <div className="h-px bg-blue-100 mb-3" />

                        <p className="text-sm leading-6 text-slate-600">
                          {faq.a}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}