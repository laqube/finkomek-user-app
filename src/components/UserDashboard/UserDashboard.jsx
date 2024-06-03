import React from "react";
import styles from "./userdashboard.module.css";
import { useTranslation } from "react-i18next";

const UserDashboard = ({ item }) => {
  const { t } = useTranslation("translation");
  const { fname } = item;
  return (
    <div className={styles.dashb_henlo}>
      <img
        className={styles.dashb_henlo_pic}
        src="/assets/dashboard_guy.svg"
        alt="guy"
      />
      <h1 className={styles.dashb_henlo_message}>
        {t("page_home.dashboard_content.Hello")}
        {fname}! {t("page_home.dashboard_content.Sup")}
      </h1>
    </div>
  );
};

export default UserDashboard;
