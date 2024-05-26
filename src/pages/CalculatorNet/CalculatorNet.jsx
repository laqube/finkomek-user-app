import React from "react";
import styles from "./calculatornet.module.css";
import Navigation from "../../components/Navigation/Navigation";
import Footer from "../../components/Footer/Footer";

const CalculatorNet = () => {
  return (
    <div className={styles.page_wrapper}>
      <Navigation />
      <div className={page_container}>Net worth Calculator</div>
      <Footer />
    </div>
  );
};

export default CalculatorNet;
