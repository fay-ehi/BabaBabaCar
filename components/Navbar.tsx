"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowRight } from "lucide-react";
import Image from "next/image";

const links = [
  { label: "How it works", href: "#how" },
  { label: "Vehicles", href: "#vehicles" },
  { label: "Partners", href: "#partners" },
  { label: "Markets", href: "#markets" },
  { label: "FAQ", href: "#faq" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const solid = scrolled || menuOpen;

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Announcement bar */}
      <div
        className={`bg-[#1D4ED8] text-white overflow-hidden transition-all duration-300 ${
          scrolled ? "max-h-0" : "max-h-12"
        }`}
      >
        <a
          href="#apply"
          className="flex items-center justify-center gap-2 px-4 py-2.5 text-xs sm:text-sm font-medium hover:bg-[#1e40af] transition-colors"
        >
          <span>Applications are open for drivers and vehicle partners in Poland and the USA.</span>
          <span className="hidden sm:inline-flex items-center gap-1 font-semibold underline underline-offset-4">
            Apply now <ArrowRight size={13} />
          </span>
        </a>
      </div>

      {/* Nav */}
      <div
        className={`transition-all duration-300 ${
          solid ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100" : "bg-transparent"
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-16">
            <a href="#" className="flex items-center gap-3" aria-label="SYNQ RIDE home">
              <span className={`rounded-lg px-1.5 py-1 ${solid ? "" : "bg-white"} transition-colors`}>
                <Image src="/logo.png" alt="" width={44} height={23} className="object-contain" priority />
              </span>
              <span
                className={`text-lg font-bold tracking-tight transition-colors ${
                  solid ? "text-gray-900" : "text-white"
                }`}
              >
                SYNQ RIDE
              </span>
            </a>

            <nav className="hidden lg:flex items-center gap-1" aria-label="Main">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  className={`px-3.5 py-2 text-sm font-medium rounded-lg transition-colors ${
                    solid
                      ? "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                      : "text-white/80 hover:text-white hover:bg-white/10"
                  }`}
                >
                  {l.label}
                </a>
              ))}
            </nav>

            <div className="flex items-center gap-3">
              <a
                href="#apply"
                className={`hidden sm:inline-flex items-center px-5 py-2.5 text-sm font-semibold rounded-xl transition-colors ${
                  solid ? "bg-[#1D4ED8] text-white hover:bg-[#1e40af]" : "bg-white text-gray-900 hover:bg-white/90"
                }`}
              >
                Apply to drive
              </a>
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className={`lg:hidden p-2 rounded-lg transition-colors ${
                  solid ? "text-gray-900 hover:bg-gray-100" : "text-white hover:bg-white/10"
                }`}
                aria-label={menuOpen ? "Close menu" : "Open menu"}
                aria-expanded={menuOpen}
              >
                {menuOpen ? <X size={22} /> : <Menu size={22} />}
              </button>
            </div>
          </div>
        </div>

        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-white border-t border-gray-100 px-4 pb-4 overflow-hidden"
            >
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setMenuOpen(false)}
                  className="block py-3 text-sm font-medium text-gray-700 border-b border-gray-50 last:border-0"
                >
                  {l.label}
                </a>
              ))}
              <a
                href="#apply"
                onClick={() => setMenuOpen(false)}
                className="mt-3 block text-center py-3 bg-[#1D4ED8] text-white text-sm font-semibold rounded-xl"
              >
                Apply to drive
              </a>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
