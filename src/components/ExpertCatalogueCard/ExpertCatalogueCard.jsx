import React from "react";
import styles from "./expertcataloguecard.module.css";

const ExpertCatalogueCard = ({ item }) => {
  const { name, url, experience } = item;
  return (
    <div className={styles.ecard}>
      <div className={styles.ecard_pic_container}>
        <img alt="img" src={url} className={styles.ecard_pic} />
      </div>
      <div className={styles.ecard_text_container}>
        <h1 className={styles.ecard_name}>{name}</h1>
        <p className={styles.ecard_desc}>{experience}</p>
        <button className={styles.ecard_button}>Өту</button>
      </div>
    </div>
  );
};

export default ExpertCatalogueCard;
