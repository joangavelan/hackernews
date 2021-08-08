import React from 'react'
import './Hit.scss'

const Hit = ({ hit }) => {
  return (
    <div className="Hit">
      {hit.story_title}
    </div>
  )
}

export default Hit
