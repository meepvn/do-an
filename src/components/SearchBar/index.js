import { useState } from 'react';

function SearchBar({ setFilterValue }) {
  const [inputValue, setInputValue] = useState('');
  return (
    <div className="searchBar">
      <input
        onChange={(e) => setInputValue(e.target.value)}
        value={inputValue}
      />
      <button onClick={() => setFilterValue(inputValue)}>Search</button>
    </div>
  );
}

export default SearchBar;
