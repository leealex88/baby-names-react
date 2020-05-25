import React from "react";
import Name from "./Name";
function NamesGrid({
  allNames,
  setClickedName,
  handleRemoveName,
  removedNameAddToFavorits,
}) {
  return (
    <div className="container">
      <div className="row">
        {allNames.map((name) => (
          <Name
            name={name}
            key={name.id}
            setClickedName={setClickedName}
            handleRemoveName={handleRemoveName}
            removedNameAddToFavorits={removedNameAddToFavorits}
          />
        ))}
      </div>
    </div>
  );
}

export default NamesGrid;
