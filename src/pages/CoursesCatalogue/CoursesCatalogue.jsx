import React from "react";
import Navigation from "../../components/Navigation/Navigation";
import Footer from "../../components/Footer/Footer";
import styles from "./coursescatalogue.module.css";
import { Link } from "react-router-dom";

const CoursesCatalogue = () => {
  return (
    <div className={styles.page_wrapper}>
      <Navigation />
      <div className={styles.page_container}>
        <div className={styles.course_card}>
          <img
            className={styles.course_card_image}
            alt="image"
            src="/assets/course_card1.svg"
          />
          <div className={styles.course_text_wrapper}>
            <h1 className={styles.course_name}>
              Қаржылық сауаттылықтың негіздері
            </h1>
            <Link className={styles.course_button_wrapper} to="/">
              <div className={styles.course_button}>Толығырақ</div>
            </Link>
          </div>
        </div>
        <div className={styles.course_card}>
          <img
            className={styles.course_card_image}
            alt="image"
            src="/assets/course_card2.svg"
          />
          <div className={styles.course_text_wrapper}>
            <h1 className={styles.course_name}>Ақпараттық қауіпсіздік</h1>
            <Link className={styles.course_button_wrapper} to="/">
              <div className={styles.course_button}>Толығырақ</div>
            </Link>
          </div>
        </div>
        <div className={styles.course_card}>
          <img
            className={styles.course_card_image}
            alt="image"
            src="/assets/course_card3.svg"
          />
          <div className={styles.course_text_wrapper}>
            <h1 className={styles.course_name}>Балаларға арнғалан курс</h1>
            <Link className={styles.course_button_wrapper} to="/">
              <div className={styles.course_button}>Толығырақ</div>
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CoursesCatalogue;
