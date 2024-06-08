import React, { useState, useEffect } from "react";
import styles from "./expertdashboard.module.css";
import { useTranslation } from "react-i18next";
import { API } from "../../api";
import Navigation from "../../components/Navigation/Navigation";
import ExpertNavigation from "../../components/ExpertNavigation/ExpertNavigation";
import Footer from "../../components/Footer/Footer";

const ExpertDashboard = () => {
  const { t } = useTranslation("translation");
  const [expert, setExpert] = useState({});
  useEffect(() => {
    API.get(`/expert/get`)
      .then((response) => {
        // console.log(response.data.expert);
        setExpert(response.data.expert);
      })
      .catch((error) => {
        console.error("Error fetching course:", error);
      });
  }, []);
  return (
    <div className={styles.page_wrapper}>
      <ExpertNavigation />
      <div className={styles.page_container}>
        <div className={styles.expert_container}>
          <div className={styles.expert_box_container}>
            <div className={styles.expert_box}>
              <img
                className={styles.expert_avi}
                alt="avi"
                src={expert.imageLink}
              />
              <h1 className={styles.expert_name}>
                {expert.firstName} {expert.lastName}
              </h1>
              <p className={styles.expert_email}> {expert.email} </p>
              <p className={styles.expert_price}>
                {expert.cost}
                {t("page_expert.tag_price")}{" "}
              </p>
              <p className={styles.expert_desc}>{expert.description}</p>
            </div>
          </div>
          <div className={styles.expert_calendar_container}>
            <h1 className={styles.calendar_heading}>
              {t("expert.heading")} {expert.firstName} !
            </h1>
            <div className={styles.calendar_create_row}>
              <h1 className={styles.calendar_create_heading}>
                {t("expert.msg")}
              </h1>
              <button className={styles.calendar_create_button}>
                {t("expert.button_create")}{" "}
              </button>
            </div>
            <div className={styles.calendar_box}>
              Calendar will be here, check if can be done using html tables
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExpertDashboard;
