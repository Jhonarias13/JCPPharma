import React from "react";

import style from "@/styles/landing/services.module.scss";

function Services() {
  return (
    <section className={style.services}>
      <div className="container">
        <div className={style.containerHeader}>
          <small className={style.titleHeader}>Our Services</small>
          <div className={style.contentHeader}>
            <h2 className={style.title}>
              We provide useful solution for your business
            </h2>
            <p className={style.description}>
              We are committed to providing our customers with exceptional service
              while offering our employees the best training.
            </p>
          </div>
        </div>
        <div className={style.contentBody}>
          <div className={style.card}>
            <h1>GMP & GLP Consulting</h1>
            <p>
              Ensure excellence and regulatory compliance with our expert services in Good Manufacturing and Laboratory Practices. We raise standards, mitigate risks.
            </p>
            <a href="#">Why choose us →</a>
          </div>
          <div className={`${style.card}`}>
            <h1>Specialized Advisory</h1>
            <p>
              Transform challenges into opportunities with our customized pharmaceutical advisory services. Expertise that drives innovation and profitability.
            </p>
            <a href="#">Why choose us →</a>
          </div>
          <div className={style.card}>
            <h1>Strategic Investment</h1>
            <p>
              Enhance your portfolio with smart investments in the pharmaceutical sector. We connect opportunities with capital, driving growth and innovation.
            </p>
            <a href="#">Why choose us →</a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
