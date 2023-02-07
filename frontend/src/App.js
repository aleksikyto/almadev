import { useEffect, useState } from "react";
import FavoriteForm from "./components/FavoriteForm";
import Favorites from "./components/Favorites";
import favoriteService from "./services/favorites";

const App = () => {
  const [favorites, setFavorites] = useState([]);
  const [newName, setNewName] = useState("");
  const [newWeight, setNewWeight] = useState("");
  const [newPrice, setNewPrice] = useState("");
  const [newRoast, setNewRoast] = useState("");

  useEffect(() => {
    favoriteService.getAll().then((response) => {
      setFavorites(response);
    });
  }, []);

  const deleteFavorite = (id) => {
    favoriteService.deleteFavorite(id);
    const updatedList = favorites.filter((favorite) => favorite.id !== id);
    setFavorites(updatedList);
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
      console.log("in");
      favoriteService
        .create(favoriteObject)
        .then((returnedFavorite) => {
          setFavorites(favorites.concat(returnedFavorite));
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

  // hard coded options for dropdown
  const dropdownOptions = [
    { label: "", value: "" },
    { label: "1", value: "1" },
    { label: "2", value: "2" },
    { label: "3", value: "3" },
    { label: "4", value: "4" },
    { label: "5", value: "5" },
  ];

  return (
    <div>
      <h2>Your Coffee / Tea Favorites List</h2>
      <FavoriteForm
        addFavorite={addFavorite}
        newName={newName}
        handleNameChange={handleNameChange}
        newWeight={newWeight}
        handleWeightChange={handleWeightChange}
        newPrice={newPrice}
        handlePriceChange={handlePriceChange}
        newRoast={newRoast}
        handleRoastChange={handleRoastChange}
        dropdownOptions={dropdownOptions}
      />
      <h2>Added favorites</h2>
      {favorites.length > 0 ? (
        <Favorites favorites={favorites} deleteFavorite={deleteFavorite} />
      ) : (
        <div>
          <p>No favorites added yet.</p>
        </div>
      )}
    </div>
  );
};
export default App;
