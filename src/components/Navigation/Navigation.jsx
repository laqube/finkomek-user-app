import React, { useState } from "react";
import styles from "./navigation.module.css";
import { Link, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "../../slices/userSlice";
import { useLanguage } from "../../LanguageContext";
import { useTranslation } from "react-i18next";
import i18n from "../../i18";

const Navigation = () => {
  const { t } = useTranslation("translation");
  const location = useLocation();
  const { changeLanguage } = useLanguage();
  const [activeLink, setActiveLink] = useState(location.pathname);
  const dispatch = useDispatch();
  const handleLogout = (e) => {
    e.preventDefault();
    dispatch(logout());
  };
  const handleLanguageChange = (event) => {
    const selectedLanguage = event.target.value;
    changeLanguage(selectedLanguage);
    i18n.changeLanguage(selectedLanguage);
    console.log("language is set to ", selectedLanguage);
  };

  return (
    <div className={styles.navbar_container}>
      <div className={styles.navbar_content}>
        <div className={styles.navbar_navigation}>
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
                {t("nav.main")}
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
                {t("nav.courses")}
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
                {t("nav.experts")}
              </Link>
            </li>
          </ul>
        </div>
        <div className={styles.navbar_settings}>
          <select
            name="locales"
            id="lang"
            className={styles.navbar_select}
            onChange={handleLanguageChange}
          >
            <option value="kz" className={styles.navbar_option}>
              Қаз
            </option>
            <option value="ru" className={styles.navbar_option}>
              Рус
            </option>
          </select>
          <img
            className={styles.user_card_icon}
            src="/assets/logout_icon.svg"
            onClick={handleLogout}
          />
        </div>
      </div>
    </div>
  );
};

export default Navigation;
