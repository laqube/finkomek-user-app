import React, { useState } from "react";
import ReactModal from "react-modal";
import styles from "./courseinfomodal.module.css";
import { API } from "../../api";

const CourseInfoModal = (props) => {
  let content = "no content";
  switch (props.courseId) {
    case 1:
      content = {
        name: "Қаржылық сауаттылықтың негіздері",
        description:
          "«Қаржылық сауаттылық негіздері» арқылы қаржыңызды бақылауға алыңыз. Бұл курс сізге бюджеттеуді меңгеруге, жеке қаржының маңыздылығын түсінуге, қаржылық тәуекелдерді бағалауға, қарызды басқаруға және инвестициялық стратегияларды зерттеуге мүмкіндік береді. Күшті қаржылық іргетас құрыңыз және қаржылық мақсаттарыңызға сенімді түрде жетіңіз.",
        image: "/assets/course_card1.svg",
        id: "6647e54c243782bb520174e1",
      };
      break;
    case 2:
      content = {
        name: "Қаржылық қауіпсіздік",
        description:
          "Цифрлық әлемде қаржыңызды қорғау үшін маңызды дағдыларды үйреніңіз. Бұл курс киберқауіпсіздік негіздерін, алаяқтықты анықтау және болдырмау, инвестициялық тәуекелдерді түсіну және қаржылық әл-ауқатыңызға қауіп төндіретін деструктивті қаржылық әдеттерді тануды қамтиды.",
        image: "/assets/course_card2.svg",
        id: "6655e98c2215a242c78740a1",
      };
      break;
    case 3:
      content = {
        name: "Балаларға арнағалан қаржылық сауаттылық курсы",
        description:
          "«Балаларға арналған қаржы» - бұл балаларды ақша әлемімен таныстыруға арналған көңілді және интерактивті курс. Балалар негізгі қаржылық түсініктерді, өз ақшаларын қалай басқару керектігін, бюджеттеу негіздерін және экономиканың қалай жұмыс істейтінін біледі. Бұл курстың соңында балалар өскенде ақылды қаржылық шешімдер қабылдау үшін берік негізге ие болады.",
        image: "/assets/course_card3.svg",
        id: "6655e9252215a242c78740a0",
      };
      break;

    default:
      break;
  }
  const handleBuyCourse = async (e) => {
    e.preventDefault();
    try {
      // await API.post(`/user/buy-course/${content.id}`).then(() =>
      //   alert("Курс сатып алынды")
      // );
      const msgData = {
        To: email,
        Msg: "Your custom message here",
      };
      await API.post(`/api/send-msg`, msgData);
      console.log("Message sent successfully");
    } catch (error) {
      alert("Курс Сатып алынбады :P");
    }
  };
  return (
    <ReactModal
      isOpen={props.isOpen}
      shouldCloseOnOverlayClick={true}
      onRequestClose={props.handleCloseModal}
    >
      <div className={styles.modal_container}>
        <div className={styles.modal_text_container}>
          <h1 className={styles.modal_text_h1}>{content.name}</h1>
          <p className={styles.modal_text_p}>{content.description}</p>
        </div>
        <div className={styles.modal_media_container}>
          <img
            className={styles.modal_media_img}
            src={content.image}
            alt="image"
          />
          <button className={styles.modal_buy_button} onClick={handleBuyCourse}>
            Сатып алу
          </button>
        </div>
      </div>
    </ReactModal>
  );
};

export default CourseInfoModal;
