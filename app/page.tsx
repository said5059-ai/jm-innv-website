import PromoBar from "@/components/PromoBar";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Projects from "@/components/Projects";
import Stats from "@/components/Stats";
import EnterpriseCTA from "@/components/EnterpriseCTA";
import Contact from "@/components/Contact";
import ClientsStrip from "@/components/ClientsStrip";
import Process from "@/components/Process";
import TechStack from "@/components/TechStack";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  return (
    <>
      <div className="bg-[#f7fbff]">
        <PromoBar />
        <Navbar />
        <Hero />
        <Stats />
        <ClientsStrip />
      </div>

      <Services />
      <Process />
      <TechStack />
      <Projects />
      <Testimonials />
      <Contact />
      <EnterpriseCTA />
    </>
  );
}