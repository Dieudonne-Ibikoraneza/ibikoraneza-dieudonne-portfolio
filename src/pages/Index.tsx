import { StarField } from "@/components/StarField";
import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { TechStack } from "@/components/TechStack";
import { Projects } from "@/components/Projects";
import { Contact } from "@/components/Contact";
import { FloatingDock } from "@/components/FloatingDock";
import "aos/dist/aos.css";
import Aos from "aos";
import { useEffect } from "react";

const Index = () => {
  useEffect(() => {
    Aos.init({
      duration: 1000,
      once: false,
      offset: 100,
      mirror: true,
    });
  }, []);

  return (
    <div className="relative min-h-screen bg-opacity-[0.15] bg-white font-['Jetbrains_Mono'] overflow-hidden">
      <StarField />
      <Navigation />
      <FloatingDock show={false} />
      <main>
        <Hero />
        <TechStack />
        <Projects />
        <Contact />
      </main>
    </div>
  );
};

export default Index;
