import React, { useState, useEffect } from "react";
import styles from "./courseinfopage.module.css";
import { useTranslation } from "react-i18next";
import { API } from "../../api";
import Navigation from "../../components/Navigation/Navigation";
import Footer from "../../components/Footer/Footer";
import { useParams } from "react-router";
import { Link } from "react-router-dom";

const CourseInfoPage = () => {
  const { t } = useTranslation("translation");
  let { courseId } = useParams();
  const [content, setContent] = useState([]);
  const [status, setStatus] = useState([]);
  useEffect(() => {
    if (courseId) {
      API.get(`/course/${courseId}`)
        .then((response) => {
          setContent(response.data.course);
        })
        .catch((error) => {
          console.error("Error fetching course:", error);
        });
    }
  }, [courseId]);

  useEffect(() => {
    if (courseId) {
      API.get(`/user/${courseId}`)
        .then((response) => {
          response.data.course && setStatus(true);
        })
        .catch((error) => {
          error.response.status === 403 && setStatus(false);
          console.error("Error fetching course:", error);
        });
    }
  }, []);
  return (
    <div className={styles.page_wrapper}>
      <Navigation />
      <div className={styles.page_container}>
        <div className={styles.page_text}>
          <div className={styles.page_info}>
            <h1 className={styles.page_info_heading}>{content.name}</h1>
            <p className={styles.page_info_price}>2990 тг</p>
            <div className={styles.page_info_tags}>
              <img
                alt="icon"
                src="/assets/course_tag1.svg"
                className={styles.page_tag_icon}
              />
              <p className={styles.page_tag_text}>4.9</p>
              <img
                alt="icon"
                src="/assets/course_tag2.svg"
                className={styles.page_tag_icon}
              />
              <p className={styles.page_tag_text}>Бейнематериал</p>
            </div>
            <p className={styles.page_info_desc}>{content.short_description}</p>
          </div>
          {status ? (
            <Link path to={`/learn/${courseId}`}>
              <button className={styles.page_text_button}>
                {t("page_courses_catalogue.button_see")}
              </button>
            </Link>
          ) : (
            <Link path to={`/course/checkout/${courseId}`}>
              <button className={styles.page_text_button}>
                {t("page_courses_catalogue.button_buy")}
              </button>
            </Link>
          )}
        </div>
        <img
          className={styles.page_image}
          src={content.image_url}
          alt="image"
        />
      </div>
      <Footer />
    </div>
  );
};

export default CourseInfoPage;
