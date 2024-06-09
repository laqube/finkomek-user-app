import React, { useEffect, useState } from "react";
import styles from "./usercalendar.module.css";
import { useTranslation } from "react-i18next";
import BookingCard from "../BookingCard/BookingCard";
import { API } from "../../api";

const UserCalendar = () => {
  const { t } = useTranslation("translation");
  const [Bookings, setBookings] = useState([]);
  useEffect(() => {
    async function fetchBookings() {
      const response = await API.get("/user/get-meets");
      setBookings(response.data);
      console.log("These are all the meets booked by user", response.data);
    }
    fetchBookings();
  }, []);
  return (
    <div className={styles.ucal}>
      <h1 className={styles.ucal_heading}>
        {t("page_home.meets_content.heading")}
      </h1>
      <div className={styles.ucal_container}>
        {Bookings &&
          Bookings.map((booking) => (
            <BookingCard item={booking} key={booking.roomId} />
          ))}
      </div>
    </div>
  );
};

export default UserCalendar;
