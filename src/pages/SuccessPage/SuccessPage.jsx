import React from "react";
import styles from "./successpage.module.css";
import { useTranslation } from "react-i18next";
import Navigation from "../../components/Navigation/Navigation";
import Footer from "../../components/Footer/Footer";
import { Link } from "react-router-dom";

const SuccessPage = () => {
  const { t } = useTranslation("translation");
  return (
    <div className={styles.page_wrapper}>
      <Navigation />
      <div className={styles.page_container}>
        <div className={styles.success_container}>
          <img className={styles.success_icon} src="/assets/success_icon.svg" />
          <h1 className={styles.success_heading}>
            {t("page_success_sim.heading")}{" "}
          </h1>
          <p className={styles.success_message}>{t("page_success_sim.msg")} </p>

          <Link to="/user" className={styles.custom_link}>
            <button className={styles.success_button}>
              {t("page_success_sim.button")}
            </button>
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default SuccessPage;
