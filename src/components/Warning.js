import React from 'react'
import './Warning.scss'

const Warning = ({ message }) => {
  return (
    <div className="Warning">
      <p className="Warning__message">{message}</p>
    </div>
  )
}

export default Warning