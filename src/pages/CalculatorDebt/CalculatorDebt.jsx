import React from "react";
import styles from "./calculatordebt.module.css";
import Navigation from "../../components/Navigation/Navigation";
import Footer from "../../components/Footer/Footer";

const CalculatorDebt = () => {
  return (
    <div className={styles.page_wrapper}>
      <Navigation />
      <div className={styles.page_container}>Debt Calculator</div>
      <Footer />
    </div>
  );
};

export default CalculatorDebt;
