import { useParams } from "react-router-dom";
import ListeOeuvres from "../components/listeOeuvres/ListeOeuvres";
import { OEUVRES } from "../data/oeuvres";
import { ARTISTES } from "../data/artistes";

const CollectionAutreArtistePage = () => {
  const artisteId = useParams().artisteId;
  const artisteTrouve = ARTISTES.find((artiste) => artiste.id === artisteId);
  const collectionArtiste = artisteTrouve.listeJeux;
  const listeOeuvre = [];

  for (let i = 0; i < collectionArtiste.length; i++) {
    for (let j = 0; j < OEUVRES.length; j++) {
      if (collectionArtiste[i] === OEUVRES[j].id) {
        listeOeuvre.push(OEUVRES[j]);
      }
    }
  }

  return <ListeOeuvres items={listeOeuvre} />;
};

export default CollectionAutreArtistePage;
