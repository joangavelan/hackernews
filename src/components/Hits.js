import React from "react";
import Hit from "./Hit";
import "./Hits.scss";
import Loader from "./Loader";
import Warning from "./Warning";

const Hits = ({ hits, faveSet, warningMessage, response }) => {
  return (
    <React.Fragment>
      {!response && <Loader />}
      {response && !hits.length > 0 && <Warning message={warningMessage} />}

      <div className="Hits">
        {hits.map((hit) => (
          <Hit key={hit.id} hit={hit} faveSet={faveSet} />
        ))}
      </div>
    </React.Fragment>
  );
};

export default Hits;