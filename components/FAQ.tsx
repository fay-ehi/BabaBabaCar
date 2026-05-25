"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";

const faqs = [
  {
    q: "How is SYNQ RIDE different from taking a regular bus?",
    a: "With a regular bus or shared taxi, you usually wait at the park until the vehicle is completely full, which can sometimes take hours. With SYNQ RIDE, you book your seat in advance, know exactly who your driver is, and leave at the agreed time. The experience is calmer, more comfortable, and far more predictable.",
  },
  {
    q: "How do you verify drivers?",
    a: "Every driver goes through identity checks, vehicle inspections, and plate verification before they’re allowed to offer trips on the platform. We also collect ratings and trip feedback after every journey, so drivers remain accountable over time. Before booking, you’ll always be able to see a driver’s profile, rating, and verification status.",
  },
  {
    q: "Is this only for specific cities?",
    a: "We’re launching with a few high-demand routes first — Lagos ↔ Ibadan, Abuja ↔ Kaduna, and Enugu ↔ Owerri. More routes will follow shortly after launch. If your preferred route isn’t available yet, you can still join the waitlist and get notified once it goes live.",
  },
  {
    q: "Can I travel alone or do I have to share?",
    a: "SYNQ RIDE is designed as a shared ride platform, so you’ll typically travel with 1 to 3 other verified passengers. This helps keep rides affordable while also making trips feel more social and less isolating than traditional transport options. Everyone on the ride goes through the same verification process.",
  },
  {
    q: "How do payments work?",
    a: "Payment details will be finalized at launch, but we’re building around Nigerian payment methods including bank transfer, cards, and mobile payments.",
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
          <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-blue-600">
            FAQ
          </span>

          <h2
            className="mt-3 text-2xl sm:text-3xl font-bold tracking-tight text-slate-900"
            style={{
              fontFamily: "'Bricolage Grotesque', sans-serif",
            }}
          >
            Questions before your
            <span className="text-[#1D4ED8]"> first ride.</span>
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