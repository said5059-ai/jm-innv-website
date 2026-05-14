import PromoBar from "@/components/PromoBar";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Projects from "@/components/Projects";
import Stats from "@/components/Stats";
import EnterpriseCTA from "@/components/EnterpriseCTA";

export default function Home() {
  return (
    <>
      <div className="bg-[#f7fbff]">
        <PromoBar />
        <Navbar />
        <Hero />
        <Stats />
      </div>

      <Services />
      <Projects />
      <EnterpriseCTA />
    </>
  );
}