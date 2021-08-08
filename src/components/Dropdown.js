import React, { useState, useRef, useEffect } from 'react'
import angularImgSrc from '../assets/images/angular.png'
import reactImgSrc from '../assets/images/react.png'
import vueImgSrc from '../assets/images/vue.png'
import './Dropdown.scss'

const options = [
  {
    id: 1,
    value: 'angular',
    imgSrc: angularImgSrc
  },
  {
    id: 2,
    value: 'reactjs',
    imgSrc: reactImgSrc
  },
  {
    id: 3,
    value: 'vuejs',
    imgSrc: vueImgSrc
  }
]

const Dropdown = ({ filter, setFilter }) => {
  const [open, setOpen] = useState(false);

  let dropdownRef = useRef(null);

  //even listener to close the dropdown if the user clicks outside of it
  useEffect(() => {
    function handleClickOutside(e) {
      if(dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.addEventListener('mousedown', handleClickOutside);
  }, [])

  //when an option is selected the dropdown will be closed
  useEffect(() => {
    setOpen(false);
  }, [setFilter])

  return (
    <div ref={dropdownRef} className="Dropdown">
      {/* header */}
      <div className="Dropdown__header" onClick={() => setOpen(open => !open)}>
        <p>Select your news</p>
        <i className={`arrow ${open ? 'up' : 'down'}`} />
      </div>
      {/* options */}
      {open && <ul className="Dropdown__options">
        {options.map(option => (
          <li 
            key={option.id} 
            id={option.id}
            className={`Dropdown__option ${filter === option.value ? 'selected' : ''}`}
            onClick={() => setFilter(option.value)}
          > 
            <img src={option.imgSrc} alt={`${option.value}-icon`} />
            <p>{option.value}</p>
          </li>
        ))}
      </ul>}
    </div>
  )
}

export default Dropdown