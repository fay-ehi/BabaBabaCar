import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TrustStrip from "@/components/TrustStrip";
import Model from "@/components/Model";
import HowItWorks from "@/components/HowItWorks";
import Fleet from "@/components/Fleet";
import Plans from "@/components/Plans";
import Markets from "@/components/Markets";
import Requirements from "@/components/Requirements";
import Partners from "@/components/Partners";
import FAQ from "@/components/FAQ";
import Apply from "@/components/Apply";
import WhatsAppCTA from "@/components/WhatsAppCTA";
import PageLoader from "@/components/PageLoader";
import FloatingBar from "@/components/FloatingBar";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <PageLoader />
      <FloatingBar />
      <main className="overflow-x-hidden">
        <Navbar />
        <Hero />
        <TrustStrip />
        <Model />
        <HowItWorks />
        <Fleet />
        <Plans />
        <Markets />
        <Requirements />
        <Partners />
        <FAQ />
        <Apply />
        <WhatsAppCTA />
        <Footer />
      </main>
    </>
  );
}
