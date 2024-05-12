import { Link } from "react-router-dom";

const AjouteOeuvreBouton = () => {
  return (
    <div>
      <Link to="ajouter">
        <button>Ajouter Oeuvre</button>
      </Link>
    </div>
  );
};

export default AjouteOeuvreBouton;
