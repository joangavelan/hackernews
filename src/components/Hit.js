import React, { useMemo } from 'react'
import './Hit.scss'
import clock from '../assets/images/clock.png'
import emptyHeart from '../assets/images/empty-heart.png'
import filledHeart from '../assets/images/filled-heart.png'
import { getTimeDifference } from '../utils'
import { hasAllValues } from '../utils'

const Hit = ({ hit }) => {

  const createdAt = useMemo(() => getTimeDifference(hit.created_at), [hit.created_at])

  return (
    hasAllValues(hit) && 
    <a className="Hit" href={hit.story_url} target="_blank">
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
        <img src={emptyHeart} alt="heart-icon" />
      </div>
    </a>
  )
}

export default Hit