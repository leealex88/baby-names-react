import React, { useState } from "react";
import babyNamesData from "../data/babyNamesData.json";
import NamesGrid from "./NamesGrid";
import SearchByName from "./SearchByName";
import FavoritesNames from "./FavoritesNames";
import "../grid.css";
function State() {
  const [allNames, setAllNames] = useState(babyNamesData);
  const [selectedInputValue, setSelectedInputValue] = useState("");
  const [allFavoritesNames, setAllFavoritesNames] = useState([]);

  // console.log(typeof clickedName);
  const inAlphabeticOrder = allNames.sort(sortArray);

  function sortArray(a, b) {
    const nameA = a.name;
    const nameB = b.name;
    if (nameA < nameB) {
      return -1;
    }
    if (nameA > nameB) {
      return 1;
    }
    return 0;
  }
  const filterInputValues = (names, value) => {
    return names.filter((name) =>
      name.name.toLowerCase().includes(value.toLowerCase())
    );
  };

  const handleRemoveName = (id) => {
    setAllNames(allNames.filter((name) => name.id !== id));
  };

  const removedNameAddToFavorits = (id) => {
    const removeName = allNames.filter((name) => name.id === id);
    setAllFavoritesNames([...allFavoritesNames, { removeName }]);
  };
  const filterNamesBySearchInput = allNames
    ? filterInputValues(allNames, selectedInputValue)
    : null;

  return (
    <div className="border">
      <SearchByName setSelectedInputValue={setSelectedInputValue} />
      <FavoritesNames allFavoritesNames={allFavoritesNames} />
      <NamesGrid
        allNames={filterNamesBySearchInput}
        handleRemoveName={handleRemoveName}
        removedNameAddToFavorits={removedNameAddToFavorits}
      />
    </div>
  );
}

export default State;
