import ListeArtistes from "../components/listeArtistes/ListeArtiste";
import { ARTISTES } from "../data/artistes";

const ListeArtistesPage = () => {
  return <ListeArtistes items={ARTISTES} />;
};

export default ListeArtistesPage;
