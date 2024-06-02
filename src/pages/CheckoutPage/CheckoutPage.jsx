import React from "react";
import styles from "./checkoutpage.module.css";
import Navigation from "../../components/Navigation/Navigation";
import Footer from "../../components/Footer/Footer";

const CheckoutPage = () => {
  return (
    <div className={styles.page_wrapper}>
      <Navigation />
      <div className={styles.page_container}>
        <div className={styles.check_container}>
          <div className={styles.check_col1}>
            <div className={styles.col1_container}>
              <h1 className={styles.col1_heading}>Тапсырыс жасау</h1>
              <p className={styles.col1_desc}>тапсырыс мәліметтері</p>
              <h2 className={styles.col1_check_name}>Stuff name</h2>
              <p className={styles.col1_check_legal}>
                Егер де қаражатты қайтарамын десеңіз, сатып алу күнінен бастап
                14 күн ішінде amigomikos@gmail.com мекенжайына хабарласып, толық
                аты-жөніңізді, тапсырыс нөмірін, сатып алу күнін және қайтару
                себебін көрсете отырып, қайтару сұрауын жіберіңіз.
              </p>
              <div className={styles.col1_check_row1}>
                <p>Курс бағасы</p>
                <p>2990тг</p>
              </div>
              <div className={styles.col1_check_row2}>
                <p>Төлем құны</p>
                <p>2990тг</p>
              </div>
            </div>
          </div>
          <div className={styles.check_col2}>
            <div className={styles.col2_container}>
              <h1 className={styles.col2_heading}>Картамен төлеу</h1>
              <h5 className={styles.col2_input_heading}>Пошта*</h5>
              <input
                className={styles.col2_input}
                type="email"
                placeholder="example@mail.com"
                // value={email}
              />
              <h5 className={styles.col2_input_heading}>Карта нөмірі*</h5>
              <input
                className={styles.col2_input}
                type="text"
                placeholder="1234 5678 1234 5678"
              />
              <div className={styles.col2_row}>
                <div className={styles.col2_row_item}>
                  <h5 className={styles.col2_input_heading}>Мерзімі*</h5>
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
              <button className={styles.col2_button}>Сатып алу</button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CheckoutPage;
