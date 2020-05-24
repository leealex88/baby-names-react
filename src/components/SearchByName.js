import React from "react";

function SearchByName({ setSelectedInputValue }) {
  return (
    <div className="input-container">
      <input
        onChange={(e) => setSelectedInputValue(e.target.value)}
        className="input"
        placeholder="search the name"
      ></input>
    </div>
  );
}

export default SearchByName;
