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
import HeroEffects from "@/components/HeroEffects";

export default function Home() {
  return (
    <>
      <div className="bg-[#f7fbff]">
        <PromoBar />
        <Navbar />

        <section className="relative overflow-hidden bg-[url('/hero-bg.jpg')] bg-cover bg-center">
  <div className="absolute inset-0 bg-white/88 backdrop-blur-[2px]" />
  <HeroEffects />

  <div className="relative">
    <Hero />
  </div>
</section>
      </div>

      <Services />

      <Projects />

      <Stats />

      <Process />

      <ClientsStrip />

      <TechStack />

      <Testimonials />

      <Contact />

      <EnterpriseCTA />
    </>
  );
}