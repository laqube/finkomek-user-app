import React from "react";
import styles from "./boughtcoursecard.module.css";
import { Link } from "react-router-dom";

const BoughtCourseCard = ({ item }) => {
  const { id, name, image_url } = item;
  console.log(id);

  return (
    <Link to={`/course/${id}`}>
      <div className={styles.coursecard_container}>
        <div className={styles.coursecard_img_container}>
          <img className={styles.coursecard_img} src={image_url} alt="img" />
        </div>
        <div className={styles.coursecard_info_container}>
          <h2 className={styles.coursecard_info_name}> {name}</h2>
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
    </Link>
  );
};

export default BoughtCourseCard;
