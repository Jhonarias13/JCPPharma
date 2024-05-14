"use client";

import React, { useEffect, useState } from "react";
import styles from "./../styles/navbar.module.scss";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentHash, setCurrentHash] = useState("");

  useEffect(() => {
    const updateHash = () => {
      const hash = window.location.hash || "#home";
      setCurrentHash(hash);
    };

    // Set the initial hash
    updateHash();

    // Add event listener for hash changes
    window.addEventListener("hashchange", updateHash);

    // Clean up event listener on component unmount
    return () => {
      window.removeEventListener("hashchange", updateHash);
    };
  }, []);

  const isActive = (path: string) => currentHash === path;

  return (
    <nav className={`${styles.navbar} container`}>
      <div className={styles.logo}>
        <a href="/">
          <img className={styles.logoImg} src="/icons/logo.png" alt="logo" />
        </a>
      </div>
      <div className={styles.menuIcon} onClick={() => setIsOpen(!isOpen)}>
        <img src="/icons/burguer.svg" alt="Menu" />
      </div>
      <div className={`${styles.navMenu} ${isOpen ? styles.show : ""}`}>
        <a href="#home" className={isActive("#home") ? styles.active : ""}>
          Home
        </a>
        <a
          href="#about"
          className={`${isActive("#about") ? styles.active : ""}`}
        >
          Get to know us
        </a>
        <a
          href="#services"
          className={`${isActive("#services") ? styles.active : ""}`}
        >
          Services
        </a>
        <div className={styles.optionContactUs}>
          <a className={styles.buttonContactNumber} href="#">
            +1 (949) 555-0123
          </a>
          <button className={styles.buttonContactForm}>Contact Us</button>
        </div>
      </div>
      <div className={styles.optionContactUs}>
        <a className={styles.buttonContactNumber} href="#">
          +1 (949) 555-0123
        </a>
        <a className={styles.buttonContactForm} href="#">
          Contact Us
        </a>
      </div>
    </nav>
  );
}
