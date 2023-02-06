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
        <label>
          name: <input value={newName} onChange={handleNameChange} />
        </label>
      </div>
      <div>
        <label>
          weight: <input value={newWeight} onChange={handleWeightChange} />
        </label>
      </div>
      <div>
        <label>
          price: <input value={newPrice} onChange={handlePriceChange} />
        </label>
      </div>
      <div>
        <label>
          roast: <input value={newRoast} onChange={handleRoastChange} />
        </label>
      </div>
      <div>
        <button type="submit">add</button>
      </div>
    </form>
  );
};

export default FavoriteForm;
