import React from "react";
import Name from "./Name";
function NamesGrid({ allNames, setClickedName }) {
  return (
    <div className="container">
      <div className="row">
        {allNames.map((name) => (
          <Name name={name} key={name.id} setClickedName={setClickedName} />
        ))}
      </div>
    </div>
  );
}

export default NamesGrid;
