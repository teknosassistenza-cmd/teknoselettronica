import { useEffect } from "react";

import { Navbar } from "./components/Navbar";
import { Hero } from "./sections/Hero";
import { Services } from "./sections/Services";
import { Centraline } from "./sections/Centraline";
import { PostTrattamento } from "./sections/PostTrattamento";
import { Clima } from "./sections/Clima";
import { Sectors } from "./sections/Sectors";
import { Reviews } from "./sections/Reviews";
import { About } from "./sections/About";
import { Contact } from "./sections/Contact";
import { Footer } from "./sections/Footer";
import { WhatsAppButton } from "./components/WhatsAppButton";
import { Faq } from "./sections/Faq";

export default function App() {
  useEffect(() => {
    // Smooth scroll per tutti i link con href che inizia per "#"
    const handler = (e: Event) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;

      // Trova l'anchor più vicino (nel caso clicchi su span/testo dentro <a>)
      const anchor = target.closest("a") as HTMLAnchorElement | null;
      if (!anchor) return;

      const href = anchor.getAttribute("href");
      if (!href || !href.startsWith("#")) return;

      const id = href.slice(1);
      const el = document.getElementById(id);
      if (!el) return;

      e.preventDefault();

      // Altezza approssimativa della navbar
      const headerOffset = 80;
      const rect = el.getBoundingClientRect();
      const scrollTop = window.scrollY + rect.top - headerOffset;

      window.scrollTo({
        top: scrollTop,
        behavior: "smooth",
      });
    };

    document.addEventListener("click", handler);
    return () => document.removeEventListener("click", handler);
  }, []);

  return (
    <div className="relative min-h-screen text-white overflow-hidden">
      {/* VIDEO DI SFONDO PER TUTTO IL SITO */}
      <video
        className="fixed inset-0 w-full h-full object-cover -z-30 opacity-65"
        autoPlay
        muted
        loop
        playsInline
        src="/video/bg-teknos.mp4"
      />

      {/* GRADIENT LEGGERO SOPRA IL VIDEO */}
      <div className="fixed inset-0 bg-gradient-to-br from-[#061623e0] to-[#02060be0] -z-20" />

      {/* OVERLAY CIRCUITI SU TUTTO IL SITO */}
      <div className="fixed inset-0 circuit-overlay pointer-events-none -z-10" />

      {/* CONTENUTO DEL SITO */}
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <Services />
        <Centraline />
        <PostTrattamento />
        <Clima />
        <Sectors />
        <Faq />
        <Reviews />
        <About />
        <Contact />
        <Footer />
        <WhatsAppButton />
      </div>
    </div>
  );
}
