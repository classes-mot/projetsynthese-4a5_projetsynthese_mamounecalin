import { Link } from "react-router-dom";

const ElementArtiste = (props) => {
  return (
    <div>
      <h2>{props.nom}</h2>
      <p>
        <Link to={`/artistes/${props.id}`}>
          <button>Consulter collection des oeuvres</button>
        </Link>
      </p>
      <p>
        <button>Supprimer</button>
      </p>
    </div>
  );
};

export default ElementArtiste;
