import React from 'react'
import './SectionController.scss'

const SectionController = ({ currentSection, setCurrentSection }) => {
  
  const SECTIONS = {
    ALL: 'all',
    FAVES: 'faves'
  }

  return (
    <div className="SectionController">
      <div className="SectionController__buttons">
        <button 
          onClick={() => setCurrentSection(SECTIONS.ALL)} 
          className={`SectionController__button ${currentSection === SECTIONS.ALL ? 'active' : ''}`}>
            All
        </button>
        <button 
          onClick={() => setCurrentSection(SECTIONS.FAVES)} 
          className={`SectionController__button ${currentSection === SECTIONS.FAVES ? 'active' : ''}`}>
            My faves
        </button>
      </div>
    </div>
  )
}

export default SectionController