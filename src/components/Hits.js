import React from 'react'
import Hit from './Hit'
import './Hits.scss'
import Loader from './Loader'

const Hits = ({ hits, faveSet }) => {
  return (
    <div className="Hits">
      {hits.length > 0 
      ? hits.map(hit => <Hit key={hit.id} hit={hit} faveSet={faveSet}/>)
      : <Loader />}
    </div>
  )
}

export default Hits