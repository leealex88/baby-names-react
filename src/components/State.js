import React, { useState } from "react";
import babyNamesData from "../data/babyNamesData.json";
import NamesGrid from "./NamesGrid";
import SearchByName from "./SearchByName";
import "../grid.css";
function State() {
  const [allNames, setAllNames] = useState(babyNamesData);
  const [selectedInputValue, setSelectedInputValue] = useState("");
  const [favoritesNames, setFavoritesNames] = useState([]);

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
    setFavoritesNames([...favoritesNames, { removeName }]);
  };

  // const handleRemoveFavoriteName = (id) =>
  console.log("favoritesNames", favoritesNames);

  return (
    <div className="border">
      <SearchByName setSelectedInputValue={setSelectedInputValue} />
      <div className="favorites">
        <div className="row">
          Favorites:
          {favoritesNames.map((remove) =>
            remove.removeName.map((name, index) => (
              <p
                key={index}
                className={
                  name.sex === "f"
                    ? "femaleName"
                    : null || name.sex === "m"
                    ? "maleName"
                    : null
                }
              >
                {name.name}
              </p>
            ))
          )}
        </div>
      </div>
      <NamesGrid
        allNames={filterInputValues(allNames, selectedInputValue)}
        handleRemoveName={handleRemoveName}
        removedNameAddToFavorits={removedNameAddToFavorits}
      />
    </div>
  );
}

export default State;
