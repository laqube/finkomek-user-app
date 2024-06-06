import React from "react";
import styles from "./usertabs.module.css";

const UserTabs_Panel = (props) => {
  return (
    <div>
      <div className={styles.panel_container}>{props.children}</div>
    </div>
  );
};

export default UserTabs_Panel;
