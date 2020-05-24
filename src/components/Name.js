import React from "react";

function Name({ name, setClickedName }) {
  return (
    <div
      onClick={() => setClickedName(name.id)}
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
