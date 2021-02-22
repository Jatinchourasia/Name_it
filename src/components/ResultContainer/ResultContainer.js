import React from "react";
import NameCard from "../NameCard/NameCard";
import "./ResultContainer.css";
const ResultContainer = ({ suggestedName }) => {
  // suggested name is list of string here converted into jsx element

  const suggestNameJsx = suggestedName.map((Names) => {
    return <NameCard key={Names} Names={Names} />;
  });
  return <div className="result-container">{suggestNameJsx}</div>;
};

export default ResultContainer;
