"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export default function PageLoader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Hide loader after 1.8s
    const timer = setTimeout(() => setLoading(false), 1800);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-white"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.45, ease: "easeOut" }}
            className="flex flex-col items-center gap-5"
          >
            {/* Logo */}
            <div className="flex items-center justify-center">
              <Image
                src="/logo.png"
                alt="Baba Baba Car Logo"
                width={80}
                height={80}
                className="object-contain"
                priority
              />
            </div>

            {/* Brand Name */}
            <motion.p
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.4 }}
              className="text-xl font-extrabold tracking-tight text-gray-900"
              style={{
                fontFamily: "'Bricolage Grotesque', sans-serif",
              }}
            >
              Baba Baba Car
            </motion.p>

            {/* Animated Road */}
            <motion.div
              className="relative w-52 h-4 flex items-center bg-gray-200 rounded-full overflow-hidden mt-1"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              {/* Blue road line */}
              <motion.div
                className="absolute left-0 h-2 rounded-full bg-[#1D4ED8]"
                style={{
                  top: "50%",
                  transform: "translateY(-50%)",
                }}
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{
                  delay: 0.4,
                  duration: 1.1,
                  ease: [0.4, 0, 0.2, 1],
                }}
              />

              {/* Car */}
              <motion.div
                className="absolute top-1/2 -translate-y-1/2"
                initial={{ left: "-14%" }}
                animate={{ left: "86%" }}
                transition={{
                  delay: 0.4,
                  duration: 1.1,
                  ease: [0.4, 0, 0.2, 1],
                }}
              >
                {/* Bounce effect */}
                <motion.div
                  animate={{
                    y: [0, -1.5, 0],
                  }}
                  transition={{
                    duration: 0.25,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <svg
                    width="44"
                    height="24"
                    viewBox="0 0 64 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    {/* Car body */}
                    <path
                      d="M10 22L16 12C17 10 19 9 21 9H40C43 9 45 10 47 12L54 18H58C60 18 61 19 61 21V24C61 26 60 27 58 27H56C55 30 53 31 50 31C47 31 45 30 44 27H22C21 30 19 31 16 31C13 31 11 30 10 27H8C6 27 5 26 5 24V23C5 22 6 22 7 22H10Z"
                      fill="#F59E0B"
                    />

                    {/* Windows */}
                    <path
                      d="M22 12H38C40 12 41 13 42 14L46 18H18L20 14C20 13 21 12 22 12Z"
                      fill="#FFF7ED"
                    />

                    {/* Wheels */}
                    <circle cx="16" cy="27" r="4" fill="#111827" />
                    <circle cx="50" cy="27" r="4" fill="#111827" />

                    {/* Wheel centers */}
                    <circle cx="16" cy="27" r="1.5" fill="#9CA3AF" />
                    <circle cx="50" cy="27" r="1.5" fill="#9CA3AF" />
                  </svg>
                </motion.div>
              </motion.div>
            </motion.div>

            {/* Tagline */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.55, duration: 0.4 }}
              className="text-xs font-medium text-gray-400"
            >
              Connecting cities. Building trust.
            </motion.p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}