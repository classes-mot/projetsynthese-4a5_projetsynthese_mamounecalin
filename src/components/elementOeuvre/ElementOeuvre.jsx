
import { Link } from "react-router-dom";

const ElementOeuvre = (props) => {
  return (
    <div>
      <h2>{props.titre}</h2>
      <p>
        <Link to={`/oeuvre/${props.id}`}>
          <button>Détails</button>
        </Link>
      </p>
      <p>
        <button>Supprimer</button>
      </p>
    </div>
  );
};

export default ElementOeuvre;
