import React from "react";
import style from "@/styles/landing/about.module.scss";

function About() {
  return (
    <section id="about" className="container">
      <div className={style.about}>
        <div className={style.contentLeft}>
          <img src="./icons/consultsAbout.png" alt="" />
        </div>
        <div className={style.contentRight}>
          <small className={style.titleHeader}>About Our Company</small>
          <h2 className={style.title}>
            Powerful Solution For Your <br /> Business Growth
          </h2>
          <p className={style.description}>
            We excel in providing top-tier GMP/GLP audits, strategic consulting,
            and <br /> investment solutions tailored to the pharmaceutical and
            biotechnology <br /> sectors.
          </p>

          <div className={style.contentAboutBox}>
            <div className={style.contentAbout}>
              <div className={style.aboutLeft}>
                <img src="./icons/keep.png" alt="" />
              </div>
              <div className={style.aboutRight}>
                <h3 className={style.title}>Deep Industry Knowledge</h3>
                <p className={style.description}>
                  Our team of seasoned experts understands the <br /> nuances of regulatory compliance, ensuring you<br /> always stay ahead.
                </p>
              </div>
            </div>
            <div className={style.contentAbout}>
              <div className={style.aboutLeft}>
                <img src="./icons/proactive.png" alt="" />
              </div>
              <div className={style.aboutRight}>
                <h3 className={style.title}>Proactive Partnership</h3>
                <p className={style.description}>
                  We don’t just consult; we collaborate closely with you <br /> to drive innovation and efficiency in your operations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
