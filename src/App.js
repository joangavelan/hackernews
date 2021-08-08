import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Header from './components/Header'
import SectionController from './components/SectionController';
import { useLocalStorage } from './utils';
import Dropdown from './components/Dropdown';

const App = () => {

  const [filter, setFilter] = useState(useLocalStorage('filter', 'reactjs'));
  const [page, setPage] = useState(0);
  const [section, setSection] = useLocalStorage('currentSection', 'all');
  const [hits, setHits] = useState([]);
  const [favHits, setFavHits] = useState([]);

  return (
    <div className="App">
      <Header />
      <SectionController section={section} setSection={setSection}/>
    </div>
  )
}

export default App