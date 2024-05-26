import React from "react";
import styles from "./calculatorgoal.module.css";
import Navigation from "../../components/Navigation/Navigation";
import Footer from "../../components/Footer/Footer";

const CalculatorGoal = () => {
  return (
    <div className={styles.page_wrapper}>
      <Navigation />
      <div className={styles.page_container}>Goal Calculator</div>
      <Footer />
    </div>
  );
};

export default CalculatorGoal;
