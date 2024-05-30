import React from "react";
import styles from "./footer.module.css";

const Footer = () => {
  return (
    <div className={styles.footer_container}>
      <a className={styles.content_container} href="https://github.com/laqube">
        <img className={styles.github_icon} src="/assets/github-mark.svg" />
        <p className={styles.footer_text}>Developed by laqube</p>
      </a>
    </div>
  );
};

export default Footer;
