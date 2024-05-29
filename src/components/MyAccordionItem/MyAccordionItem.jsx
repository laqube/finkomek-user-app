import React from "react";
import styles from "./myaccordionitem.module.css";
import {
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
} from "react-accessible-accordion";
import MyAccordionItemPanel from "../MyAccordionItemPanel/MyAccordionItemPanel";

const MyAccordionItem = ({ item }) => {
  const { module_name, lessons } = item;
  console.log(item);
  return (
    <AccordionItem className={styles.accordion__item}>
      <AccordionItemHeading>
        <AccordionItemButton className={styles.accordion__button}>
          {module_name}
        </AccordionItemButton>
      </AccordionItemHeading>
      {lessons.map((lesson) => (
        <MyAccordionItemPanel key={lesson.lesson_name} item={lesson} />
      ))}
    </AccordionItem>
  );
};

export default MyAccordionItem;
