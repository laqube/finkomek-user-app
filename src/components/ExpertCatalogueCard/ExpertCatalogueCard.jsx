import React from "react";

const ExpertCatalogueCard = ({ item }) => {
  const { name, certificate, experience } = item;
  return (
    <div>
      ExpertCatalogueCard {name} {certificate} {experience}
    </div>
  );
};

export default ExpertCatalogueCard;
