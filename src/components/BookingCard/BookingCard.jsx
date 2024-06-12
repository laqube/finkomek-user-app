import React, { useState, useEffect } from "react";
import styles from "./bookingcard.module.css";
import { useTranslation } from "react-i18next";
import axios from "axios";
const apiKey = import.meta.env.VITE_API_KEY;
import { Link } from "react-router-dom";
import moment from "moment-timezone";

const BookingCard = ({ item }) => {
  const { t } = useTranslation("translation");
  const { Id, userId, expertId, roomId, status, timeStart, timeEnd } = item;
  const [expert, setExpert] = useState({});
  const role = "2968903924";

  useEffect(() => {
    axios.get(`${apiKey}/expert/${expertId}`).then((response) => {
      setExpert(response.data.expert);
    });
  }, []);

  const timezone = "UTC+5";
  const formattedDate = moment(timeStart).tz(timezone).format("DD.MM");
  const formattedTime = `${moment(timeStart)
    .tz(timezone)
    .format("HH:mm")}-${moment(timeEnd).tz(timezone).format("HH:mm")}`;

  return (
    <div className={styles.bookingcard_container}>
      <div className={styles.bc_col_info}>
        <h1 className={styles.bc_info_name}>
          {expert.firstName} {expert.lastName}
        </h1>
        <p className={styles.bc_info_topic}>{t("card_meet.heading")} </p>
        <div className={styles.bc_row_info}>
          <div className={styles.bc_info_item}>
            <img
              alt="icon"
              className={styles.bc_info_icon}
              src="/assets/bc_calendar_icon.svg"
            />
            <p className={styles.bc_info_detail}>{formattedDate} </p>
          </div>
          <div className={styles.bc_info_item}>
            <img
              alt="icon"
              className={styles.bc_info_icon}
              src="/assets/bc_clock_icon.svg"
            />
            <p className={styles.bc_info_detail}>{formattedTime} </p>
          </div>
        </div>
      </div>
      <div className={styles.bc_col_buttons}>
        <Link to={`/meeting/${roomId}/${role}`}>
          <button className={styles.bc_button_yes}>
            {t("card_meet.button_connect")}
          </button>
        </Link>

        <button className={styles.bc_button_no}>
          {t("card_meet.button_cancel")}
        </button>
      </div>
    </div>
  );
};

export default BookingCard;
