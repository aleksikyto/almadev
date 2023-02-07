const Favorite = ({ favorite, deleteFavorite }) => {
  return (
    <li>
      {favorite?.name && <>Name: {favorite.name}, </>}
      {favorite?.weight && <>Weight: {favorite.weight}, </>}
      {favorite?.price && <>Price: {favorite.price}, </>}
      {favorite?.roast && <>Roast: {favorite.roast}, </>}
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
