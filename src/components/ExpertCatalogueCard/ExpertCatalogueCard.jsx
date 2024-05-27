import React from "react";
import styles from "./expertcataloguecard.module.css";

const ExpertCatalogueCard = ({ item }) => {
  const { firstName, lastName, imageLink, description } = item;
  return (
    <div className={styles.ecard}>
      <div className={styles.ecard_pic_container}>
        <img alt="img" src={imageLink} className={styles.ecard_pic} />
      </div>
      <div className={styles.ecard_text_container}>
        <h1 className={styles.ecard_name}>
          {firstName} {lastName}
        </h1>
        <p className={styles.ecard_desc}>{description}</p>
        <button className={styles.ecard_button}>Өту</button>
      </div>
    </div>
  );
};

export default ExpertCatalogueCard;
