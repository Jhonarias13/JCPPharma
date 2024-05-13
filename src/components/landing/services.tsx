import React from "react";

import style from "@/styles/landing/services.module.scss";

function Services() {
  return (
    <section className={style.services}>
      <div className="container">
        <div className={style.contentHeader}>
          <small className={style.titleHeader}>Our Services</small>
          <h2 className={style.title}>
            We provide useful solution for your business
          </h2>
          <p className={style.description}>
            We are committed to providing our customers with exceptional service
            while offering our employees the best training.
          </p>
        </div>
        <div className={style.contentBody}>
          <div className={style.card}>
            <h1>Strategic Business Planning</h1>
            <p>
              Lorem ipsum quis auctor elit sed vulputate mi sit amet mauris
              commodo quis imperdiet massa tincidunt nunc
            </p>
            <a href="#">Why choose us →</a>
          </div>
          <div className={`${style.card}`}>
            <h1>Strategic Business Planning</h1>
            <p>
              Lorem ipsum quis auctor elit sed vulputate mi sit amet mauris
              commodo quis imperdiet massa tincidunt nunc
            </p>
            <a href="#">Why choose us →</a>
          </div>
          <div className={style.card}>
            <h1>Strategic Business Planning</h1>
            <p>
              Lorem ipsum quis auctor elit sed vulputate mi sit amet mauris
              commodo quis imperdiet massa tincidunt nunc
            </p>
            <a href="#">Why choose us →</a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
