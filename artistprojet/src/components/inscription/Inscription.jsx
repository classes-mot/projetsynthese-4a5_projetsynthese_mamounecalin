import { useState } from "react";
import "./Inscription.css";

export default function Inscription() {
  const [valeursEntrees, setValeursEntrees] = useState({
    nomArtiste: "",
    motDePasse: "",
    motDePasseConfirmation: "",
    courriel: "",
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
        
        <h2 className="inscription-title">Inscription</h2>
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

          
          <div className="input-group">
            <label htmlFor="courriel" className="input-label">
              Courriel électronique
            </label>
            <input
              id="courriel"
              type="email"
              name="courriel"
              className="input-field"
              onChange={(event) =>
                handleInputChange("courriel", event.target.value)
              }
              value={valeursEntrees.courriel}
            />
          </div>
        </div>

        
        <p>
          <button className="inscription-button">S'inscrire</button>
        </p>
      </form>
    </div>
  );
}
