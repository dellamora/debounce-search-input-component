import { useState } from "react";
import useDebounce from "./useDebounce";
import "./styles.css";

const SearchInput = ({ value, onChange }) => {
  const [displayValue, setDisplayValue] = useState(value);
  const debouncedChange = useDebounce(onChange, 500);

  function handleChange(e) {
    setDisplayValue(e.target.value);
    debouncedChange(e.target.value);
  }

  return (
    <input
      className="input-search"
      type="search"
      value={displayValue}
      onChange={handleChange}
      placeholder="what are you searching for?"
    />
  );
};

export default SearchInput;
