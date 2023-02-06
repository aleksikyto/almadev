import Favorite from "./Favorite";

const Favorites = ({ favorites, deleteFavorite }) => {
  return (
    <div>
      {favorites?.length >= 0 &&
        favorites?.map((favorite, i) => {
          return (
            <div key={i}>
              <Favorite favorite={favorite} deleteFavorite={deleteFavorite} />
            </div>
          );
        })}
    </div>
  );
};

export default Favorites;
