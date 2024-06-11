import React, { useEffect, useState } from "react";
import styles from "./edashcard.module.css";
import { useTranslation } from "react-i18next";
import { API } from "../../api";
import axios from "axios";
import { useNavigate } from "react-router";
import moment from "moment";

const EdashCard = ({ item }) => {
  const { t } = useTranslation("translation");
  const navigate = useNavigate();
  const { Id, userId, expertId, timeStart, timeEnd, roomId, status } = item;
  const [client, setClient] = useState("");
  const [refresh, setRefresh] = useState(false); // State variable to trigger refresh

  console.log("Start time", timeStart);
  console.log("End time", timeEnd);

  useEffect(() => {
    if (status === "available") {
      API.get(`user/${userId}`).then((response) => {
        const { firstName, lastName } = response.data.user;
        setClient(`${firstName} ${lastName}`);
      });
    }
  }, [status, userId, refresh]); // Add refresh to dependencies

  const containerClassName =
    status === "available"
      ? styles.ecard_container_available
      : styles.ecard_container_booked;

  const handleDelete = () => {
    API.delete(`/expert/delete-meet/${roomId}`).then(() => {
      alert("The meeting has been deleted successfully");
      window.location.reload();
      // setRefresh((prev) => !prev); // Toggle the refresh state to trigger re-render
    });
  };

  const handleConnect = () => {
    navigate(`/meeting/${roomId}`);
  };

  const formattedDate = moment(timeStart).format("MM.DD");
  const formattedTime = `${moment(timeStart).format("HH:mm")}-${moment(
    timeEnd
  ).format("HH:mm")}`;

  return (
    <div className={containerClassName}>
      <div className={styles.ecard_col1}>
        <div className={styles.ecard_info_container}>
          <h1 className={styles.ecard_heading}> {t("expert.ecard_name")} </h1>
          <p className={styles.ecard_info}>Status: {status}</p>
          {status === "booked" && (
            <p className={styles.ecard_info}>Client: {client}</p>
          )}
          <div className={styles.ecard_tag_row}>
            <div className={styles.ecard_tag_item}>
              <img
                alt="icon"
                className={styles.ecard_tag_icon}
                src="/assets/bc_calendar_icon.svg"
              />
              <p className={styles.ecard_tag_detail}>{formattedDate} </p>
            </div>
            <div className={styles.ecard_tag_item}>
              <img
                alt="icon"
                className={styles.ecard_tag_icon}
                src="/assets/bc_clock_icon.svg"
              />
              <p className={styles.ecard_tag_detail}> {formattedTime} </p>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.ecard_col2}>
        {status === "available" ? (
          <button className={styles.ecard_button_delete} onClick={handleDelete}>
            Delete
          </button>
        ) : (
          <button className={styles.ecard_button_chat} onClick={handleConnect}>
            Connect
          </button>
        )}
      </div>
    </div>
  );
};

export default EdashCard;
