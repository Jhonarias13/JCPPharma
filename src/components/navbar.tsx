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
          <img
            className={styles.logoImg}
            src="/icons/logo-green.svg"
            alt="logo"
          />
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
            <svg
              className={styles.svgIcon}
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M18.3332 10C18.3327 7.79002 17.4546 5.67066 15.8919 4.10795C14.3292 2.54524 12.2098 1.66713 9.99984 1.66669V3.33335C11.3182 3.33365 12.607 3.72472 13.7032 4.45713C14.7995 5.18955 15.6541 6.23046 16.159 7.44835C16.4941 8.25733 16.6666 9.12439 16.6665 10H18.3332ZM1.6665 8.33335V4.16669C1.6665 3.94567 1.7543 3.73371 1.91058 3.57743C2.06686 3.42115 2.27882 3.33335 2.49984 3.33335H6.6665C6.88752 3.33335 7.09948 3.42115 7.25576 3.57743C7.41204 3.73371 7.49984 3.94567 7.49984 4.16669V7.50002C7.49984 7.72103 7.41204 7.933 7.25576 8.08928C7.09948 8.24556 6.88752 8.33335 6.6665 8.33335H4.99984C4.99984 10.1015 5.70222 11.7972 6.95246 13.0474C8.2027 14.2976 9.89839 15 11.6665 15V13.3334C11.6665 13.1123 11.7543 12.9004 11.9106 12.7441C12.0669 12.5878 12.2788 12.5 12.4998 12.5H15.8332C16.0542 12.5 16.2661 12.5878 16.4224 12.7441C16.5787 12.9004 16.6665 13.1123 16.6665 13.3334V17.5C16.6665 17.721 16.5787 17.933 16.4224 18.0893C16.2661 18.2456 16.0542 18.3334 15.8332 18.3334H11.6665C6.144 18.3334 1.6665 13.8559 1.6665 8.33335Z"
                fill="currentColor"
              />
              <path
                d="M14.6192 8.08667C14.8707 8.69319 15.0001 9.34338 15 10H13.5C13.5001 9.54034 13.4097 9.08517 13.2338 8.66048C13.0579 8.23579 12.8001 7.84991 12.4751 7.52488C12.1501 7.19986 11.7642 6.94205 11.3395 6.7662C10.9148 6.59035 10.4597 6.49989 10 6.5V5C10.9889 5.00005 11.9555 5.29333 12.7777 5.84275C13.5999 6.39217 14.2408 7.17306 14.6192 8.08667Z"
                fill="currentColor"
              />
            </svg>
            +1 (949) 555-0123
          </a>
          <button className={styles.buttonContactForm}>Contact Us</button>
        </div>
      </div>
      <div className={styles.optionContactUs}>
        <a className={styles.buttonContactNumber} href="#">
          <svg
            className={styles.svgIcon}
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M18.3332 10C18.3327 7.79002 17.4546 5.67066 15.8919 4.10795C14.3292 2.54524 12.2098 1.66713 9.99984 1.66669V3.33335C11.3182 3.33365 12.607 3.72472 13.7032 4.45713C14.7995 5.18955 15.6541 6.23046 16.159 7.44835C16.4941 8.25733 16.6666 9.12439 16.6665 10H18.3332ZM1.6665 8.33335V4.16669C1.6665 3.94567 1.7543 3.73371 1.91058 3.57743C2.06686 3.42115 2.27882 3.33335 2.49984 3.33335H6.6665C6.88752 3.33335 7.09948 3.42115 7.25576 3.57743C7.41204 3.73371 7.49984 3.94567 7.49984 4.16669V7.50002C7.49984 7.72103 7.41204 7.933 7.25576 8.08928C7.09948 8.24556 6.88752 8.33335 6.6665 8.33335H4.99984C4.99984 10.1015 5.70222 11.7972 6.95246 13.0474C8.2027 14.2976 9.89839 15 11.6665 15V13.3334C11.6665 13.1123 11.7543 12.9004 11.9106 12.7441C12.0669 12.5878 12.2788 12.5 12.4998 12.5H15.8332C16.0542 12.5 16.2661 12.5878 16.4224 12.7441C16.5787 12.9004 16.6665 13.1123 16.6665 13.3334V17.5C16.6665 17.721 16.5787 17.933 16.4224 18.0893C16.2661 18.2456 16.0542 18.3334 15.8332 18.3334H11.6665C6.144 18.3334 1.6665 13.8559 1.6665 8.33335Z"
              fill="currentColor"
            />
            <path
              d="M14.6192 8.08667C14.8707 8.69319 15.0001 9.34338 15 10H13.5C13.5001 9.54034 13.4097 9.08517 13.2338 8.66048C13.0579 8.23579 12.8001 7.84991 12.4751 7.52488C12.1501 7.19986 11.7642 6.94205 11.3395 6.7662C10.9148 6.59035 10.4597 6.49989 10 6.5V5C10.9889 5.00005 11.9555 5.29333 12.7777 5.84275C13.5999 6.39217 14.2408 7.17306 14.6192 8.08667Z"
              fill="currentColor"
            />
          </svg>
          +1 (949) 555-0123
        </a>
        <a className={styles.buttonContactForm} href="#">
          Contact Us
        </a>
      </div>
    </nav>
  );
}
