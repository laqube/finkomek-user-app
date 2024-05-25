import React from "react";
import styles from "./bookingcard.module.css";

const BookingCard = () => {
  return (
    <div className={styles.bookingcard_container}>
      <h1 className={styles.bc_header}>Күнделікті консультация</h1>

      <div className={styles.bc_date_wrapper}>
        <img
          className={styles.bc_date_icon}
          src="/assets/bc_calendar_icon.svg"
        />
        <p className={styles.bc_date} style={{ margin: "0" }}>
          20.06.2024
        </p>
      </div>

      <div className={styles.bc_name_row}>
        <div className={styles.bc_name_wrapper}>
          <img className={styles.bc_name_icon} src="/assets/bc_name_icon.svg" />
          <p style={{ margin: "0" }}>Әйгүл Сәрсен</p>
        </div>
        <img className={styles.bc_chat_icon} src="/assets/bc_chat_icon.svg" />
      </div>
    </div>
  );
};

export default BookingCard;
