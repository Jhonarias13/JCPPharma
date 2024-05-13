import "../styles/globals.scss";

import Navbar from "@/components/Navbar";
import Hero from "@/components/landing/Hero";
import Brands from "@/components/landing/Brands";
import Services from "@/components/landing/Services";
import About from "@/components/landing/About";
import Contact from "@/components/landing/Contact";
import Footer from "@/components/Footer";


export default function Home() {
  return (
    <>
      <main className="container">
        <Navbar />
        <Hero />
        <Brands />
        <Services />
        <About />
        <Contact />
        <Footer />
      </main>
    </>
  );
}
