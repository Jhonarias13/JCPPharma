import React from "react";
import style from "@/styles/landing/brands.module.scss";

function Brands() {
  return (
    <section className="container">
      <div className={style.brands}>
        <div className={style.brand__logo}>
          <img src="/icons/brand.png" alt="brand1" />
        </div>
        <div className={style.brand__logo}>
          <img src="/icons/brand.png" alt="brand2" />
        </div>
        <div className={style.brand__logo}>
          <img src="/icons/brand.png" alt="brand3" />
        </div>
        <div className={style.brand__logo}>
          <img src="/icons/brand.png" alt="brand4" />
        </div>
        <div className={style.brand__logo}>
          <img src="/icons/brand.png" alt="brand5" />
        </div>
      </div>
    </section>
  );
}

export default Brands;
