import React, { useMemo } from 'react'
import './Hit.scss'
import clock from '../assets/images/clock.png'
import { getTimeDifference, isFavorite } from '../utils'
import { hasAllValues } from '../utils'
import emptyHeart from '../assets/images/empty-heart.png'
import filledHeart from '../assets/images/filled-heart.png'

const Hit = ({ hit, faveSet }) => {

  const createdAt = useMemo(() => getTimeDifference(hit.created_at), [hit.created_at])

  return (
    hasAllValues(hit) && 
    <a className="Hit" href={hit.story_url} target="_blank" rel="noreferrer">
      <div className="Hit__content">
        <div className="Hit__meta-data">
          <img src={clock} alt="clock-icon" /> 
          <p>{createdAt} by {hit.author}</p>
        </div>
        <p className="Hit__title">
          {hit.story_title}
        </p>
      </div>
      <div className="Hit__heart">
        <img src={isFavorite(hit) ? filledHeart : emptyHeart} alt="heart-icon" onClick={(e) => faveSet(e, hit)}/>
      </div>
    </a>
  )
}

export default Hit