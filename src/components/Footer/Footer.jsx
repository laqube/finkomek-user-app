import React from "react";
import styles from "./footer.module.css";

const Footer = () => {
  return (
    <div className={styles.footer_container}>
      <div className={styles.footer_logo_wrapper}>
        <img src="/assets/logo.png" alt="logo" className={styles.footer_logo} />
      </div>
      <p>Осыны Мирас Жазған</p>
    </div>
  );
};

export default Footer;
