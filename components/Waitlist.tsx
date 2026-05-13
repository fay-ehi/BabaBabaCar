"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle2, ArrowRight, User, Mail, Phone, MapPin, Car } from "lucide-react";

const routes = ["Lagos ↔ Ibadan", "Abuja ↔ Kaduna", "Enugu ↔ Owerri", "Lagos ↔ Benin", "Other route"];

export default function Waitlist() {
  const [submitted, setSubmitted] = useState(false);
  const [role, setRole] = useState<"rider" | "driver" | null>(null);
  const [form, setForm] = useState({ name: "", email: "", phone: "", route: "" });

  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  try {
    const res = await fetch("https://formspree.io/f/mqenlrqa", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: form.name,
        email: form.email,
        phone: form.phone,
        route: form.route,
        role: role,
      }),
    });
    if (res.ok) {
      setSubmitted(true);
    } else {
      alert("Something went wrong. Please try again.");
    }
  } catch {
    alert("Network error. Please check your connection and try again.");
  }
};

  return (
    <section id="waitlist" className="bg-[#FAFAFA] py-24 sm:py-32">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left: copy */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-3 py-1 bg-[#1D4ED8]/8 text-[#1D4ED8] text-xs font-semibold rounded-full mb-6">
              Early access
            </span>
            <h2 className="text-[2rem] sm:text-[2.75rem] font-extrabold text-gray-900 mb-5 leading-tight"
              style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}>
              Be among the first to travel smarter
            </h2>
            <p className="text-gray-500 text-lg leading-relaxed mb-8">
              We&apos;re building Baba Baba Car carefully — starting with a focused group of early travelers and drivers. Join the waitlist to get early access, route updates, and help shape how we grow.
            </p>

            <div className="space-y-4">
              {[
                "Get notified when your route goes live",
                "Early access before public launch",
                "Shape the product with your feedback",
                "Zero cost to join the waitlist",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <CheckCircle2 size={18} className="text-[#1D4ED8] flex-shrink-0" />
                  <p className="text-sm text-gray-700 font-medium">{item}</p>
                </div>
              ))}
            </div>

            <div className="mt-10 bg-white rounded-2xl p-5 border border-gray-100 shadow-sm">
              <div className="flex items-center gap-3 mb-2">
                <div className="flex -space-x-2">
                  {["#1D4ED8","#F59E0B","#10B981"].map((c, i) => (
                    <div key={i} className="w-7 h-7 rounded-full border-2 border-white flex items-center justify-center text-[9px] font-bold text-white"
                      style={{ backgroundColor: c }}>
                      {["C","D","E"][i]}
                    </div>
                  ))}
                </div>
                <p className="text-sm font-semibold text-gray-900">Early community growing</p>
              </div>
              <p className="text-xs text-gray-400">Travelers and drivers already signed up across Lagos, Abuja, and Enugu.</p>
            </div>
          </motion.div>

          {/* Right: form */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15, duration: 0.6 }}
          >
            {submitted ? (
              <div className="bg-white rounded-3xl border border-gray-100 shadow-lg p-10 text-center">
                <div className="w-16 h-16 bg-[#F0FDF4] rounded-full flex items-center justify-center mx-auto mb-5">
                  <CheckCircle2 size={32} className="text-[#15803D]" />
                </div>
                <h3 className="text-2xl font-extrabold text-gray-900 mb-3"
                  style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}>
                  You&apos;re on the list!
                </h3>
                <p className="text-gray-500 leading-relaxed mb-6">
                  We&apos;ll reach out when your route is ready or when we launch in your area. Thank you for being an early believer.
                </p>
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#EFF6FF] text-[#1D4ED8] text-sm font-semibold rounded-xl">
                  🎉 Welcome to Baba Baba Car
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit}
                className="bg-white rounded-3xl border border-gray-100 shadow-lg p-7 sm:p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-6"
                  style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}>
                  Join the waitlist
                </h3>

                {/* Role toggle */}
                <div className="mb-6">
                  <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2.5">I want to join as</label>
                  <div className="grid grid-cols-2 gap-3">
                    {([["rider", "Rider", "🛣️"], ["driver", "Driver", "🚗"]] as const).map(([val, label, emoji]) => (
                      <button
                        key={val}
                        type="button"
                        onClick={() => setRole(val)}
                        className={`flex items-center justify-center gap-2 py-3 rounded-xl border-2 text-sm font-semibold transition-all duration-150 ${
                          role === val
                            ? "border-[#1D4ED8] bg-[#EFF6FF] text-[#1D4ED8]"
                            : "border-gray-200 text-gray-600 hover:border-gray-300"
                        }`}
                      >
                        <span>{emoji}</span> {label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Fields */}
                {[
                  { key: "name", label: "Full name", type: "text", icon: User, placeholder: "Adaeze Okonkwo" },
                  { key: "email", label: "Email address", type: "email", icon: Mail, placeholder: "adaeze@email.com" },
                  { key: "phone", label: "Phone number", type: "tel", icon: Phone, placeholder: "+234 8XX XXX XXXX" },
                ].map(({ key, label, type, icon: Icon, placeholder }) => (
                  <div key={key} className="mb-4">
                    <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">{label}</label>
                    <div className="relative">
                      <Icon size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" />
                      <input
                        type={type}
                        required
                        placeholder={placeholder}
                        value={form[key as keyof typeof form]}
                        onChange={e => setForm({ ...form, [key]: e.target.value })}
                        className="w-full pl-10 pr-4 py-3 text-sm border border-gray-200 rounded-xl focus:outline-none focus:border-[#1D4ED8] focus:ring-2 focus:ring-[#1D4ED8]/10 transition-all placeholder:text-gray-300"
                      />
                    </div>
                  </div>
                ))}

                {/* Route */}
                <div className="mb-6">
                  <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">Preferred route</label>
                  <div className="relative">
                    <MapPin size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" />
                    <select
                      required
                      value={form.route}
                      onChange={e => setForm({ ...form, route: e.target.value })}
                      className="w-full pl-10 pr-4 py-3 text-sm border border-gray-200 rounded-xl focus:outline-none focus:border-[#1D4ED8] focus:ring-2 focus:ring-[#1D4ED8]/10 appearance-none bg-white transition-all text-gray-600"
                    >
                      <option value="">Select a route</option>
                      {routes.map(r => <option key={r}>{r}</option>)}
                    </select>
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={!role}
                  className="w-full flex items-center justify-center gap-2 py-3.5 bg-[#1D4ED8] text-white font-semibold rounded-xl hover:bg-[#1e40af] transition-all duration-200 shadow-md hover:shadow-[0_8px_25px_-5px_rgba(29,78,216,0.4)] disabled:opacity-40 disabled:cursor-not-allowed group"
                >
                  <Car size={16} />
                  Join Waitlist
                  <ArrowRight size={15} className="group-hover:translate-x-0.5 transition-transform" />
                </button>

                <p className="text-center text-xs text-gray-400 mt-4">
                  No spam. No pressure. Unsubscribe anytime.
                </p>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
