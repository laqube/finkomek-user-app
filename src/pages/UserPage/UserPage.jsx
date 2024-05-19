import React from "react";
import styles from "./userpage.module.css";
import Navigation from "../../components/Navigation/Navigation";
import Footer from "../../components/Footer/Footer";
import UserCard from "../../components/UserCard/UserCard";
import UserTabs from "../../components/UserTabs/UserTabs";

const UserPage = () => {
  return (
    <div className={styles.page_wrapper}>
      <Navigation />
      <div className={styles.page_container}>
        <div className={styles.page_column}>
          <UserCard />
        </div>
        <div className={styles.page_column}>User Tabs</div>
      </div>
      <Footer />
    </div>
  );
};

export default UserPage;
