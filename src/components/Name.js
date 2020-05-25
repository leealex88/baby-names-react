import React from "react";

function Name({ name, handleRemoveName, removedNameAddToFavorits }) {
  return (
    <div
      onClick={() => {
        handleRemoveName(name.id);
        removedNameAddToFavorits(name.id);
      }}
      className={
        name.sex === "f"
          ? "femaleName"
          : null || name.sex === "m"
          ? "maleName"
          : null
      }
      key={name.id}
    >
      {name.name}
    </div>
  );
}
export default Name;
