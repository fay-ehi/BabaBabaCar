import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Model from "@/components/Model";
import Pathways from "@/components/Pathways";
import HowItWorks from "@/components/HowItWorks";
import Fleet from "@/components/Fleet";
import Markets from "@/components/Markets";
import FAQ from "@/components/FAQ";
import Apply from "@/components/Apply";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="overflow-x-hidden">
        <Hero />
        <Model />
        <Pathways />
        <HowItWorks />
        <Fleet />
        <Markets />
        <FAQ />
        <Apply />
      </main>
      <Footer />
    </>
  );
}
