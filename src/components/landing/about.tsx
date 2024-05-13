import React from "react";
import style from "@/styles/landing/About.module.scss";

function About() {
  return (
    <section className="container">
      <div className={style.about}>
        <div className="contentLeft">
          <img src="./icons/consultsAbout.png" alt="" />
        </div>
        <div className={style.contentRight}>
          <small className={style.titleHeader}>About our company</small>
          <h2 className={style.title}>
            Powerful Solution For Your Business Growth
          </h2>
          <p className={style.description}>
            We excel in providing top-tier GMP/GLP audits, strategic consulting,
            and investment solutions tailored to the pharmaceutical and
            biotechnology sectors.
          </p>
          <div className={style.contentAbout}>
            <div className={style.aboutLeft}>
              <img src="./icons/keep.png" alt="" />
            </div>
            <div className={style.aboutRight}>
              <h3 className={style.title}>Keep your systems in check</h3>
              <p className={style.description}>
                We provide a comprehensive range of GMP/GLP audits to ensure
                your systems are in compliance with the latest regulations.
              </p>
            </div>
          </div>
          <div className={style.contentAbout}>
            <div className={style.aboutLeft}>
              <img src="./icons/proactive.png" alt="" />
            </div>
            <div className={style.aboutRight}>
              <h3 className={style.title}>Proactive consulting</h3>
              <p className={style.description}>
                Our team of experts will provide you with the strategic
                consulting you need to take your business to the next level.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
