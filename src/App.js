import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Header from './components/Header'
import SectionController from './components/SectionController';
import { useLocalStorage } from './utils';
import Dropdown from './components/Dropdown';
import Hits from './components/Hits';

const App = () => {

  const [filter, setFilter] = useLocalStorage('filter', 'reactjs');
  const [page, setPage] = useState(0);
  const [section, setSection] = useLocalStorage('currentSection', 'all');
  const [hits, setHits] = useState([]);
  const [favHits, setFavHits] = useState([]);

  return (
    <div className="App">
      <Header />
      <main style={{maxWidth: '114rem', margin: '0 auto'}}>
        <SectionController section={section} setSection={setSection}/>
        <Dropdown filter={filter} setFilter={setFilter}/>
        <Hits hits={section === 'all' ? hits : favHits}/>
      </main>
    </div>
  )
}

export default App