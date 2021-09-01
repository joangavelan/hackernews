import React from "react";
import "./SectionController.scss";
import { NavLink } from "react-router-dom";

const SectionController = () => {
  return (
    <div className="SectionController">
      <div className="SectionController__links">
        <NavLink
          exact
          to="/"
          className="SectionController__link"
          activeClassName="SectionController__link active"
        >
          All
        </NavLink>

        <NavLink
          exact
          to="/faves"
          className="SectionController__link"
          activeClassName="SectionController__link active"
        >
          My faves
        </NavLink>
      </div>
    </div>
  );
};

export default SectionController;
