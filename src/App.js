import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Header from './components/Header'
import SectionController from './components/SectionController';
import { useLocalStorage } from './utils';
import Dropdown from './components/Dropdown';

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
      </main>
    </div>
  )
}

export default App