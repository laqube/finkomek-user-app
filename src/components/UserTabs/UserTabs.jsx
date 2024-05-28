import React from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import styles from "./usertabs.module.css";
import UserTabs_Tabs from "./UserTabs_Tabs";
import UserTabs_Panel from "./UserTabs_Panel";
import BookingCard from "../BookingCard/BookingCard";
import BoughtCourseCard from "../BoughtCourseCard/BoughtCourseCard";

// const apiKey = import.meta.evn.VITE_API_KEY;

const UserTabs = () => {
  // const [courses, setCourses] = useState([]);
  // useEffect(() => {
  //   axios.get(`${apiKey}/user/get-courses`).then((response) => {
  //     setCourses(response.data.course);
  //   });
  // }, []);
  return (
    <div className={styles.user_tabs_body}>
      <UserTabs_Tabs>
        <UserTabs_Panel title="Күнтізбе">
          <BookingCard />
        </UserTabs_Panel>
        <UserTabs_Panel title="Курстар">
          <BoughtCourseCard />
        </UserTabs_Panel>
      </UserTabs_Tabs>
    </div>
  );
};

export default UserTabs;
