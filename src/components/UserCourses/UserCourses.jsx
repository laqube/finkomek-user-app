import React, { useState, useEffect } from "react";
import styles from "./usercourses.module.css";
import { useTranslation } from "react-i18next";
import { API } from "../../api";
const apiKey = import.meta.env.VITE_API_KEY;
import CourseCatalogueCard from "../CourseCatalogueCard/CourseCatalogueCard";

const UserCourses = ({ item }) => {
  const { t } = useTranslation("translation");
  const [courses, setCourses] = useState([]);
  useEffect(() => {
    API.get(`${apiKey}/user/get-courses`)
      .then((response) => {
        const courseData = response.data.course || [];
        setCourses(courseData);
      })
      .catch((error) => {
        console.error("Error fetching courses:", error);
        setCourses([]);
      });
  }, []);
  return (
    <div className={styles.ucourse}>
      <h1 className={styles.ucourse_heading}>
        {t("page_home.courses_content.heading")}
      </h1>
      <div className={styles.ucourse_row}>
        {courses &&
          courses.map((course) => (
            <div className={styles.ucourse_card} key={course.id}>
              <CourseCatalogueCard item={course} key={course.id} />
            </div>
          ))}
      </div>
    </div>
  );
};

export default UserCourses;
