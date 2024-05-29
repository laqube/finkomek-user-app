import React from "react";
import styles from "./myaccordionitempanel.module.css";
import { AccordionItemPanel } from "react-accessible-accordion";

const MyAccordionItemPanel = ({ item }) => {
  const { lesson_name } = item;
  return (
    <AccordionItemPanel className={styles.accordion__panel}>
      <li className={styles.accoridon_lesson}>{lesson_name}</li>
    </AccordionItemPanel>
  );
};

export default MyAccordionItemPanel;
