import React from "react";
import ReactDOM from "react-dom";
import styles from "./usertabs.module.css";
import UserTabs_Tabs from "./UserTabs_Tabs";
import UserTabs_Panel from "./UserTabs_Panel";
import BookingCard from "../BookingCard/BookingCard";

const UserTabs = () => {
  return (
    <div className={styles.user_tabs_body}>
      <UserTabs_Tabs>
        <UserTabs_Panel title="Күнтізбе">
          <BookingCard />
          <BookingCard />
          <BookingCard />
        </UserTabs_Panel>
        <UserTabs_Panel title="Курстар">
          Panel 2 <br />
          Test <br />
          Test <br />
          Test <br />
          Test <br />
          Test <br />
          Test <br />
          Test <br />
          Test <br />
          Test <br />
          Test <br />
          Test <br />
          Test <br />
          Test <br />
          Test <br />
          Test <br />
        </UserTabs_Panel>
      </UserTabs_Tabs>
    </div>
  );
};

export default UserTabs;
