import React from "react";
import styles from "./expertpage.module.css";
import { useTranslation } from "react-i18next";
import { API } from "../../api";
import Navigation from "../../components/Navigation/Navigation";
import Footer from "../../components/Footer/Footer";

const ExpertPage = () => {
  const { t } = useTranslation("translation");
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
              Calendar will be here, check if can be done using html tables
            </div>
          </div>
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
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ExpertPage;
