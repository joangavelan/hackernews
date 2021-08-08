import React, { useState } from 'react'
import angularImgSrc from '../assets/images/angular.png'
import reactImgSrc from '../assets/images/react.png'
import vueImgSrc from '../assets/images/vue.png'
import './Dropdown.scss'

const options = [
  {
    id: 1,
    name: 'Angular',
    imgSrc: angularImgSrc
  },
  {
    id: 2,
    name: 'Reactjs',
    imgSrc: reactImgSrc
  },
  {
    id: 3,
    name: 'Vuejs',
    imgSrc: vueImgSrc
  }
]

const Dropdown = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="Dropdown">
      {/* header */}
      <div className="Dropdown__header">
        <p>Select your news</p>
        <i className={`arrow ${open ? 'up' : 'down'}`} />
      </div>
      {/* options */}
      <ul className="Dropdown__options">
        {options.map(option => (
          <li className="Dropdown__option" key={option.id} id={option.id}>
            <img src={option.imgSrc} alt={`${option.name}-icon`} />
            <p>{option.name}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Dropdown