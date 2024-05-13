"use client";

import React, { useState } from "react";
import styles from "./../styles/Navbar.module.scss";
import { useRouter, usePathname, useSearchParams } from "next/navigation";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const isActive = (path: string) => {
    return pathname === path ? styles.active : "";
  };

  return (
    <div className="container">
      <nav className={styles.navbar}>
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
          <a href="/">Get to know us</a>
          <a href="/">Services</a>
          <div className={styles.optionContactUs}>
            <button>Contact Us</button>
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
    </div>
  );
}
