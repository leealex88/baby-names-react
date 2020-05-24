import React, { useState } from "react";
import babyNamesData from "../data/babyNamesData.json";
import NamesGrid from "./NamesGrid";
import SearchByName from "./SearchByName";
import "../grid.css";
function State() {
  const [allNames, setAllNames] = useState(babyNamesData);
  const [selectedInputValue, setSelectedInputValue] = useState("");
  const [clickedName, setClickedName] = useState("");

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

  // console.log(allNames);
  // console.log(clickedName);
  return (
    <div className="border">
      <SearchByName setSelectedInputValue={setSelectedInputValue} />
      <div>
        <p className="favorites">Favorites:</p>
      </div>
      <NamesGrid
        allNames={filterInputValues(allNames, selectedInputValue)}
        setClickedName={setClickedName}
      />
    </div>
  );
}

export default State;
