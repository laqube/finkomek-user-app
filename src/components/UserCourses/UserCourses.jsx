import React, { useState, useEffect } from "react";
import styles from "./usercourses.module.css";
import { API } from "../../api";
const apiKey = import.meta.env.VITE_API_KEY;
import CourseCatalogueCard from "../CourseCatalogueCard/CourseCatalogueCard";

const UserCourses = ({ item }) => {
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
      <h1 className={styles.ucourse_heading}>Соңғы өтілген курстар</h1>
      <div className={styles.ucrouse_row}>
        {courses &&
          courses.map((course) => (
            <CourseCatalogueCard key={course.div} item={course} />
          ))}
      </div>
    </div>
  );
};

export default UserCourses;
