import React from "react";

function SearchBar({ onTyping }) {
  return (
    <div className="note__search-wrapper">
      <input type="text" placeholder="Search" onChange={onTyping} />
    </div>
  );
}

export default SearchBar;
