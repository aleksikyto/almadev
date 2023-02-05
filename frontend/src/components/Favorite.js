const Favorites = ({ favorite, deletefavorite }) => {
  return (
    <li>
      {favorite.name} {favorite.weight}g
      <button
        onClick={() => {
          if (window.confirm("Delete this favorite?")) {
            deletefavorite(favorite.id);
          }
        }}
      >
        delete
      </button>
    </li>
  );
};

export default Favorites;
