import React from "react";
import styles from "./usercard.module.css";

const UserCard = () => {
  return (
    <div className={styles.user_card_body}>
      <img
        className={styles.user_card_pfp}
        alt="pfp"
        src="/assets/user_pfp.png"
      />
    </div>
  );
};

export default UserCard;
