"use client";
import { motion } from "framer-motion";
import { Mail, Share2, Link2, MessageCircle } from "lucide-react";

const nav = {
  Product: ["How It Works", "Routes", "Safety", "For Drivers"],
  Company: ["About", "Blog", "Careers", "Contact"],
  Legal: ["Privacy Policy", "Terms of Use", "Cookie Policy"],
};

export default function Footer() {
  return (
    <footer className="bg-[#0F172A] text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-8 h-8 rounded-lg bg-[#1D4ED8] flex items-center justify-center">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M2 11L5 5L8 9L11 6L14 11H2Z" fill="white" opacity="0.9"/>
                  <circle cx="8" cy="3.5" r="1.5" fill="#F59E0B"/>
                </svg>
              </div>
              <span className="font-extrabold text-white text-lg"
                style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}>SYNQ RIDE</span>
            </div>
            <p className="text-white/40 text-sm leading-relaxed max-w-xs mb-6">
              Modern, verified intercity ride-sharing for Nigeria. Comfortable travel between cities, built on trust.
            </p>
            <div className="flex gap-3">
              {[
                { icon: Share2, href: "#" },
                { icon: MessageCircle, href: "#" },
                { icon: Link2, href: "#" },
                { icon: Mail, href: "#" },
              ].map(({ icon: Icon, href }, i) => (
                <a key={i} href={href}
                  className="w-9 h-9 rounded-xl bg-white/8 flex items-center justify-center hover:bg-white/15 transition-colors">
                  <Icon size={15} className="text-white/60" />
                </a>
              ))}
            </div>
          </div>

          {/* Nav links */}
          {Object.entries(nav).map(([category, links]) => (
            <div key={category}>
              <p className="text-xs font-bold text-white/40 uppercase tracking-widest mb-4">{category}</p>
              <ul className="space-y-3">
                {links.map(link => (
                  <li key={link}>
                    <a href="#" className="text-sm text-white/55 hover:text-white transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-white/8 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/30">
            © {new Date().getFullYear()} SYNQ RIDE. All rights reserved. Made in Nigeria.
          </p>
          <p className="text-xs text-white/25 text-center sm:text-right">
            Connecting cities. Building trust. One ride at a time.
          </p>
        </div>
      </div>
    </footer>
  );
}
