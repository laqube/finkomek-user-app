import React, { useEffect, useState } from "react";
import styles from "./expertscatalogue.module.css";
import Navigation from "../../components/Navigation/Navigation";
import Footer from "../../components/Footer/Footer";
import ExpertCatalogueCard from "../../components/ExpertCatalogueCard/ExpertCatalogueCard";
import axios from "axios";

const apiKey = import.meta.env.VITE_API_KEY;

const ExpertsCatalogue = () => {
  const [experts, setExperts] = useState([]);

  useEffect(() => {
    axios.get(`${apiKey}/expert/getAllExperts`).then((response) => {
      setExperts(response.data.experts);
    });
  }, []);

  return (
    <div className={styles.page_wrapper}>
      <Navigation />
      <h1 className={styles.page_heading}>
        Білікті мамандардың консультациясына жазылыңыз
      </h1>
      <div className={styles.page_container}>
        {experts.map((expert) => (
          <ExpertCatalogueCard item={expert} />
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default ExpertsCatalogue;
