import React, { Fragment } from "react";

function GenderButtons({ setSelectedGender }) {
  return (
    <Fragment>
      <div className="all">
        <input
          type="radio"
          value="all"
          name="gender"
          onChange={(e) => setSelectedGender(e.target.value)}
        />
        All
      </div>
      <div className="male">
        <input
          type="radio"
          value="m"
          name="gender"
          onChange={(e) => setSelectedGender(e.target.value)}
        />
        Male
      </div>
      <div className="femal">
        <input
          type="radio"
          value="f"
          name="gender"
          onChange={(e) => setSelectedGender(e.target.value)}
        />
        Femal
      </div>
    </Fragment>
  );
}

export default GenderButtons;
