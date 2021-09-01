import React, { useMemo } from "react";
import "./Hit.scss";
import clock from "../assets/images/clock.png";
import emptyHeart from "../assets/images/empty-heart.png";
import filledHeart from "../assets/images/filled-heart.png";
import { getTimeDifference, isFavorite } from "../utils";

const Hit = ({ hit, faveSet }) => {
  const createdAt = useMemo(
    () => getTimeDifference(hit.created_at),
    [hit.created_at]
  );

  return (
    <a className="Hit" href={hit.story_url} target="_blank" rel="noreferrer">
      <div className="Hit__content">
        <div className="Hit__meta-data">
          <img src={clock} alt="clock-icon" />
          <p>
            {createdAt} by {hit.author}
          </p>
        </div>
        <p className="Hit__title">{hit.story_title}</p>
      </div>
      <div className="Hit__heart-container">
        <img
          className="Hit__heart"
          alt="heart-icon"
          src={isFavorite(hit) ? filledHeart : emptyHeart}
          onClick={(e) => faveSet(e, hit)}
        />
      </div>
    </a>
  );
};

export default Hit;
