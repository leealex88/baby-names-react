import React from "react";

function FavoritesNames({ allFavoritesNames, handleRemovedFavoriteNames }) {
  return (
    <div className="favorites">
      <div className="row">
        Favorites:
        {allFavoritesNames.map((name, index) => (
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
        ))}
      </div>
    </div>
  );
}

export default FavoritesNames;
