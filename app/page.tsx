import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TrustStrip from "@/components/TrustStrip";
import Problem from "@/components/Problem";
import HowItWorks from "@/components/HowItWorks";
import Comfort from "@/components/Comfort";
import Safety from "@/components/Safety";
import Routes from "@/components/Routes";
import Driver from "@/components/Driver";
import Waitlist from "@/components/Waitlist";
import FAQ from "@/components/FAQ";
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
    <Problem />
    <HowItWorks />
    <Comfort />
    <Safety />
    <Routes />
    <Driver />

    <FAQ />            {/* new */}

    <Waitlist />
     <WhatsAppCTA />    {/* new */}
    <Footer />
  </main>
</>
  );
}
