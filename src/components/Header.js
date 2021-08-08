import React from 'react'
import logo from '../assets/images/hacker-news.png'
import './Header.scss'

const Header = () => {
  return (
    <header className="Header">
      <div className="Header__content">
        <img className="Header__logo" src={logo} alt="hacker news logo" />
      </div>
    </header>
  )
}

export default Header