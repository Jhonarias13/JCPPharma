import style from "@/styles/landing/contact.module.scss";

function Contact() {
  return (
    <section id="contact" className={style.contact}>
      <div className={`${style.divider} container`}>
        <div className={style.contactInfo}>
          <div className={style.box}>
            <h3 className={style.title}>
              Ensuring Quality & Compliance Excellence
            </h3>
            <p className={style.description}>
              Partner with us for top-tier GMP/GLP audits, strategic consulting, and investment <br /> insights. Let's propel your business into the future. <strong>Reach out now to start the <br /> conversation.</strong>
            </p>
          </div>
          <button className={style.buttonContactForm}>
            Get free consultation
          </button>
        </div>
        <div className={style.contactImage}>
          <img src="/icons/contactConsult.png" alt="Consultor" />
        </div>
      </div>
    </section>
  );
}

export default Contact;
