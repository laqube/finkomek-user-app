import React, { useEffect, useState } from "react";
import styles from "./usercard.module.css";
import { Link } from "react-router-dom";
import { API } from "../../api";

const UserCard = () => {
  const [user, setUser] = useState({
    Id: null,
    email: null,
    password: null,
    fname: null,
    lname: null,
  });

  useEffect(() => {
    async function fetchUser() {
      try {
        const response = await API.get("/user");
        setUser(response.data.user);
      } catch (error) {
        console.error("Қате орнады", error.response.data);
        // setMessage("Кіру барысында бірбәле бұзылды ((");
      }
    }

    fetchUser();
  }, []);

  // if (!user.Id) {
  //   return (

  //   )
  // }
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
      <h1 className={styles.user_name}>
        {!user.fname ? "empty" : `${user.fname} ${user.lname}`}
      </h1>
      <p className={styles.user_info}>
        {!user.fname ? "empty" : `${user.email}`}
      </p>
    </div>
  );
};

export default UserCard;
