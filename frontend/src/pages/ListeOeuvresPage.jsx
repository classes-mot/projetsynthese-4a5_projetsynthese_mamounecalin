import AjouteOeuvreBouton from "../components/ajouteOeuvreBouton/AjouteOeuvreBouton";
import ListeOeuvres from "../components/listeOeuvres/ListeOeuvres";
import { OEUVRES } from "../data/oeuvres";

const ListeOeuvresPage = () => {
  return (
    <>
      <ListeOeuvres items={OEUVRES} />
      <AjouteOeuvreBouton />
    </>
  );
};

export default ListeOeuvresPage;
