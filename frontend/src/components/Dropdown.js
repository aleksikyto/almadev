const Dropdown = ({ label, value, options, onChange }) => {
  return (
    <label>
      {label}
      {options.length > 0 && (
        <select value={value} onChange={onChange}>
          {options?.map((option, i) => (
            <option key={i} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      )}
    </label>
  );
};

export default Dropdown;
