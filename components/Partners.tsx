"use client";
import { ArrowRight } from "lucide-react";

function pick(role: "supplier" | "investor") {
  window.dispatchEvent(new CustomEvent("synq:role", { detail: role }));
}

export default function Partners() {
  return (
    <section id="partners" className="bg-[#1D4ED8] py-20 sm:py-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <h2
          className="text-[2rem] sm:text-[2.6rem] font-extrabold text-white leading-[1.1] text-balance mb-4 max-w-2xl"
          style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}
        >
          Have used vehicles or capital? Work with us.
        </h2>
        <p className="text-white/75 text-lg leading-relaxed max-w-2xl mb-12">
          SYNQ RIDE grows by putting more good cars in the hands of approved drivers. There are two ways to help us do
          that.
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="rounded-3xl bg-white p-8 flex flex-col">
            <h3
              className="text-2xl font-bold text-gray-900 mb-3"
              style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}
            >
              Vehicle suppliers
            </h3>
            <p className="text-gray-600 leading-relaxed mb-6">
              Dealers, leasing companies and fleet owners in Poland and the USA can place used vehicles with us. We put
              approved drivers behind the wheel, keep the cars serviced and working, and agree terms with you directly.
            </p>
            <a
              href="#apply"
              onClick={() => pick("supplier")}
              className="mt-auto inline-flex items-center justify-center gap-2 self-start px-6 py-3.5 bg-[#1D4ED8] text-white font-semibold rounded-xl hover:bg-[#1e40af] transition-colors group"
            >
              Become a vehicle partner
              <ArrowRight size={16} className="group-hover:translate-x-0.5 transition-transform" />
            </a>
          </div>

          <div className="rounded-3xl bg-white/10 border border-white/20 p-8 flex flex-col">
            <h3
              className="text-2xl font-bold text-white mb-3"
              style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}
            >
              Investors
            </h3>
            <p className="text-white/80 leading-relaxed mb-6">
              We&apos;re building a fleet in markets where ride-hailing demand already exists. If you want to help fund
              vehicles, we&apos;ll share our plan and how the fleet is managed.
            </p>
            <a
              href="#apply"
              onClick={() => pick("investor")}
              className="mt-auto inline-flex items-center justify-center gap-2 self-start px-6 py-3.5 bg-white text-[#1D4ED8] font-semibold rounded-xl hover:bg-white/90 transition-colors group"
            >
              Talk to us
              <ArrowRight size={16} className="group-hover:translate-x-0.5 transition-transform" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
