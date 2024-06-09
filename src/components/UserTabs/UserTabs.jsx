import React, { useEffect, useState } from "react";
import styles from "./usertabs.module.css";
import UserTabs_Tabs from "./UserTabs_Tabs";
import UserTabs_Panel from "./UserTabs_Panel";
import BookingCard from "../BookingCard/BookingCard";
import ExpertTabs from "../ExpertTabs/ExpertTabs";
import BoughtCourseCard from "../BoughtCourseCard/BoughtCourseCard";
import { API } from "../../api";
const apiKey = import.meta.env.VITE_API_KEY;

const UserTabs = () => {
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
  useEffect(() => {
    API.get(`${apiKey}/`);
  });
  return (
    <div className={styles.user_tabs_body}>
      <UserTabs_Tabs>
        <UserTabs_Panel title="Күнтізбе">
          {/* <BookingCard /> */}a bookin card example
        </UserTabs_Panel>
        <UserTabs_Panel title="Курстар">
          {courses.map((course) => (
            <BoughtCourseCard key={course.id} item={course} />
          ))}
        </UserTabs_Panel>
      </UserTabs_Tabs>
    </div>
  );
};

export default UserTabs;
