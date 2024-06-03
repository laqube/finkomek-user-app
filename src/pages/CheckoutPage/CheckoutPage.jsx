import React from "react";
import styles from "./checkoutpage.module.css";
import { useTranslation } from "react-i18next";
import Navigation from "../../components/Navigation/Navigation";
import Footer from "../../components/Footer/Footer";

const CheckoutPage = () => {
  const { t } = useTranslation("translation");
  return (
    <div className={styles.page_wrapper}>
      <Navigation />
      <div className={styles.page_container}>
        <div className={styles.check_container}>
          <div className={styles.check_col1}>
            <div className={styles.col1_container}>
              <h1 className={styles.col1_heading}>
                {" "}
                {t("page_checkout.heading")}{" "}
              </h1>
              <p className={styles.col1_desc}>{t("page_checkout.paragraph")}</p>
              <h2 className={styles.col1_check_name}>Stuff name</h2>
              <p className={styles.col1_check_legal}>
                {t("page_checkout.legal")}
              </p>
              <div className={styles.col1_check_row1}>
                <p>{t("page_checkout.cost")}</p>
                <p>2990тг</p>
              </div>
              <div className={styles.col1_check_row2}>
                <p>{t("page_checkout.total")}</p>
                <p>2990тг</p>
              </div>
            </div>
          </div>
          <div className={styles.check_col2}>
            <div className={styles.col2_container}>
              <h1 className={styles.col2_heading}>
                {t("page_checkout.heading2")}
              </h1>
              <h5 className={styles.col2_input_heading}>
                {t("page_checkout.email")}
              </h5>
              <input
                className={styles.col2_input}
                type="email"
                placeholder="example@mail.com"
                // value={email}
              />
              <h5 className={styles.col2_input_heading}>
                {t("page_checkout.card")}
              </h5>
              <input
                className={styles.col2_input}
                type="text"
                placeholder="1234 5678 1234 5678"
              />
              <div className={styles.col2_row}>
                <div className={styles.col2_row_item}>
                  <h5 className={styles.col2_input_heading}>
                    {t("page_checkout.exp_date")}
                  </h5>
                  <input
                    className={styles.col2_input}
                    type="text"
                    placeholder="MM/YY"
                  />
                </div>
                <div className={styles.col2_row_item}>
                  <h5 className={styles.col2_input_heading}>CVV*</h5>
                  <input
                    className={styles.col2_input}
                    type="text"
                    placeholder="***"
                  />
                </div>
              </div>
              <button className={styles.col2_button}>
                {t("page_checkout.button_buy")}
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CheckoutPage;
