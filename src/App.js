import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Header from './components/Header'
import SectionController from './components/SectionController';
import { useLocalStorage } from './utils';

const App = () => {

  const [filter, setFilter] = useState('reactjs');
  const [page, setPage] = useState(0);
  const [currentSection, setCurrentSection] = useLocalStorage('currentSection', 'all');
  const [hits, setHits] = useState([]);
  const [favHits, setFavHits] = useState([]);

  return (
    <div className="App">
      <Header />
      <SectionController 
        currentSection={currentSection}
        setCurrentSection={setCurrentSection}/>
    </div>
  )
}

export default App