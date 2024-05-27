import React, { useEffect, useState } from "react";
import Navigation from "../../components/Navigation/Navigation";
import Footer from "../../components/Footer/Footer";
import styles from "./coursescatalogue.module.css";
import { Link } from "react-router-dom";
import CourseInfoModal from "../../components/CourseInfoModal/CourseInfoModal";

const CoursesCatalogue = () => {
  const [isOpen, setisOpen] = useState(false);
  const [courseId, setCourseId] = useState(undefined);
  const handleOpenModal = (courseId) => {
    setisOpen(true);
    setCourseId(courseId);
  };
  const handleCloseModal = () => {
    setisOpen(false);
    setCourseId(undefined);
  };
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
            <div className={styles.course_button_wrapper}>
              <button
                className={styles.course_button}
                onClick={() => handleOpenModal(1)}
              >
                Толығырақ
              </button>
            </div>
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
            <div className={styles.course_button_wrapper}>
              <button
                className={styles.course_button}
                onClick={() => handleOpenModal(2)}
              >
                Толығырақ
              </button>
            </div>
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
            <div className={styles.course_button_wrapper}>
              <button
                className={styles.course_button}
                onClick={() => handleOpenModal(3)}
              >
                Толығырақ
              </button>
            </div>
          </div>
        </div>
        <CourseInfoModal
          isOpen={isOpen}
          courseId={courseId}
          handleCloseModal={handleCloseModal}
        />
      </div>
      <Footer />
    </div>
  );
};

export default CoursesCatalogue;
