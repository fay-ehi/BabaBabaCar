"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, X } from "lucide-react";

export default function FloatingBar() {
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      // Show after scrolling past the hero (roughly 500px)
      if (window.scrollY > 500 && !dismissed) {
        setVisible(true);
      } else if (window.scrollY <= 500) {
        setVisible(false);
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [dismissed]);

  return (
    <AnimatePresence>
      {visible && !dismissed && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: "spring", damping: 24, stiffness: 260 }}
          className="fixed bottom-4 left-4 right-4 z-50 sm:hidden"
        >
          <div className="bg-[#111827] rounded-2xl px-4 py-3.5 flex items-center gap-3 shadow-2xl border border-white/10">
            {/* Icon */}
            <div className="w-9 h-9 rounded-xl bg-[#1D4ED8] flex items-center justify-center flex-shrink-0">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M2 11L5 5L8 9L11 6L14 11H2Z" fill="white" opacity="0.9"/>
                <circle cx="8" cy="3.5" r="1.5" fill="#F59E0B"/>
              </svg>
            </div>

            {/* Text */}
            <div className="flex-1 min-w-0">
              <p className="text-white text-xs font-semibold leading-tight">Join the waitlist — it&apos;s free</p>
              <p className="text-white/40 text-[10px] truncate">Be first when your route goes live</p>
            </div>

            {/* CTA */}
            <a
              href="#waitlist"
              onClick={() => setDismissed(true)}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 bg-[#1D4ED8] text-white text-xs font-bold rounded-xl whitespace-nowrap hover:bg-[#1e40af] transition-colors"
            >
              Join
              <ArrowRight size={12} />
            </a>

            {/* Dismiss */}
            <button
              onClick={() => setDismissed(true)}
              className="w-6 h-6 flex items-center justify-center text-white/30 hover:text-white/60 transition-colors flex-shrink-0"
              aria-label="Dismiss"
            >
              <X size={14} />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
