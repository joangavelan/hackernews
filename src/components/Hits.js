import React from 'react'
import Hit from './Hit'

const Hits = ({ hits }) => {

  console.log(hits)
  
  return (
    <div className="Hits" style={{margin: '10rem 0'}}>
      {hits.map(hit => <Hit key={hit.id} hit={hit} />)}
    </div>
  )
}

export default Hits