import { useState } from "react";
import "./Connexion.css";

export default function Connexion() {
      // etat local pour stocker les valeurs des champs de saisie
  const [valeursEntrees, setValeursEntrees] = useState({
    nomArtiste: "",
    motDePasse: "",
  });
    // Fonction pour mette a jour les valeurs des champs de saisie
  const handleInputChange = (identifier, value) => {
    setValeursEntrees((prevValue) => ({
      ...prevValue,
      [identifier]: value,
    }));
  };

  return (
    <div className="container">
      <h2 className="connexion-title">Connexion</h2>
      <div className="form-group">
        <div className="input-group">
          <label htmlFor="nomArtiste" className="input-label">
            Nom d'artiste
          </label>
          <input
            id="nomArtiste"
            type="text"
            name="nomArtiste"
            className="input-field"
            onChange={(event) =>
              handleInputChange("nomArtiste", event.target.value)
            }
            value={valeursEntrees.nomArtiste}
          />
        </div>

        <div className="input-group">
          <label htmlFor="motDePasse" className="input-label">
            Mot de passe
          </label>
          <input
            id="motDePasse"
            type="password"
            name="motDePasse"
            className="input-field"
            onChange={(event) =>
              handleInputChange("motDePasse", event.target.value)
            }
            value={valeursEntrees.motDePasse}
          />
        </div>
      </div>
      <div className="button-group">
        <button className="button-connexion">Connexion</button>
        <button className="button-inscription">Inscription</button>
      </div>
    </div>
  );
}
