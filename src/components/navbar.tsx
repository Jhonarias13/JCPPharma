"use client";

import React, { useState } from "react";
import styles from "./../styles/navbar.module.scss";
import { useRouter, usePathname, useSearchParams } from "next/navigation";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const router = useRouter();
  const pathname = usePathname();
  // const searchParams = useSearchParams();

  const isActive = (path: string) => {
    return pathname === path ? styles.active : "";
  };

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
        <a href="/" className={`${isActive("/") ? styles.active : ""}`}>
          Home
        </a>
        <a href="#about">Get to know us</a>
        <a href="#services">Services</a>
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
