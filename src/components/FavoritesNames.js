import React from "react";

function FavoritesNames({
  allFavoritesNames,
  handleRemoveFavoriteName,
  removedFavoriteNameAddToThe,
}) {
  return (
    <div className="favorites">
      <div className="row">
        Favorites:
        {allFavoritesNames.map((name, index) => (
          <p
            onClick={() => {
              handleRemoveFavoriteName(name.id);
              removedFavoriteNameAddToThe(name.id);
            }}
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
