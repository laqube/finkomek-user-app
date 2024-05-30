import React, { useEffect, useState } from "react";
import styles from "./coursepage.module.css";
import Navigation from "../../components/Navigation/Navigation";
import Footer from "../../components/Footer/Footer";
import { useParams } from "react-router";
import { Accordion } from "react-accessible-accordion";
import MyAccordionItem from "../../components/MyAccordionItem/MyAccordionItem";
import { API } from "../../api";
import CourseContent from "../../components/CourseContent/CourseContent";

const CoursePage = () => {
  let { courseId } = useParams();
  const [content, setContent] = useState(null);

  useEffect(() => {
    if (courseId) {
      API.get(`/user/${courseId}`)
        .then((response) => {
          setContent(response.data.course);
          console.log(content.modules);
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
        <div className={styles.content_container}>
          <div className={styles.content_wrapper}>
            {/* There should be an element <CourseContent/> which is rendered inside of a map function. 
           It should be reactive and render values should chnage depending 
           on the clicked child component which is called <MyAccordinItemPanel/>.
           n.b. MyAccodrionItemPanel is rendered inside of a parent component <MyAccordionItem/> */}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CoursePage;
