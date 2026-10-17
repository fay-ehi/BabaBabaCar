"use client";
import { motion } from "framer-motion";
import { Mail, Share2, Link2, MessageCircle } from "lucide-react";

const nav: Record<string, { label: string; href: string }[]> = {
  Drivers: [
    { label: "How it works", href: "#how" },
    { label: "Vehicles", href: "#vehicles" },
    { label: "Plans", href: "#plans" },
    { label: "Apply to drive", href: "#apply" },
  ],
  Company: [
    { label: "Markets", href: "#markets" },
    { label: "Partners", href: "#partners" },
    { label: "FAQ", href: "#faq" },
    { label: "Contact", href: "#apply" },
  ],
  Legal: [
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of Use", href: "#" },
    { label: "Cookie Policy", href: "#" },
  ],
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
              Used cars for approved ride-hailing drivers, ready to link to Uber, Bolt and other apps. Launching first in Poland and the USA.
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
                  <li key={link.label}>
                    <a href={link.href} className="text-sm text-white/55 hover:text-white transition-colors">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-white/8 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/30">
            © {new Date().getFullYear()} SYNQ RIDE, a Bablo Group venture. All rights reserved.
          </p>
          <p className="text-xs text-white/25 text-center sm:text-right max-w-md">
            Uber, Bolt, FreeNow and Lyft are trademarks of their respective owners. SYNQ RIDE is not affiliated with or endorsed by them.
          </p>
        </div>
      </div>
    </footer>
  );
}
