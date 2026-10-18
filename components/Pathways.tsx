"use client";
import { motion } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";
import CarArt from "./CarArt";

function pick(role: "driver" | "supplier" | "investor") {
  window.dispatchEvent(new CustomEvent("synq:role", { detail: role }));
}

export default function Pathways() {
  return (
    <section id="partners" className="bg-[#F5F6F8] py-20 sm:py-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="max-w-2xl mb-14">
          <h2 className="text-3xl sm:text-5xl font-semibold tracking-tight text-gray-900 leading-[1.1] text-balance mb-4">
            Two ways to work with us
          </h2>
          <p className="text-lg text-gray-500 leading-relaxed">
            Drive a car you don&apos;t have to buy, or put your own vehicles to work.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Drivers */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.45 }}
            className="rounded-3xl bg-white overflow-hidden flex flex-col"
          >
            <div className="bg-[#EFF6FF] px-10 pt-12 pb-6">
              <CarArt variant="sedan" className="w-full max-w-[340px] mx-auto h-auto" />
            </div>
            <div className="p-8 sm:p-10 flex flex-col flex-1">
              <p className="text-sm font-semibold text-[#1D4ED8] mb-2">For drivers</p>
              <h3 className="text-2xl sm:text-3xl font-semibold text-gray-900 mb-3">Drive with SYNQ RIDE</h3>
              <p className="text-gray-500 leading-relaxed mb-6">
                Get behind the wheel of a vehicle you don&apos;t have to buy. You pay weekly, and rates are confirmed
                when you&apos;re approved.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  "Weekly rental: hand the car back when you want to stop",
                  "Drive-to-own: your payments go toward owning the car",
                ].map((t) => (
                  <li key={t} className="flex items-start gap-3 text-gray-700">
                    <span className="mt-0.5 w-5 h-5 rounded-full bg-[#1D4ED8] flex items-center justify-center flex-shrink-0">
                      <Check size={12} className="text-white" />
                    </span>
                    {t}
                  </li>
                ))}
              </ul>
              <a
                href="#apply"
                onClick={() => pick("driver")}
                className="mt-auto self-start inline-flex items-center gap-2 px-6 py-3.5 bg-[#1D4ED8] text-white font-semibold rounded-xl hover:bg-[#1e40af] transition-colors group"
              >
                Apply to drive
                <ArrowRight size={16} className="group-hover:translate-x-0.5 transition-transform" />
              </a>
            </div>
          </motion.div>

          {/* Partners */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.45, delay: 0.08 }}
            className="rounded-3xl bg-white overflow-hidden flex flex-col"
          >
            <div className="bg-[#FFFBEB] px-10 pt-12 pb-6 flex items-end justify-center gap-2">
              <CarArt variant="suv" color="#0F172A" className="w-1/2 max-w-[190px] h-auto" />
              <CarArt variant="compact" color="#D97706" className="w-1/2 max-w-[190px] h-auto" />
            </div>
            <div className="p-8 sm:p-10 flex flex-col flex-1">
              <p className="text-sm font-semibold text-[#1D4ED8] mb-2">For vehicle partners</p>
              <h3 className="text-2xl sm:text-3xl font-semibold text-gray-900 mb-3">Put your vehicles to work</h3>
              <p className="text-gray-500 leading-relaxed mb-8">
                Dealers, leasing companies and fleet owners in Poland and the USA can place used vehicles with us. We put
                approved drivers behind the wheel and keep the cars serviced and working. Terms are agreed directly with
                you.
              </p>
              <div className="mt-auto flex flex-wrap items-center gap-x-6 gap-y-3">
                <a
                  href="#apply"
                  onClick={() => pick("supplier")}
                  className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#1D4ED8] text-white font-semibold rounded-xl hover:bg-[#1e40af] transition-colors group"
                >
                  Become a vehicle partner
                  <ArrowRight size={16} className="group-hover:translate-x-0.5 transition-transform" />
                </a>
                <a
                  href="#apply"
                  onClick={() => pick("investor")}
                  className="text-sm font-semibold text-gray-600 hover:text-gray-900 underline underline-offset-4"
                >
                  Investor? Talk to us
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
