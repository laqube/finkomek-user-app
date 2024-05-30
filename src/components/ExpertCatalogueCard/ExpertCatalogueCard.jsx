import React from "react";
import styles from "./expertcataloguecard.module.css";

const ExpertCatalogueCard = ({ item }) => {
  const { firstName, lastName, cost, imageLink, description } = item;
  return (
    <div className={styles.ecard}>
      <div className={styles.ecard_content}>
        <div className={styles.ecard_row}>
          <img alt="img" src={imageLink} className={styles.ecard_pic} />

          <h1 className={styles.ecard_name}>
            {firstName} {lastName}
          </h1>
        </div>
        <div className={styles.ecard_row}>
          <p className={styles.ecard_cost}>{cost} тг/сағ</p>
        </div>
        <div className={styles.ecard_row}>
          <p className={styles.ecard_desc}>{description}</p>
        </div>
      </div>
      <button className={styles.ecard_button}>Таңдау</button>
    </div>
  );
};

export default ExpertCatalogueCard;
