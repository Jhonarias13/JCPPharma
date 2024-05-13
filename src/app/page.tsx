import React from "react";
import Hero from "@/components/navbar";
import "../styles/globals.scss";

export default function Home() {
  return (
    <>
      <Hero />
      <main className="container">
        <section>
          <h2>Our Services</h2>
          <p>
            We offer a wide range of services to meet the needs of our clients.
          </p>
        </section>
        <section>
          <h2>Our Team</h2>
          <p>
            Our team is made up of professionals with years of experience in the
            industry.
          </p>
        </section>
        <section>
          <h2>Contact Us</h2>
          <p>
            If you have any questions or would like to know more about our
            services, please contact us.
          </p>
        </section>
      </main>
    </>
  );
}
