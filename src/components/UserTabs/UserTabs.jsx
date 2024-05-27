import React from "react";
import ReactDOM from "react-dom";
import styles from "./usertabs.module.css";
import UserTabs_Tabs from "./UserTabs_Tabs";
import UserTabs_Panel from "./UserTabs_Panel";
import BookingCard from "../BookingCard/BookingCard";
import BoughtCourseCard from "../BoughtCourseCard/BoughtCourseCard";

const UserTabs = () => {
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
