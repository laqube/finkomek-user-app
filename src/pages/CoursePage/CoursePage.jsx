import React, { useEffect, useState } from "react";
import styles from "./coursepage.module.css";
import Navigation from "../../components/Navigation/Navigation";
import Footer from "../../components/Footer/Footer";
import { useParams } from "react-router";
import { Accordion } from "react-accessible-accordion";
import MyAccordionItem from "../../components/MyAccordionItem/MyAccordionItem";
import { API } from "../../api";
import CourseContent from "../../components/CourseContent/CourseContent";
import { findLessonByName } from "./script";

const CoursePage = () => {
  let { courseId } = useParams();
  const { lessonName } = useParams();

  const [content, setContent] = useState({});
  const [currentLesson, setCurrentLesson] = useState();

  useEffect(() => {
    if (courseId) {
      API.get(`/user/${courseId}`)
        .then((response) => {
          const obj = response.data.course;
          setContent(obj);
        })
        .catch((error) => {
          console.error("Error fetching course:", error);
        });
    }
  }, [courseId]);
  useEffect(() => {
    if (Object.keys(content).length > 0 && lessonName) {
      setCurrentLesson(findLessonByName(content.modules, lessonName));
    }
  }, [content, lessonName]);

  return (
    <div className={styles.page_wrapper}>
      <Navigation />
      <div className={styles.page_container}>
        <div className={styles.accordion_container}>
          <Accordion className={styles.accodion}>
            <div className={styles.accordion_heading}>
              <img
                className={styles.heading_icon}
                alt="book"
                src="/assets/cp_book_icon.svg"
              />
              <h1 className={styles.heading_text}>Мазмұны</h1>
            </div>
            {content &&
              content.modules &&
              content.modules.map((module, index) => (
                <MyAccordionItem key={index} item={module} />
              ))}
          </Accordion>
        </div>
        <div className={styles.content_container}>
          <h1 className={styles.content_name}>{content.name}</h1>
          {/* There should be an element <CourseContent/> which is rendered inside of a map function. 
           It should be reactive and render values should chnage depending 
           on the clicked child component which is called <MyAccordinItemPanel/>.
           n.b. MyAccodrionItemPanel is rendered inside of a parent component <MyAccordionItem/> */}
          <CourseContent lessons={<>{JSON.stringify(currentLesson)}</>} />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CoursePage;
