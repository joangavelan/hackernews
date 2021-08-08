import React from 'react'
import Hit from './Hit'

const Hits = ({ hits }) => {
  return (
    <div className="Hits" style={{margin: '10rem 0'}}>
      {hits.map(hit => <Hit hit={hit} />)}
    </div>
  )
}

export default Hits