import React from "react";
import styles from "./calculatorretirement.module.css";
import Navigation from "../../components/Navigation/Navigation";
import Footer from "../../components/Footer/Footer";

const CalculatorRetirement = () => {
  return (
    <div className={styles.page_wrapper}>
      <Navigation />
      <div className={page_container}>Retirement calculator</div>
      <Footer />
    </div>
  );
};

export default CalculatorRetirement;
