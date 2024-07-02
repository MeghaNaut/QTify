import React from "react";
import styles from "./HeroSection.module.css";
import Headphone from "../../assets/headphone.svg";

const HeroSection = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.heroImageWrapper}>
        <div className={styles.banner}>
          <h1>100 Thousand Songs, ad-free</h1>
          <h1>Over thousands of podcast episodes</h1>
        </div>
        <div className={styles.imageContainer}>
          <img src={Headphone} alt="Headphone" className={styles.headphoneImage} />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
