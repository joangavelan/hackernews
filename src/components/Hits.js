import React from 'react'
import Hit from './Hit'
import './Hits.scss'

const Hits = ({ hits }) => {
  return (
    <div className="Hits">
      {hits.map(hit => <Hit key={hit.id} hit={hit} />)}
    </div>
  )
}

export default Hits