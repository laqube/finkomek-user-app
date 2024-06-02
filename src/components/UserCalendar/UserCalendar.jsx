import React from "react";
import styles from "./usercalendar.module.css";
import BookingCard from "../BookingCard/BookingCard";

const UserCalendar = () => {
  return (
    <div className={styles.ucal}>
      <h1 className={styles.ucal_heading}>Кездесулер кестесі</h1>
      <div className={styles.ucal_container}>
        <BookingCard />
        <BookingCard />
        <BookingCard />
      </div>
    </div>
  );
};

export default UserCalendar;
