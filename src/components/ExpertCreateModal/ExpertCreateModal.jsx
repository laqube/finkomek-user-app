import React, { useState } from "react";
import styles from "./expertcreatemodal.module.css";
import { API } from "../../api";
import ReactModal from "react-modal";
import { useTranslation } from "react-i18next";
import axios from "axios";

const ExpertCreateModal = (props) => {
  console.log("qwe");
  const { t } = useTranslation("translation");
  const [Date, setDate] = useState("");
  const [Start, setStart] = useState("");
  const [End, setEnd] = useState("");

  const handleCreateMeet = async (e) => {
    e.preventDefault();
    if (Date === "" || Start === "" || End === "") {
      alert("Please fill all the fields");
      return;
    }
    let bodyText = {
      timeStart: `${Date}T${Start}:00Z`,
      timeEnd: `${Date}T${End}:00Z`,
    };
    try {
      const response = await API.post(`/expert/create/meet`, bodyText);
      console.log("This is the response", response);
      if (response.status === 200) {
        alert("Success!");
        setDate("");
        setStart("");
        setEnd("");
        props.handleCloseModal();
        window.location.reload();
      } else {
        alert("Please make sure that request is in future time");
      }
    } catch (error) {
      alert("Please make sure that request is in future time");
    }
  };

  return (
    <ReactModal
      isOpen={props.isOpen}
      shouldCloseOnOverlayClick={true}
      onRequestClose={props.handleCloseModal}
      className={styles.modal_container}
      overlayClassName={styles.overlay}
    >
      <div className={styles.modal_box}>
        <h1 className={styles.modal_heading}>{t("expert.modal_heading")} </h1>
        <label className={styles.modal_label}>{t("expert.modal_day")} </label>
        <input
          required
          className={styles.modal_input}
          type="date"
          value={Date}
          onChange={(e) => {
            console.log("e", e);
            setDate(e.target.value);
          }}
        />
        <div className={styles.modal_row}>
          <div className={styles.modal_item}>
            <label className={styles.modal_label}>
              {t("expert.modal_start")}
            </label>
            <input
              required
              className={styles.modal_input}
              type="time"
              value={Start}
              onChange={(e) => {
                setStart(e.target.value);
              }}
            />
          </div>

          <div className={styles.modal_item}>
            <label className={styles.modal_label}>
              {t("expert.modal_end")}
            </label>
            <input
              required
              className={styles.modal_input}
              type="time"
              value={End}
              onChange={(e) => {
                setEnd(e.target.value);
              }}
            />
          </div>
        </div>
        <div className={styles.modal_button_row}>
          <button className={styles.modal_button} onClick={handleCreateMeet}>
            {t("expert.modal_submit")}
          </button>
        </div>
      </div>
    </ReactModal>
  );
};

export default ExpertCreateModal;
