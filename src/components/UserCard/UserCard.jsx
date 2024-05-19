import React from "react";
import styles from "./usercard.module.css";
import { Link } from "react-router-dom";

const UserCard = () => {
  return (
    <div className={styles.user_card_body}>
      <Link exact to="/user/settings" className={styles.user_icon_wrapper}>
        <img
          src="/assets/edit_icon.svg"
          alt="edit"
          className={styles.user_card_icon}
        />
      </Link>
      <img
        className={styles.user_card_pfp}
        alt="pfp"
        src="/assets/user_pfp.png"
      />
      <h1 className={styles.user_name}>John Doe</h1>
      <p className={styles.user_info}>exmaple@gmail.com</p>
      <p className={styles.user_info}>87006005544</p>
    </div>
  );
};

export default UserCard;
