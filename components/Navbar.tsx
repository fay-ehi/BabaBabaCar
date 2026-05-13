"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Image from "next/image";

const links = ["Home", "About", "Drivers", "FAQ"];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/85 backdrop-blur-md shadow-sm border-b border-gray-100"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16 sm:h-18">
          
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <Image
              src="/logo.png"
              alt="Baba Baba Car Logo"
              width={50}
              height={50}
              className="object-contain"
              priority
            />

            <span
              className="text-gray-900 text-lg tracking-tight"
              style={{
                fontFamily: "'Bricolage Grotesque', sans-serif",
                fontWeight: 700,
              }}
            >
              Baba Baba Car
            </span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1">
            {links.map((l) => (
              <a
                key={l}
                href={`#${l.toLowerCase()}`}
                className="px-4 py-2 text-sm font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-lg transition-all duration-150"
              >
                {l}
              </a>
            ))}
          </nav>

          {/* CTA + Hamburger */}
          <div className="flex items-center gap-3">
            <a
              href="#waitlist"
              className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 bg-[#1D4ED8] text-white text-sm font-semibold rounded-xl hover:bg-[#1e40af] transition-all duration-200 shadow-sm hover:shadow-blue-200 hover:shadow-md"
            >
              Join Waitlist
            </a>

            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
              aria-label="Menu"
            >
              {menuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-b border-gray-100 px-4 pb-4"
          >
            {links.map((l) => (
              <a
                key={l}
                href={`#${l.toLowerCase()}`}
                onClick={() => setMenuOpen(false)}
                className="block py-3 text-sm font-medium text-gray-700 border-b border-gray-50 last:border-0"
              >
                {l}
              </a>
            ))}

            <a
              href="#waitlist"
              onClick={() => setMenuOpen(false)}
              className="mt-3 block text-center py-3 bg-[#1D4ED8] text-white text-sm font-semibold rounded-xl"
            >
              Join Waitlist
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}