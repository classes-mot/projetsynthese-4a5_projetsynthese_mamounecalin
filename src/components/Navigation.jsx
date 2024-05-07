import { Link } from "react-router-dom";

export default function Navigation() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/connexion">Connexion</Link>
        </li>
        <li>
          <Link to="/inscription">Inscription</Link>
        </li>
        <li>
          <Link to="/profile">Profile</Link>
        </li>
        <li>
          <Link to="/parametres">Paramètres</Link>
        </li>
        <li>
          <Link to="/artistes">Liste d'artistes</Link>
        </li>
        <li>
          <Link to="/oeuvre">Liste des oeuvres d'art</Link>
        </li>
      </ul>
    </nav>
  );
}
