import React, { useState } from "react";

const OeuvreAjoute = () => {
  const [valeursEntrees, setValeursEntrees] = useState({
    titre: "",
    description: "",
    artiste: "",
  });

  const handleInputChange = (identifier, value) => {
    setValeursEntrees((prevValue) => ({
      ...prevValue,
      [identifier]: value,
    }));
  };

  return (
    <div className="inscription-page">
      <form className="inscription-form">
        <h2 className="inscription-title">
          Ajout d'une nouvelle oeuvre à la liste générale
        </h2>
        <div className="form-group">
          <div className="input-group">
            <label htmlFor="titre" className="input-label">
              Titre de l'oeuvre
            </label>
            <input
              id="titre"
              type="text"
              name="titre"
              className="input-field"
              onChange={(event) =>
                handleInputChange("titre", event.target.value)
              }
              value={valeursEntrees.titre}
            />
          </div>

          <div className="input-group">
            <label htmlFor="description" className="input-label">
              Description
            </label>
            <input
              id="description"
              type="text"
              name="description"
              className="input-field"
              onChange={(event) =>
                handleInputChange("description", event.target.value)
              }
              value={valeursEntrees.description}
            />
          </div>

          <div className="input-group">
            <label htmlFor="artiste" className="input-label">
              Artiste
            </label>
            <input
              id="artiste"
              type="text"
              name="artiste"
              className="input-field"
              onChange={(event) =>
                handleInputChange("artiste", event.target.value)
              }
              value={valeursEntrees.artiste}
            />
          </div>
        </div>

        <p>
          <button className="inscription-button">Ajouter oeuvre</button>
        </p>
      </form>
    </div>
  );
};

export default OeuvreAjoute;
