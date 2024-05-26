import React, { useState } from "react";
import styles from "./expertscatalogue.module.css";
import Navigation from "../../components/Navigation/Navigation";
import Footer from "../../components/Footer/Footer";
import ExpertCatalogueCard from "../../components/ExpertCatalogueCard/ExpertCatalogueCard";

const ExpertsCatalogue = () => {
  const [experts, setExperts] = useState([
    {
      name: "Zaur",
      url: "https://thumbs.dreamstime.com/b/boy-brushing-his-teeth-electric-tooth-brush-stock-image-grey-background-photo-little-258821294.jpg",
      experience: "2 years",
    },
    {
      name: "Miras",
      url: "https://img.freepik.com/premium-photo/hd-wallpaper-stock-image_783884-41694.jpg",
      experience: "3 years",
    },
    {
      name: "Kamal",
      url: "https://static3.bigstockphoto.com/5/8/2/large1500/285287722.jpg",
      experience: "29 years",
    },
    {
      name: "Abo",
      url: "https://static.vecteezy.com/system/resources/previews/027/548/110/non_2x/old-man-with-thumbs-up-ai-generative-photo.jpg",
      experience: "0.5 years",
    },
    {
      name: "Umar",
      url: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.pixabay.com%2Fphoto%2F2020%2F04%2F09%2F05%2F12%2Flaughing-5019740_1280.jpg&f=1&nofb=1&ipt=72f5f44b4630e92bebd3e28a49dffca10c8477b84b7345e50acd1db1aa4a0ada&ipo=images",
      experience: "35 years",
    },
  ]);

  return (
    <div className={styles.page_wrapper}>
      <Navigation />
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
