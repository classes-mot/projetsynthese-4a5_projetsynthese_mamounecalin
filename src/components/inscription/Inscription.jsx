import React, { useState } from "react";
import "./Inscription.css";
import { useNavigate } from "react-router-dom"; 
import { ARTISTES } from "../../data/artistes"; 

export default function Inscription() {
  const navigate = useNavigate(); 

  const [valeursEntrees, setValeursEntrees] = useState({
    nomArtiste: "",
    motDePasse: "",
    motDePasseConfirmation: "",
    courriel: ""
  });

  const handleInputChange = (identifier, value) => {
    setValeursEntrees((prevValue) => ({
      ...prevValue,
      [identifier]: value
    }));
  };

  const authSubmitHandler = (event) => {
    event.preventDefault();

    // Créer un nouvel artiste
    const nouvelArtiste = {
      id: ARTISTES.length + 1, // nouvel id
      nom: valeursEntrees.nomArtiste,
      motDePasse: valeursEntrees.motDePasse,
      courriel: valeursEntrees.courriel
    };

    ARTISTES.push(nouvelArtiste); // Ajoute l'artiste à la liste des artistes

    // Rediriger vers la page de connexion après l'inscription
    navigate("/connexion");
  };

  return (
    <div className="inscription-page">
      <div className="clouds">
        <div className="cloud"></div>
        <div className="cloud"></div>
        <div className="cloud"></div>
      </div>
      <form onSubmit={authSubmitHandler} className="inscription-form">
        <h2 className="inscription-title">Inscription</h2>
        <div className="form-group">
          <div className="input-group">
            <label htmlFor="nomArtiste" className="input-label"> {/* Remplace nomUtilisateur par nomArtiste */}
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
          <button type="submit" className="inscription-button">
            S'inscrire
          </button>
        </p>
      </form>
    </div>
  );
}
