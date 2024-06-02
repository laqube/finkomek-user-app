import React, { useState, useEffect } from "react";
import styles from "./courseinfopage.module.css";
import Navigation from "../../components/Navigation/Navigation";
import Footer from "../../components/Footer/Footer";
import { useParams } from "react-router";
import { API } from "../../api";

const CourseInfoPage = () => {
  let { courseId } = useParams();
  const [content, setContent] = useState([]);
  useEffect(() => {
    if (courseId) {
      API.get(`/course/${courseId}`)
        .then((response) => {
          setContent(response.data.course);
          console.log(content);
        })
        .catch((error) => {
          console.error("Error fetching course:", error);
        });
    }
  }, [courseId]);
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
          <button className={styles.page_text_button}>Курсқа өту</button>
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
