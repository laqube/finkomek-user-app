import React, { useEffect, useState } from "react";
import Navigation from "../../components/Navigation/Navigation";
import Footer from "../../components/Footer/Footer";
import styles from "./coursescatalogue.module.css";
import { Link } from "react-router-dom";
import axios from "axios";
import CourseInfoModal from "../../components/CourseInfoModal/CourseInfoModal";
import CourseCatalogueCard from "../../components/CourseCatalogueCard/CourseCatalogueCard";
const apiKey = import.meta.env.VITE_API_KEY;

const CoursesCatalogue = () => {
  const [isOpen, setisOpen] = useState(false);
  const [courseId, setCourseId] = useState(undefined);
  const [courses, setCourses] = useState([]);
  const handleOpenModal = (courseId) => {
    setisOpen(true);
    setCourseId(courseId);
  };
  const handleCloseModal = () => {
    setisOpen(false);
    setCourseId(undefined);
  };
  useEffect(() => {
    axios.get(`${apiKey}/course/get-all-courses`).then((response) => {
      setCourses(response.data.courses);
      // console.log(response.data.courses);
    });
  }, []);
  return (
    <div className={styles.page_wrapper}>
      <Navigation />
      <div className={styles.page_container}>
        <div className={styles.catalogue_text_container}>
          <h1 className={styles.catalogue_heading}>
            Финтех Курстарымен танысыңыз
          </h1>
          <p className={styles.catalogue_paragraph}>
            Оқу жолыңызды таңдаңыз, дағдыларыңызды дамытыңыз және біліміңізді
            растаңыз. Барлығы бір жерде.
          </p>
        </div>
        <div className={styles.courses_container}>
          {courses &&
            courses.map((course) => <CourseCatalogueCard item={course} />)}
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
