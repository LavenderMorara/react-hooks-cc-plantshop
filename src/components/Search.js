import React from 'react';

function Search({ searchTerm, setSearchTerm }) {
  function handleChange(event) {
    setSearchTerm(event.target.value);
  }

  return (
    <div className="searchbar">
      <input
        type="text"
        placeholder="Type a name to search..."
        value={searchTerm}
        onChange={handleChange}
      />
    </div>
  );
}

export default Search;
