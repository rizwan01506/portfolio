import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import SocialMedia from "@/components/SocialMedia";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import BottomNavigation from "@/components/BottomNavigation";

export default function Home() {
  return (
    <main className="min-h-screen w-full overflow-x-hidden">
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <SocialMedia />
      <Contact />
      <Footer />
      <BottomNavigation />
    </main>
  );
}
