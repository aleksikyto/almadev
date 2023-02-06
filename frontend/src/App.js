import { useEffect, useState } from "react";
import FavoriteForm from "./components/FavoriteForm";
import Favorites from "./components/Favorites";
import favoriteService from "./services/favorites";

const App = () => {
  const [favorites, setfavorites] = useState([]);
  const [newName, setNewName] = useState("");
  const [newWeight, setNewWeight] = useState("");
  const [newPrice, setNewPrice] = useState("");
  const [newRoast, setNewRoast] = useState("");

  useEffect(() => {
    favoriteService.getAll().then((response) => {
      setfavorites(response);
    });
  }, []);

  const deleteFavorite = (id) => {
    favoriteService.deleteFavorite(id);
    const updatedList = favorites.filter((favorite) => favorite._id !== id);
    setfavorites(updatedList);
  };

  const addFavorite = (event) => {
    event.preventDefault();

    const favoriteObject = {
      name: newName,
      weight: newWeight,
      price: newPrice,
      roast: newRoast,
    };

    if (!favorites.find((favorite) => favorite.name === newName)) {
      favoriteService
        .create(favoriteObject)
        .then((returnedFavorite) => {
          setfavorites(favorites.concat(returnedFavorite));
          setNewName("");
          setNewWeight("");
          setNewPrice("");
          setNewRoast("");
        })
        .catch((error) => console.log("error.message", error.message));
    }

    if (favorites.find((favorite) => favorite.name === newName)) {
      alert(`${newName} is already added to favorites.`);
    }
  };

  const handleNameChange = (event) => {
    setNewName(event.target.value);
  };

  const handleWeightChange = (event) => {
    setNewWeight(event.target.value);
  };

  const handlePriceChange = (event) => {
    setNewPrice(event.target.value);
  };

  const handleRoastChange = (event) => {
    setNewRoast(event.target.value);
  };

  return (
    <div>
      <h2>Coffee / Tea Favorites</h2>
      <FavoriteForm
        addFavorite={addFavorite}
        newName={newName}
        handleNameChange={handleNameChange}
        newWeight={newWeight}
        handleWeightChange={handleWeightChange}
        handlePriceChange={handlePriceChange}
        handleRoastChange={handleRoastChange}
      />
      <h2>Added favorites</h2>
      <Favorites favorites={favorites} deleteFavorite={deleteFavorite} />
    </div>
  );
};
export default App;
