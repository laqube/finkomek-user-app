import React from "react";
import styles from "./userdashboard.module.css";

const UserDashboard = ({ item }) => {
  const { fname } = item;
  return (
    <div className={styles.dashb_henlo}>
      <img
        className={styles.dashb_henlo_pic}
        src="/assets/dashboard_guy.svg"
        alt="guy"
      />
      <h1 className={styles.dashb_henlo_message}>
        Қош келдің, {fname}! Бүгін не қызық бар?
      </h1>
    </div>
  );
};

export default UserDashboard;
