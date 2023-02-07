import Favorite from "./Favorite";

const Favorites = ({ favorites, deleteFavorite }) => {
  return (
    <div className="favorites">
      {favorites?.length > 0 &&
        favorites?.map((favorite, i) => {
          return (
            <div key={i} className="favoritesItem">
              <Favorite favorite={favorite} deleteFavorite={deleteFavorite} />
            </div>
          );
        })}
    </div>
  );
};

export default Favorites;
