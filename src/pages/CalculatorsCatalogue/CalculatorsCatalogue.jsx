import React from "react";
import styles from "./calculatorscatalogue.module.css";
import Navigation from "../../components/Navigation/Navigation";
import Footer from "../../components/Footer/Footer";

const CalculatorsCatalogue = () => {
  return (
    <div className={styles.page_wrapper}>
      <Navigation />
      <div className={styles.page_container}>
        <div className={styles.page_row}>
          <div
            className={styles.calcard}
            style={{ backgroundColor: "#0085A1" }}
          >
            <div className={styles.calcard_text}>
              <h1 className={styles.calcard_heading}>Таза құн </h1>
              <a className={styles.calcard_desc}>
                Жеке құныңызды есептеймін десеңіз
              </a>
            </div>
            <img
              className={styles.calcard_img}
              src="/assets/calc1.svg"
              alt="img"
            />
          </div>
          <div
            className={styles.calcard}
            style={{ backgroundColor: "#00343F" }}
          >
            <div className={styles.calcard_text}>
              <h1 className={styles.calcard_heading}> Қарызды өтеу</h1>
              <a className={styles.calcard_desc}>
                Ипотека, несие - бәрін есептеймін!
              </a>
            </div>
            <img
              className={styles.calcard_img}
              src="/assets/calc2.svg"
              alt="img"
            />
          </div>
        </div>
        <div className={styles.page_row}>
          <div
            className={styles.calcard}
            style={{ backgroundColor: "#FBB500" }}
          >
            <div className={styles.calcard_text}>
              <h1 className={styles.calcard_heading}>Жинақ мақсаттарының</h1>
              <a className={styles.calcard_desc}>
                Алдын ала жоспарлау есептеулерді қажет етеді
              </a>
            </div>
            <img
              className={styles.calcard_img}
              src="/assets/calc3.svg"
              alt="img"
            />
          </div>
          <div
            className={styles.calcard}
            style={{ backgroundColor: "#2A94F4" }}
          >
            <div className={styles.calcard_text}>
              <h1 className={styles.calcard_heading}>Зейнетақы жинақ</h1>
              <a className={styles.calcard_desc}>
                Сіздің үкіметіңіз сізді зейнетақымен қамтамасыз етті ме? -Есепке
                салайық!
              </a>
            </div>
            <img
              className={styles.calcard_img}
              src="/assets/calc4.svg"
              alt="img"
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CalculatorsCatalogue;
