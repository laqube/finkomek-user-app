import React, { useState } from "react";
import styles from "./navigation.module.css";
import { Link, useLocation } from "react-router-dom";

const Navigation = () => {
  const location = useLocation();
  const [activeLink, setActiveLink] = useState(location.pathname);
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
            <Link
              to="/user"
              className={`${styles.navbar_li} ${
                activeLink === "/user" ? styles.active : ""
              }`}
              onClick={() => setActiveLink("/user")}
            >
              Жеке
            </Link>
          </li>
          <li>
            <Link
              to="/courses"
              className={`${styles.navbar_li} ${
                activeLink === "/courses" ? styles.active : ""
              }`}
              onClick={() => setActiveLink("/courses")}
            >
              Курстар
            </Link>
          </li>
          <li>
            <Link
              to="/experts"
              className={`${styles.navbar_li} ${
                activeLink === "/experts" ? styles.active : ""
              }`}
              onClick={() => setActiveLink("/experts")}
            >
              Консультация
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navigation;
