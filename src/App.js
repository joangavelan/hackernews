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

  useEffect(() => {
    async function getHits(filter, page) {
      const { data } = await axios.get(`https://hn.algolia.com/api/v1/search_by_date?query=${filter}&page=${page}&hitsPerPage=8`);

      const hits = [];

      data.hits.forEach(hit => {
        //we extract the wanted data and create a new obj with it
        const hitObj = {
          id: hit.objectID,
          author: hit.author,
          story_title: hit.story_title,
          story_url: hit.story_url,
          created_at: hit.created_at
        }
        //we push the new obj into our own array that will be set to our hits state
        hits.push(hitObj);
      })
      setHits(hits);
    }
    getHits(filter, page);
  }, [filter, page])

  return (
    <div className="App">
      <Header />
      <main style={{maxWidth: '114rem', margin: '0 auto'}}>
        <SectionController section={section} setSection={setSection}/>
        {section === 'all' && <Dropdown filter={filter} setFilter={setFilter}/>}
        <Hits hits={section === 'all' ? hits : favHits}/>
      </main>
    </div>
  )
}

export default App