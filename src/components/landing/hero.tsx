import styles from "@/styles/landing/Hero.module.scss";

function Hero() {
  return (
    <div className="container">
      <div className={styles.divisor}>
        <div className={styles.contentLeft}>
          <h1 className={styles.title}>
            Ensuring Quality & Compliance Excellence
          </h1>
          <p className={styles.description}>
            Discover GMP/GLP Audit, Strategic Consulting and Investment
            Solutions that Drive Success.
          </p>
          <button className={styles.buttonContactForm}>
            Get free consultation
          </button>
        </div>
        <div className={styles.contentRight}>
          <img
            className={styles.imageConsultorHero}
            src="/icons/imageConsultorHero.png"
            alt="hero"
          />
        </div>
      </div>
    </div>
  );
}

export default Hero;
