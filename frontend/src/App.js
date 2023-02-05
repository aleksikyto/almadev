import { useEffect, useState } from "react";
import FavoriteForm from "./components/FavoriteForm";
import Favorites from "./components/Favorites";
import favoriteService from "./services/favorites";

const App = () => {
  const [favorites, setfavorites] = useState([]);
  const [newFavorite, setNewFavorite] = useState("");
  const [newName, setNewName] = useState("");
  const [newWeight, setNewWeight] = useState("");

  useEffect(() => {
    favoriteService.getAll().then((response) => {
      console.log("useEffect res", response);
      setfavorites(response);
    });
  }, []);

  const deleteFavorite = (id) => {
    favoriteService.deleteFavorite(id);
    const updatedList = favorites.filter((favorite) => favorite.id !== id);
    setfavorites(updatedList);
  };

  const handleNameChange = (event) => {
    setNewName(event.target.value);
  };

  const handleWeightChange = (event) => {
    setNewWeight(event.target.value);
  };

  return (
    <div>
      <h2>Coffee / Tea Favorites</h2>

      <h2>Added favorites</h2>
      <Favorites favorites={favorites} deleteFavorite={deleteFavorite} />
    </div>
  );
};
export default App;
