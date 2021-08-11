import React from 'react'
import Hit from './Hit'
import './Hits.scss'

const Hits = ({ hits, faveSet }) => {
  return (
    <div className="Hits">
      {hits.map(hit => <Hit key={hit.id} hit={hit} faveSet={faveSet}/>)}
    </div>
  )
}

export default Hits