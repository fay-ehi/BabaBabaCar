"use client";
import { motion } from "framer-motion";

const steps = [
  { title: "Apply", body: "Tell us your country, city and the platform you want to drive for." },
  { title: "Get verified", body: "We check your licence, ID and any documents your city requires." },
  { title: "Choose your car", body: "Pick from the vehicles available near you and agree a weekly plan." },
  { title: "Link your apps", body: "We help you add the car to your Uber, Bolt or other driver account." },
  { title: "Drive and earn", body: "Pay weekly from your earnings. Hand the car back, or keep going toward owning it." },
];

export default function HowItWorks() {
  return (
    <section id="how" className="bg-[#FAFAFA] py-20 sm:py-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="max-w-2xl mb-14">
          <h2
            className="text-[2rem] sm:text-[2.6rem] font-extrabold text-gray-900 leading-[1.1] text-balance mb-4"
            style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}
          >
            From application to first trip in five steps
          </h2>
          <p className="text-gray-500 text-lg leading-relaxed">
            We handle the car, the paperwork and the setup. You handle the driving.
          </p>
        </div>

        <ol className="grid md:grid-cols-5 gap-x-6 gap-y-10 relative">
          <div className="hidden md:block absolute top-5 left-5 right-5 h-px bg-gray-200" aria-hidden />
          {steps.map((s, i) => (
            <motion.li
              key={s.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.45, delay: i * 0.08 }}
              className="relative flex md:block gap-4"
            >
              <span
                className="relative z-10 w-10 h-10 flex-shrink-0 rounded-full bg-[#1D4ED8] text-white text-sm font-bold flex items-center justify-center ring-8 ring-[#FAFAFA]"
                style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}
              >
                {i + 1}
              </span>
              <div className="md:mt-5">
                <h3
                  className="text-lg font-bold text-gray-900 mb-1.5"
                  style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}
                >
                  {s.title}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed">{s.body}</p>
              </div>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
}
