const Favorite = ({ favorite, deleteFavorite }) => {
  return (
    <li>
      {favorite.name} {favorite.weight}g
      <button
        onClick={() => {
          if (window.confirm("Delete this favorite?")) {
            deleteFavorite(favorite.id);
          }
        }}
      >
        delete
      </button>
    </li>
  );
};

export default Favorite;
