import React from "react";
import styles from "./bookingcard.module.css";

const BookingCard = () => {
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
        <button className={styles.bc_button_yes}>Қосылу</button>
        <button className={styles.bc_button_no}>Бас тарту</button>
      </div>
    </div>
  );
};

export default BookingCard;
