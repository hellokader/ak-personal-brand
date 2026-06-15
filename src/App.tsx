import { useEffect } from "react";
import TopBar from "./components/TopBar";
import Hero from "./components/Hero";
import LogoStrip from "./components/LogoStrip";
import StatsBand from "./components/StatsBand";
import About from "./components/About";
import Services from "./components/Services";
import CaseStudies from "./components/CaseStudies";
import Process from "./components/Process";
import Testimonials from "./components/Testimonials";
import Tools from "./components/Tools";
import Writing from "./components/Writing";
import Booking from "./components/Booking";
import Footer from "./components/Footer";

export default function App() {
  // Scroll-reveal: add .in class when .reveal elements enter viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );

    document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <TopBar />
      <main>
        <Hero />
        <LogoStrip />
        <StatsBand />
        <About />
        <Services />
        <CaseStudies />
        <Process />
        <Testimonials />
        <Tools />
        <Writing />
        <Booking />
      </main>
      <Footer />
    </>
  );
}
