import React from "react";
import styles from "./coursecataloguecard.module.css";
import { useTranslation } from "react-i18next";
import { Navigate } from "react-router";
import { Link } from "react-router-dom";

const CourseCatalogueCard = ({ item }) => {
  const { t } = useTranslation("translation");
  const { id, image_url, name } = item;
  return (
    <div className={styles.course_card}>
      <img className={styles.course_card_image} alt="image" src={image_url} />
      <div className={styles.course_text_wrapper}>
        <h1 className={styles.course_name}>{name}</h1>
      </div>
      <div className={styles.course_button_wrapper}>
        <Link to={`/course/${id}`} style={{ textDecoration: "none" }}>
          <button className={styles.course_button}>
            {t("page_courses_catalogue.button_more")}
          </button>
        </Link>
      </div>
    </div>
  );
};

export default CourseCatalogueCard;
