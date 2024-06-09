import React from "react";
import styles from "./usercalendar.module.css";
import { useTranslation } from "react-i18next";
import BookingCard from "../BookingCard/BookingCard";
import ExpertTabs from "../ExpertTabs/ExpertTabs";

const UserCalendar = () => {
  const { t } = useTranslation("translation");
  return (
    <div className={styles.ucal}>
      <h1 className={styles.ucal_heading}>
        {t("page_home.meets_content.heading")}
      </h1>
      <div className={styles.ucal_container}>
        <ExpertTabs />
      </div>
    </div>
  );
};

export default UserCalendar;
