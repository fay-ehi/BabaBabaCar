"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle2, ArrowRight, User, Mail, Phone, MapPin, Globe, MessageSquare } from "lucide-react";

// TODO: replace with a new Formspree form for the new concept (this is still the old waitlist form).
const FORM_ENDPOINT = "https://formspree.io/f/mqenlrqa";

type Role = "driver" | "supplier" | "investor";

const roles: { value: Role; label: string }[] = [
  { value: "driver", label: "Driver" },
  { value: "supplier", label: "Vehicle supplier" },
  { value: "investor", label: "Investor" },
];

const copy: Record<Role, { submit: string; done: string; message: string }> = {
  driver: {
    submit: "Apply to drive",
    done: "We'll contact you when vehicles are available in your city, with the next steps and what to prepare.",
    message: "Anything we should know? (optional)",
  },
  supplier: {
    submit: "Register as a vehicle partner",
    done: "We'll contact you to talk about your vehicles and how we can work together.",
    message: "Tell us about the vehicles you have (type, number, location)",
  },
  investor: {
    submit: "Request investor information",
    done: "We'll be in touch with our plan and how the fleet is managed.",
    message: "Tell us a little about your interest (optional)",
  },
};

const countries = ["Poland", "United States", "Other country"];

export default function Apply() {
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState("");
  const [role, setRole] = useState<Role>("driver");
  const [form, setForm] = useState({ name: "", email: "", phone: "", country: "", city: "", message: "" });

  // Lets the "Partners" buttons preselect the right form type.
  useEffect(() => {
    const onRole = (e: Event) => {
      const r = (e as CustomEvent<Role>).detail;
      if (r === "driver" || r === "supplier" || r === "investor") setRole(r);
    };
    window.addEventListener("synq:role", onRole);
    return () => window.removeEventListener("synq:role", onRole);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    setError("");
    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, role }),
      });
      if (res.ok) {
        setSubmitted(true);
      } else {
        setError("We couldn't send your details. Check them and try again.");
      }
    } catch {
      setError("No connection. Check your internet and try again.");
    } finally {
      setSending(false);
    }
  };

  const input =
    "w-full pl-10 pr-4 py-3 text-sm border border-gray-200 rounded-xl focus:outline-none focus:border-[#1D4ED8] focus:ring-2 focus:ring-[#1D4ED8]/10 transition-all placeholder:text-gray-300 bg-white";
  const label = "block text-xs font-semibold text-gray-500 mb-2";

  return (
    <section id="apply" className="bg-white py-20 sm:py-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-14 lg:gap-16 items-start">
          {/* Left: copy */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2
              className="text-3xl sm:text-5xl font-semibold tracking-tight text-gray-900 mb-5 leading-[1.1] text-balance"
            >
              Apply to drive, or partner with us
            </h2>
            <p className="text-gray-500 text-lg leading-relaxed mb-8">
              Tell us a little about you. We&apos;ll contact you about vehicles, requirements and next steps in your
              city.
            </p>

            <div className="space-y-4">
              {[
                "Applying doesn't commit you to anything",
                "We reply by phone, WhatsApp or email",
                "Launching first in Poland and the USA",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <CheckCircle2 size={18} className="text-[#1D4ED8] flex-shrink-0" />
                  <p className="text-sm text-gray-700 font-medium">{item}</p>
                </div>
              ))}
            </div>

            <p className="mt-8 text-sm text-gray-500">
              Prefer to talk?{" "}
              <a
                href="https://wa.me/2347039968323?text=Hi%2C%20I%27d%20like%20to%20know%20more%20about%20SYNQ%20RIDE"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-[#1D4ED8] underline underline-offset-4"
              >
                Message us on WhatsApp
              </a>
            </p>
          </motion.div>

          {/* Right: form */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15, duration: 0.6 }}
          >
            {submitted ? (
              <div className="bg-white rounded-3xl border border-gray-100 shadow-lg p-10 text-center" role="status">
                <div className="w-16 h-16 bg-[#F0FDF4] rounded-full flex items-center justify-center mx-auto mb-5">
                  <CheckCircle2 size={32} className="text-[#15803D]" />
                </div>
                <h3
                  className="text-2xl font-semibold text-gray-900 mb-3"
                >
                  Thanks, we have your details
                </h3>
                <p className="text-gray-500 leading-relaxed">{copy[role].done}</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-white rounded-3xl border border-gray-100 shadow-lg p-7 sm:p-8">
                <fieldset className="mb-6">
                  <legend className={label}>I am a</legend>
                  <div className="grid grid-cols-3 gap-2">
                    {roles.map((r) => (
                      <button
                        key={r.value}
                        type="button"
                        aria-pressed={role === r.value}
                        onClick={() => setRole(r.value)}
                        className={`py-3 px-2 rounded-xl border-2 text-sm font-semibold transition-all duration-150 ${
                          role === r.value
                            ? "border-[#1D4ED8] bg-[#EFF6FF] text-[#1D4ED8]"
                            : "border-gray-200 text-gray-600 hover:border-gray-300"
                        }`}
                      >
                        {r.label}
                      </button>
                    ))}
                  </div>
                </fieldset>

                {[
                  { key: "name", label: "Full name", type: "text", icon: User, placeholder: "Your full name", required: true },
                  { key: "email", label: "Email address", type: "email", icon: Mail, placeholder: "you@email.com", required: true },
                  { key: "phone", label: "Phone or WhatsApp number", type: "tel", icon: Phone, placeholder: "Include your country code", required: true },
                ].map(({ key, label: l, type, icon: Icon, placeholder, required }) => (
                  <div key={key} className="mb-4">
                    <label htmlFor={`f-${key}`} className={label}>
                      {l}
                    </label>
                    <div className="relative">
                      <Icon size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" />
                      <input
                        id={`f-${key}`}
                        type={type}
                        required={required}
                        placeholder={placeholder}
                        value={form[key as keyof typeof form]}
                        onChange={(e) => setForm({ ...form, [key]: e.target.value })}
                        className={input}
                      />
                    </div>
                  </div>
                ))}

                <div className="grid sm:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label htmlFor="f-country" className={label}>
                      Country
                    </label>
                    <div className="relative">
                      <Globe size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" />
                      <select
                        id="f-country"
                        required
                        value={form.country}
                        onChange={(e) => setForm({ ...form, country: e.target.value })}
                        className={`${input} appearance-none text-gray-600`}
                      >
                        <option value="">Select a country</option>
                        {countries.map((c) => (
                          <option key={c}>{c}</option>
                        ))}
                      </select>
                    </div>
                  </div>
                  <div>
                    <label htmlFor="f-city" className={label}>
                      City
                    </label>
                    <div className="relative">
                      <MapPin size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" />
                      <input
                        id="f-city"
                        type="text"
                        placeholder="Your city"
                        value={form.city}
                        onChange={(e) => setForm({ ...form, city: e.target.value })}
                        className={input}
                      />
                    </div>
                  </div>
                </div>

                <div className="mb-6">
                  <label htmlFor="f-message" className={label}>
                    {copy[role].message}
                  </label>
                  <div className="relative">
                    <MessageSquare size={15} className="absolute left-3.5 top-3.5 text-gray-400" />
                    <textarea
                      id="f-message"
                      rows={3}
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      className={`${input} resize-none`}
                    />
                  </div>
                </div>

                {error && (
                  <p role="alert" className="mb-4 text-sm text-red-600">
                    {error}
                  </p>
                )}

                <button
                  type="submit"
                  disabled={sending}
                  className="w-full flex items-center justify-center gap-2 py-3.5 bg-[#1D4ED8] text-white font-semibold rounded-xl hover:bg-[#1e40af] transition-all duration-200 shadow-md hover:shadow-[0_8px_25px_-5px_rgba(29,78,216,0.4)] disabled:opacity-50 disabled:cursor-not-allowed group"
                >
                  {sending ? "Sending…" : copy[role].submit}
                  {!sending && <ArrowRight size={15} className="group-hover:translate-x-0.5 transition-transform" />}
                </button>

                <p className="text-center text-xs text-gray-400 mt-4">
                  We only use your details to contact you about SYNQ RIDE.
                </p>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
