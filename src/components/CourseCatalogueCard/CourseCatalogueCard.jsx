import React from "react";
import styles from "./coursecataloguecard.module.css";
import { Navigate } from "react-router";

const CourseCatalogueCard = ({ item }) => {
  const { id, image_url, name, short_description } = item;
  return (
    <div className={styles.course_card}>
      <img className={styles.course_card_image} alt="image" src={image_url} />
      <div className={styles.course_text_wrapper}>
        <h1 className={styles.course_name}>{name}</h1>
      </div>
      <div className={styles.course_button_wrapper}>
        <button className={styles.course_button}>Толығырақ</button>
      </div>
    </div>
  );
};

export default CourseCatalogueCard;
