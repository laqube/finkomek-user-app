import React from "react";
import styles from "./myaccordionitempanel.module.css";
import { AccordionItemPanel } from "react-accessible-accordion";
import { useLocation, useNavigate, useParams } from "react-router";

const MyAccordionItemPanel = ({ item }) => {
  const { lesson_name } = item;
  const { courseId } = useParams();
  const navigate = useNavigate();
  const setLessonName = () => {
    const newRoute = `/learn/${courseId}/${lesson_name}`;
    navigate(newRoute);
  };
  return (
    <AccordionItemPanel
      onClick={setLessonName}
      className={styles.accordion__panel}
    >
      <p className={styles.accoridon_lesson}>{lesson_name}</p>
    </AccordionItemPanel>
  );
};

export default MyAccordionItemPanel;
