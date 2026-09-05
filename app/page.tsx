import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import Achievements from "@/components/Achievements";
import Projects from "@/components/Projects";
import SocialMedia from "@/components/SocialMedia";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import BottomNavigation from "@/components/BottomNavigation";

export default function Home() {
  return (
    <main className="min-h-screen w-full overflow-x-hidden pb-16">
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Education />
      <Achievements />
      <Projects />
      <SocialMedia />
      <FAQ />
      <Contact />
      <BottomNavigation />
    </main>
  );
}
