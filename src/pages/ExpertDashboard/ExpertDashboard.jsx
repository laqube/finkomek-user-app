import React from "react";
import styles from "./expertdashboard.module.css";
import Navigation from "../../components/Navigation/Navigation";
import ExpertNavigation from "../../components/ExpertNavigation/ExpertNavigation";
import Footer from "../../components/Footer/Footer";

const ExpertDashboard = () => {
  return (
    <div className={styles.page_wrapper}>
      <ExpertNavigation />
      <div className={styles.page_container}>Epxert page</div>
      <Footer />
    </div>
  );
};

export default ExpertDashboard;
