import React from "react";
import "../../image.css"; 
import { useParams } from "react-router-dom";
import { OEUVRES } from "../../data/oeuvres";

const OeuvreDetaille = () => {
  const oeuvreId = useParams().oeuvreId;
  const oeuvreSpecifique = OEUVRES.find((oeuvre) => oeuvre.id === oeuvreId);

  return (
    <div>
      <h2>{oeuvreSpecifique.titre}</h2>
      <div className="image-container">
        <img className="image" src={oeuvreSpecifique.image} alt={oeuvreSpecifique.titre} />
        <div className="image-overlay">
          <p>{oeuvreSpecifique.titre}</p>
        </div>
      </div>
      <h2>Description</h2>
      <p>{oeuvreSpecifique.description}</p>
      <h2>Artiste</h2>
      <p>{oeuvreSpecifique.artiste}</p>
    </div>
  );
};

export default OeuvreDetaille;
