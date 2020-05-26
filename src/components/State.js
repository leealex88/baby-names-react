import React, { useState } from "react";
import babyNamesData from "../data/babyNamesData.json";
import NamesGrid from "./NamesGrid";
import SearchByName from "./SearchByName";
import FavoritesNames from "./FavoritesNames";
import GenderButtons from "./GenderButtons";
import "../grid.css";

function State() {
  const [allNames, setAllNames] = useState(babyNamesData);
  const [selectedInputValue, setSelectedInputValue] = useState("");
  const [allFavoritesNames, setAllFavoritesNames] = useState([]);
  const [selectedGender, setSelectedGender] = useState("all");
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
    console.log("I have removed name", allNames);
  };

  const removedNameAddToFavorits = (id) => {
    const removedName = allNames.find((name) => name.id === id);
    // const newFavorites = [...allFavoritesNames, removedName];
    // const newFavorites = [...allFavoritesNames];
    // newFavorites.push(removedName);

    // setAllFavoritesNames(newFavorites);
    setAllFavoritesNames([...allFavoritesNames, removedName]);
    console.log("stop the debugger", allFavoritesNames);
  };
  const filterNamesBySearchInput = selectedInputValue
    ? filterInputValues(allNames, selectedInputValue)
    : allNames;

  const filterNamesByGenderRadiusButtons = (names, gender) => {
    return names.filter((name) => name.sex === gender);
  };

  const gendersToShow =
    selectedGender === "all"
      ? allNames
      : filterNamesByGenderRadiusButtons(allNames, selectedGender);
  console.log(allFavoritesNames);
  return (
    <div className="border">
      <div className="row">
        <SearchByName setSelectedInputValue={setSelectedInputValue} />
        <GenderButtons setSelectedGender={setSelectedGender} />
      </div>
      <FavoritesNames allFavoritesNames={allFavoritesNames} />
      <NamesGrid
        allNames={selectedInputValue ? filterNamesBySearchInput : gendersToShow}
        handleRemoveName={handleRemoveName}
        removedNameAddToFavorits={removedNameAddToFavorits}
      />
    </div>
  );
}

export default State;
