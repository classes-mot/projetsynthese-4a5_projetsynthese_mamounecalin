import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthentificationContexte } from "./contexte/AuthentificationContext";

export default function Navigation() {
  const auth = useContext(AuthentificationContexte);
  return (
    <nav className="navbar">
      <div className="container">
        <ul>
          <li>
            <Link to="/connexion">Connexion</Link>
          </li>
          <li>
            <Link to="/inscription">Inscription</Link>
          </li>
          {auth.isLoggedIn && ( 
            <>
              <li>
                <Link to="/profile">Profile</Link>
              </li>
              <li>
                <Link to="/parametres">Paramètres</Link>
              </li>
            </>
          )}
          <li>
            <Link to="/artistes">Liste d'artistes</Link>
          </li>
          <li>
            <Link to="/oeuvre">Liste des oeuvres d'art</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
