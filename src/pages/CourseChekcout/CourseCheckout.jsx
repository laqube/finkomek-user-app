import React, { useState, useEffect } from "react";
import styles from "./coursecheckout.module.css";
import { useTranslation } from "react-i18next";
import { API } from "../../api";
import Navigation from "../../components/Navigation/Navigation";
import Footer from "../../components/Footer/Footer";
import { useParams, useNavigate } from "react-router";
import { Link } from "react-router-dom";

const CourseCheckout = () => {
  const { t } = useTranslation("translation");
  let { courseId } = useParams();
  const [content, setContent] = useState([]);
  const [email, setEmail] = useState("");
  const [user, setUser] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    if (courseId) {
      API.get(`/course/${courseId}`)
        .then((response) => {
          setContent(response.data.course);
        })
        .catch((error) => {
          console.error("Error fetching course:", error);
        });
    }
  }, [courseId]);

  useEffect(() => {
    async function fetchUser() {
      try {
        const response = await API.get("/user");
        setUser(response.data.user);
      } catch (error) {
        console.error("Қате орнады", error.response.data);
      }
    }
    fetchUser();
  }, []);

  const handleBuyCourse = async (e) => {
    e.preventDefault();
    try {
      await API.post(`/user/buy-course/${content.id}`);
      let message = `Сәлем, ${user.fname}! Финкөмек платформасынан ${content.name} сатып алғаның үшін рақмет. Оқуың сәтті өтсін <3 \n \nПривет, ${user.fname}! Спасибо за покупку ${content.name} на платформе Финкөмек. Удачи в обучении <3`;
      const msgData = {
        To: email,
        Msg: message,
      };
      console.log("This is the request body", msgData);
      await API.post(`/api/send-msg`, msgData);

      navigate("/success");
    } catch (error) {
      alert("Курс Сатып алынбады :P");
    }
  };

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
              <h2 className={styles.col1_check_name}>{content.name} </h2>
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
                value={email}
                onChange={(e) => setEmail(e.target.value)}
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
              <button className={styles.col2_button} onClick={handleBuyCourse}>
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

export default CourseCheckout;
