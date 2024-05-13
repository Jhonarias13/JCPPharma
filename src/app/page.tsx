import "../styles/globals.scss";

import Navbar from "@/components/navbar";
import Hero from "@/components/landing/hero";
import Brands from "@/components/landing/brands";
import Services from "@/components/landing/services";
import About from "@/components/landing/about";
import Contact from "@/components/landing/contact";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <>
      <main>
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
