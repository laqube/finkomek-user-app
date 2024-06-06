import React from "react";
import styles from "./meetingroom.module.css";
import ExpertNavigation from "../../components/ExpertNavigation/ExpertNavigation";

const MeetingRoom = () => {
  return (
    <div className={styles.page_wrapper}>
      <ExpertNavigation />
      <div className={styles.page_container}>
        <div className={styles.room_container}>
          <div className={styles.room_row1}>
            <h1 className={styles.row1_heading}>Консультацияға қосылыңыз</h1>
            <button className={styles.row1_button}> Басты бетке оралу </button>
          </div>
          <div className={styles.room_row2}>
            <div className={styles.row2_call_conainer}>Call</div>
            <div className={styles.row2_chat_conainer}>Chat</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MeetingRoom;
