const FavoriteForm = ({
  addFavorite,
  newName,
  handleNameChange,
  newWeight,
  handleWeightChange,
  newPrice,
  handlePriceChange,
  newRoast,
  handleRoastChange,
}) => {
  // modify, so roast isn't needed for tea & add all required sections

  return (
    <form onSubmit={addFavorite}>
      <div>
        name: <input value={newName} onChange={handleNameChange} />
      </div>
      <div>
        weight: <input value={newWeight} onChange={handleWeightChange} />
      </div>
      <div>
        <button type="submit">add</button>
      </div>
    </form>
  );
};

export default FavoriteForm;
