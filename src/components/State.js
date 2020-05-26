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
  const [removedFavoritesNames, setRemovedFavoriteNames] = useState([]);
  const [selectedGender, setSelectedGender] = useState("all");

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

  const handleRemoveFavoriteName = (id) => {
    const removedFav = allFavoritesNames.filter((name) => name.id !== id);
    setAllFavoritesNames(removedFav);
  };

  const removedFavoriteNameAddToThe = (id) => {
    const removedFavorName = allFavoritesNames.find((name) => name.id === id);
    setAllNames([...allNames, removedFavorName]);
    console.log("removedFav", removedFavorName);
  };
  const removedNameAddToFavorits = (id) => {
    const removedName = allNames.find((name) => name.id === id);
    setAllFavoritesNames([...allFavoritesNames, removedName]);
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

  console.log("allFavoritesNames", allFavoritesNames);
  console.log("removedFavoritesNames", removedFavoritesNames);

  return (
    <div className="border">
      <div className="row">
        <SearchByName setSelectedInputValue={setSelectedInputValue} />
        <GenderButtons setSelectedGender={setSelectedGender} />
      </div>
      <FavoritesNames
        allFavoritesNames={allFavoritesNames}
        handleRemoveFavoriteName={handleRemoveFavoriteName}
        removedFavoriteNameAddToThe={removedFavoriteNameAddToThe}
      />
      <NamesGrid
        allNames={selectedInputValue ? filterNamesBySearchInput : gendersToShow}
        handleRemoveName={handleRemoveName}
        removedNameAddToFavorits={removedNameAddToFavorits}
      />
    </div>
  );
}

export default State;
