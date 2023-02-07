import Dropdown from "./Dropdown";

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
  dropdownOptions,
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
          g
        </label>
      </div>
      <div>
        <label>
          price:
          <input type="number" value={newPrice} onChange={handlePriceChange} />
        </label>
        €
      </div>
      <div>
        {dropdownOptions && (
          <Dropdown
            label={"roast: "}
            options={dropdownOptions}
            value={newRoast}
            onChange={handleRoastChange}
          />
        )}
      </div>
      <div>
        <button type="submit">add</button>
      </div>
    </form>
  );
};

export default FavoriteForm;
