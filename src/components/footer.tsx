import styles from "@/styles/Footer.module.scss"
import logoWhite from "../../public/icons/logo-white.svg"
import Image from "next/image";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.topFooter}>
        <div className={styles.brand}>
          <div className={styles.logo}>
            <Image src={logoWhite.src} alt="jcppharma logo white" height={500} width={500} />
          </div>
          <p className={styles.branddescription}>
            We are a leader in providing specialized GMP/GLP audit services, strategic consulting and investment solutions focused on the pharmaceutical and biotech industry.
          </p>
        </div>

        <div className={styles.containerBoxLinks}>
          <div className={styles.boxLinks}>
            <h6 className={styles.titleLinks}>Our Company</h6>
            <ul className={styles.links}>
              <li className={styles.link}>Home</li>
              <li className={styles.link}>Why Choose us</li>
              <li className={styles.link}>Services</li>
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
            <h6 className={styles.titleLinks}>Contact</h6>
            <ul className={styles.links}>
              <li className={styles.link}>
                <i className="fi fi-rr-email"></i>
                <p> business@jcppharma.co </p>
              </li>
              <li className={styles.link}>
                <i className="fi fi-rr-phone"></i>
                <p> +1 (949) 555-0123 </p>
              </li>
            </ul>
          </div>
        </div>

        <div className={styles.subFooter}>
          <div className={styles.br}></div>
          <div className={styles.boxFooter}>
            <p>Copyright 2024 by JCP Pharma. All Rights Reserved.</p>
            <div className={styles.terms}>
              <p className={styles.term}>Terms & conditions</p>
              <p className={styles.term}>Privacy & Policy</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
