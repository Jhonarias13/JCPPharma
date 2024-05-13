import styles from "@/styles/footer.module.scss"
import logoWhite from "../../public/icons/logo-white.svg"
import emailIcon from "../../public/icons/email-icon.svg"
import phoneIcon from "../../public/icons/phone-icon.svg"

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.topFooter}>
          <div className={styles.brand}>
            <div className={styles.logo}>
              <img src={logoWhite.src} alt="jcppharma logo white" />
            </div>
            <p className={styles.brandDescription}>
              We are a leader in providing specialized GMP/GLP audit services, strategic consulting and investment solutions focused on the pharmaceutical and biotech industry.
            </p>
          </div>

          <div className={styles.containerBoxLinks}>
            <div className={styles.boxLinks}>
              <h6 className={styles.titleLinks}>Our Company</h6>
              <ul className={styles.links}>
                <li className={styles.link}>
                  <a href="#home">
                    Home
                  </a>
                </li>
                <li className={styles.link}>
                  <a href="#about">
                    Why Choose us
                  </a>
                </li>
                <li className={styles.link}>
                  <a href="services">Services</a></li>
              </ul>
            </div>
            <div className={styles.boxLinks}>
              <h6 className={styles.titleLinks}>Services</h6>
              <ul className={styles.links}>
                <li className={styles.link}>Auditing</li>
                <li className={styles.link}>Consulting</li>
                <li className={styles.link}>Investments</li>
              </ul>
            </div>
          </div>

          <div className={styles.containerBoxLinksContact}>
            <div className={styles.boxLinks}>
              <h6 className={styles.titleLinks}>Let’s talk & Grow Your <br />
                Business Level</h6>
              <ul className={styles.links}>
                <li className={styles.link}>
                  <img src={emailIcon.src} alt="phone icon" />
                  <p> business@jcppharma.co </p>
                </li>
                <li className={styles.link}>
                  <img src={phoneIcon.src} alt="email icon" />
                  <p> +1 (949) 555-0123 </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className={styles.subFooter}>
          <div className={styles.boxFooter}>
            <p>Copyright 2024 by JCP Pharma. All Rights Reserved.</p>
            <div className={styles.terms}>
              <a className={styles.term}>Terms & conditions</a>
              <a className={styles.term}>Privacy & Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
