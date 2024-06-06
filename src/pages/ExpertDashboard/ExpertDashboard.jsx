import React from "react";
import styles from "./expertdashboard.module.css";
import Navigation from "../../components/Navigation/Navigation";
import ExpertNavigation from "../../components/ExpertNavigation/ExpertNavigation";
import Footer from "../../components/Footer/Footer";
import { useTranslation } from "react-i18next";

const ExpertDashboard = () => {
  const { t } = useTranslation("translation");
  return (
    <div className={styles.page_wrapper}>
      <ExpertNavigation />
      <div className={styles.page_container}>
        <div className={styles.expert_container}>
          <div className={styles.expert_box_container}>
            <div className={styles.expert_box}>
              <img className={styles.expert_avi} alt="avi" src="/" />
              <h1 className={styles.expert_name}>Name Surname</h1>
              <p className={styles.expert_email}>example@gmail.com</p>
              <p className={styles.expert_price}>
                price{t("page_expert.tag_price")}{" "}
              </p>
              <p className={styles.expert_desc}>
                Финтехта 12 жыл тәжірибем бар. Білікті және өте күшті маманмын.
                КөптегенФинтехта 12 жыл тәжірибем бар. Білікті және өте күшті
                маманмын. Көптеген
              </p>
            </div>
          </div>
          <div className={styles.expert_calendar_container}>
            <h1 className={styles.calendar_heading}>{t("expert.heading")}</h1>
            <div className={styles.calendar_create_row}>
              <h1 className={styles.calendar_create_heading}>
                {t("expert.msg")}{" "}
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
