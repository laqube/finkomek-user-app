import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import styles from "./expertpage.module.css";
import { useTranslation } from "react-i18next";
import { API } from "../../api";
import Navigation from "../../components/Navigation/Navigation";
import Footer from "../../components/Footer/Footer";
import UserTabs from "../../components/UserTabs/UserTabs";

const ExpertPage = () => {
  const { t } = useTranslation("translation");
  let { expertId } = useParams();
  const [expert, setExpert] = useState({});
  useEffect(() => {
    if (expertId) {
      API.get(`/expert/${expertId}`)
        .then((response) => {
          console.log(response.data.expert);
          setExpert(response.data.expert);
        })
        .catch((error) => {
          console.error("Error fetching course:", error);
        });
    }
  }, []);
  return (
    <div className={styles.page_wrapper}>
      <Navigation />
      <div className={styles.page_container}>
        <div className={styles.expert_container}>
          <div className={styles.expert_calendar_container}>
            <h1 className={styles.calendar_heading}>
              {t("page_expert.heading")}
            </h1>
            <div className={styles.calendar_box}>
              <UserTabs />
            </div>
          </div>
          <div className={styles.expert_box_container}>
            <div className={styles.expert_box}>
              <img
                className={styles.expert_avi}
                alt="img"
                src={expert.imageLink}
              />
              <h1 className={styles.expert_name}>
                {expert.firstName} {expert.lastName}
              </h1>
              <p className={styles.expert_email}>{expert.email}</p>
              <p className={styles.expert_price}>
                {expert.cost} {t("page_expert.tag_price")}{" "}
              </p>
              <p className={styles.expert_desc}>{expert.description}</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ExpertPage;
