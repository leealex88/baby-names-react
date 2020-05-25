import React from "react";

function GenderButtons({ setSelectedGender }) {
  return (
    <div className="buttons-container">
      <input
        type="radio"
        value="all"
        name="gender"
        className="all"
        onChange={(e) => setSelectedGender(e.target.value)}
      />
      All
      <input
        type="radio"
        value="m"
        name="gender"
        className="male"
        onChange={(e) => setSelectedGender(e.target.value)}
      />
      Male
      <input
        type="radio"
        value="f"
        name="gender"
        className="femal"
        onChange={(e) => setSelectedGender(e.target.value)}
      />
      Female
    </div>
  );
}

export default GenderButtons;
