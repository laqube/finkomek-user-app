import React from "react";
import styles from "./boughtcoursecard.module.css";

const BoughtCourseCard = () => {
  // const { _id, name } = item;
  return (
    <div className={styles.coursecard_container}>
      <div className={styles.coursecard_img_container}>
        <img
          className={styles.coursecard_img}
          src="/assets/course_card1.svg"
          alt="img"
        />
      </div>
      <div className={styles.coursecard_info_container}>
        <h2 className={styles.coursecard_info_name}> Name</h2>
        <div className={styles.coursecard_info_status}>
          <img
            className={styles.coursecard_status_img}
            src="/assets/verified_icon.svg"
            alt="img"
          />
          <p>Бұл курс сатып алынған</p>
        </div>
      </div>
    </div>
  );
};

export default BoughtCourseCard;
