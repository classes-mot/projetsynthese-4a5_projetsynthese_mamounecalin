import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { ARTISTES } from "../../data/artistes"; // Importe la liste des artistes
import "./Connexion.css";
import { AuthentificationContexte } from "../contexte/AuthentificationContext";

export default function Connexion() {
  const authentification = useContext(AuthentificationContexte);
  const [valeursEntrees, setValeursEntrees] = useState({
    nomArtiste: "",
    motDePasse: "",
  });

  const [artiste, setArtiste] = useState(null);

  const authSubmitHandler = (event) => {
    event.preventDefault();

    // Trouver l'artiste dans la liste des artistes
    const foundArtiste = ARTISTES.find(
      (artiste) =>
        artiste.nom === valeursEntrees.nomArtiste && // Utilise la clé nom pour rechercher l'artiste
        artiste.motDePasse === valeursEntrees.motDePasse
    );

    if (foundArtiste) {
      console.log("Artiste trouvé:", foundArtiste);
      setArtiste(foundArtiste);
      authentification.login();
    } else {
      console.log("Artiste non trouvé");
    }
  };

  return (
    <div className="container">
      <h2 className="connexion-title">Connexion</h2>
      <form onSubmit={authSubmitHandler} className="login">
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
                setValeursEntrees({
                  ...valeursEntrees,
                  nomArtiste: event.target.value,
                })
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
                setValeursEntrees({
                  ...valeursEntrees,
                  motDePasse: event.target.value,
                })
              }
              value={valeursEntrees.motDePasse}
            />
          </div>
        </div>
        <div className="button-group">
          <button className="button-connexion" type="submit">
            Connexion
          </button>
          <button className="button-inscription">
          <Link to="/inscription">Inscription</Link>
          </button>
          
        </div>
      </form>

      {/* Redirection vers la page de profil après la connexion réussie */}
      {artiste && <Link to="/profile">Aller vers le profil</Link>}
    </div>
  );
}
