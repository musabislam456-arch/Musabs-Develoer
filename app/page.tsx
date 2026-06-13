import Navbar from "@/components/Navbar";
import PremiumHero from "@/components/PremiumHero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import FeaturedProjects from "@/components/FeaturedProjects";
import Services from "@/components/Services";
import WhyChooseMe from "@/components/WhyChooseMe";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import FloatingBackToTop from "@/components/FloatingBackToTop";
import AnimatedStats from "@/components/AnimatedStats";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <PremiumHero />
        <About />
        <AnimatedStats />
        <Skills />
        <FeaturedProjects />
        <Services />
        <WhyChooseMe />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <FloatingBackToTop />
      <WhatsAppButton />
    </>
  );
}
