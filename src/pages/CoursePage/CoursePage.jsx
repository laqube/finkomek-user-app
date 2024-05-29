import React, { useEffect, useState } from "react";
import styles from "./coursepage.module.css";
import Navigation from "../../components/Navigation/Navigation";
import Footer from "../../components/Footer/Footer";
import { useParams } from "react-router";
import { Accordion } from "react-accessible-accordion";
import MyAccordionItem from "../../components/MyAccordionItem/MyAccordionItem";
import { API } from "../../api";
const apiKey = import.meta.env.VITE_API_KEY;

const CoursePage = () => {
  let { courseId } = useParams();
  const [content, setContent] = useState(null);

  useEffect(() => {
    if (courseId) {
      API.get(`/user/${courseId}`)
        .then((response) => {
          setContent(response.data.course);
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
        <div className={styles.accordion_container}>
          <Accordion className={styles.accodion}>
            {content &&
              content.modules &&
              content.modules.map((module, index) => (
                <MyAccordionItem key={module.id || index} item={module} />
              ))}
          </Accordion>
        </div>
        <div className={styles.content_container}> Content goes here</div>
      </div>
      <Footer />
    </div>
  );
};

export default CoursePage;
