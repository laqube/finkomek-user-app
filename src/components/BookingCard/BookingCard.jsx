import React from "react";
import styles from "./bookingcard.module.css";
import { useTranslation } from "react-i18next";

const BookingCard = () => {
  const { t } = useTranslation("translation");
  return (
    <div className={styles.bookingcard_container}>
      <div className={styles.bc_col_info}>
        <h1 className={styles.bc_info_name}>Expert name</h1>
        <p className={styles.bc_info_topic}>Consultaion topic</p>
        <div className={styles.bc_row_info}>
          <div className={styles.bc_info_item}>
            <img
              alt="icon"
              className={styles.bc_info_icon}
              src="/assets/bc_calendar_icon.svg"
            />
            <p className={styles.bc_info_detail}>date</p>
          </div>
          <div className={styles.bc_info_item}>
            <img
              alt="icon"
              className={styles.bc_info_icon}
              src="/assets/bc_clock_icon.svg"
            />
            <p className={styles.bc_info_detail}>time</p>
          </div>
        </div>
      </div>
      <div className={styles.bc_col_buttons}>
        <button className={styles.bc_button_yes}>
          {t("card_meet.button_connect")}
        </button>
        <button className={styles.bc_button_no}>
          {t("card_meet.button_cancel")}
        </button>
      </div>
    </div>
  );
};

export default BookingCard;
