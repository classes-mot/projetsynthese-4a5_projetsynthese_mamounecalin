import "../../image.css";
import ElementOeuvre from "../elementOeuvre/ElementOeuvre";

const ListeOeuvres = (props) => {
  return (
    <ul>
      {props.items.map((oeuvre) => (
        <div key={oeuvre.id} className="oeuvre-item">
          <ElementOeuvre key={oeuvre.id} id={oeuvre.id} titre={oeuvre.titre} />
          <div className="image-container">
            <img className="image" src={oeuvre.image} alt={oeuvre.titre} />
            <div className="image-overlay">
              <p>{oeuvre.titre}</p>
            </div>
          </div>
        </div>
      ))}
    </ul>
  );
};

export default ListeOeuvres;
