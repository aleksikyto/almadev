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
          name:
          <input type="string" value={newName} onChange={handleNameChange} />
        </label>
      </div>
      <div>
        <label>
          weight:
          <input
            type="number"
            value={newWeight}
            onChange={handleWeightChange}
          />
        </label>
      </div>
      <div>
        <label>
          price:
          <input type="number" value={newPrice} onChange={handlePriceChange} />
        </label>
      </div>
      <div>
        <label>
          roast:
          <input type="number" value={newRoast} onChange={handleRoastChange} />
        </label>
      </div>
      <div>
        <button type="submit">add</button>
      </div>
    </form>
  );
};

export default FavoriteForm;
