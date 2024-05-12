import React from "react";
import { Link } from "react-router-dom";
import ListeOeuvres from "../components/listeOeuvres/ListeOeuvres";
import { OEUVRES } from "../data/oeuvres";
import "./ProfilePage.css";

const ProfilePage = ({ user }) => {
  console.log("nom de  Artiste:", user);

  return (
    <div className="profile-container">
      <div className="profile-content">
        <div className="profile-card">
          <img
            src="https://icones.pro/wp-content/uploads/2021/04/symbole-sourire-roxo.png"
            alt="Profile Avatar"
            className="profile-image"
          />

          <div className="profile-navigation">
            <Link to="/oeuvre">
              <button className="profile-button">Mes Oeuvres d'art</button>
            </Link>
          </div>

          <h2>Bienvenue</h2>

          <div className="profile-games-section">
            <h3>Mes Oeuvres d'art:</h3>
            <ListeOeuvres items={OEUVRES} />{" "}
            {/* Affichage de la liste des oeuvres */}
          </div>

          <div className="profile-footer">Footer de la page ProfilePage</div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
