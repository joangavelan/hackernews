import React from 'react'
import './SectionController.scss'

const SectionController = ({ section, setSection }) => {
  
  const SECTIONS = {
    ALL: 'all',
    FAVES: 'faves'
  }

  return (
    <div className="SectionController">
      <div className="SectionController__buttons">
        <button 
          onClick={() => setSection(SECTIONS.ALL)} 
          className={`SectionController__button ${section === SECTIONS.ALL ? 'active' : ''}`}>
            All
        </button>
        <button 
          onClick={() => setSection(SECTIONS.FAVES)} 
          className={`SectionController__button ${section === SECTIONS.FAVES ? 'active' : ''}`}>
            My faves
        </button>
      </div>
    </div>
  )
}

export default SectionController