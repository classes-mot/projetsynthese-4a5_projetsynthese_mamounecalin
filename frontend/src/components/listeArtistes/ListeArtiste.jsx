import ElementArtiste from "../elementArtiste/ElementArtiste";

const ListeArtistes = (props) => {
  return (
    <ul>
      {props.items.map((artiste) => (
        <ElementArtiste
          key={artiste.id}
          id={artiste.id}
          nom={artiste.nom}
        />
      ))}
    </ul>
  );
};

export default ListeArtistes;
