import style from "@/styles/landing/contact.module.scss";

function Contact() {
  return (
    <section className={style.contact}>
      <div className={`${style.divider} container`}>
        <div className={style.contactInfo}>
          <h1 className={style.title}>
            Ensuring Quality & Compliance Excellence
          </h1>
          <p className={style.description}>
            Discover GMP/GLP Audit, Strategic Consulting and Investment
            Solutions that Drive Success.
          </p>
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
