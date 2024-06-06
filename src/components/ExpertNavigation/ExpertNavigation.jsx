import React from "react";
import styles from "./expertnavigation.module.css";
import { useDispatch } from "react-redux";
import { logout } from "../../slices/userSlice";
import { useLanguage } from "../../LanguageContext";
import { useTranslation } from "react-i18next";
import i18n from "../../i18";

const ExpertNavigation = () => {
  const { t } = useTranslation("translation");
  const { changeLanguage } = useLanguage();
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
        <a href="https://finkomek-landing.vercel.app/">
          <img
            className={styles.navbar_logo}
            alt="logo"
            src="/assets/logo.svg"
          />
        </a>
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
  );
};

export default ExpertNavigation;
