import React from "react";
import styles from "./navigation.module.css";
import { Link } from "react-router-dom";

const Navigation = () => {
  const token = localStorage.getItem("token");
  return (
    <div className={styles.navbar_container}>
      <div className={styles.navbar_content}>
        <a href="https://finkomek-landing.vercel.app/">
          <img
            className={styles.navbar_logo}
            alt="logo"
            src="/assets/logo.svg"
          />
        </a>
        <ul className={styles.navbar_ul}>
          <li>
            <Link to="/user" className={styles.navbar_li}>
              {" "}
              Жеке{" "}
            </Link>
          </li>
          <li>
            <Link to="/experts" className={styles.navbar_li}>
              {" "}
              Эксперттер{" "}
            </Link>
          </li>
          <li>
            <Link to="/courses" className={styles.navbar_li}>
              {" "}
              Курстар{" "}
            </Link>
          </li>
          <li>
            <Link to="/calculators" className={styles.navbar_li}>
              {" "}
              Калькуляторлар{" "}
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navigation;
