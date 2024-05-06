import { useState } from "react";

export default function ModifierProfile() {
  const [valeursEntrees, setValeursEntrees] = useState({
    nouveauNom: "",
    motDePasseNouveau: "",
    motDePasseNouveauConfirmation: "",
    nouveauCourriel: "",
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
        <h2 className="inscription-title">Modification de profil d Artiste</h2>
        <div className="form-group">
          <div className="input-group">
            <label htmlFor="nouveauNom" className="input-label">
              Nouveau nom
            </label>
            <input
              id="nouveauNom"
              type="text"
              name="nouveauNom"
              className="input-field"
              onChange={(event) =>
                handleInputChange("nouveauNom", event.target.value)
              }
              value={valeursEntrees.nouveauNom}
            />
          </div>

          <div className="input-group">
            <label htmlFor="motDePasseNouveau" className="input-label">
              Nouveau mot de passe
            </label>
            <input
              id="motDePasseNouveau"
              type="password"
              name="motDePasseNouveau"
              className="input-field"
              onChange={(event) =>
                handleInputChange("motDePasseNouveau", event.target.value)
              }
              value={valeursEntrees.motDePasseNouveau}
            />
          </div>

          <div className="input-group">
            <label
              htmlFor="motDePasseNouveauConfirmation"
              className="input-label"
            >
              Confirmer nouveau mot de passe
            </label>
            <input
              id="motDePasseNouveauConfirmation"
              type="password"
              name="motDePasseNouveauConfirmation"
              className="input-field"
              onChange={(event) =>
                handleInputChange(
                  "motDePasseNouveauConfirmation",
                  event.target.value
                )
              }
              value={valeursEntrees.motDePasseNouveauConfirmation}
            />
          </div>

          <div className="input-group">
            <label htmlFor="nouveauCourriel" className="input-label">
              Nouveau courriel électronique
            </label>
            <input
              id="nouveauCourriel"
              type="email"
              name="nouveauCourriel"
              className="input-field"
              onChange={(event) =>
                handleInputChange("nouveauCourriel", event.target.value)
              }
              value={valeursEntrees.nouveauCourriel}
            />
          </div>
        </div>

        <p>
          <button className="inscription-button">Modifier profil</button>
        </p>
      </form>
    </div>
  );
}
