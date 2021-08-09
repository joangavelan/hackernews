import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Header from './components/Header'
import SectionController from './components/SectionController';
import { shallowEqual, useLocalStorage } from './utils';
import Dropdown from './components/Dropdown';
import Hits from './components/Hits';

const App = () => {

  const [filter, setFilter] = useLocalStorage('filter', 'reactjs');
  const [page, setPage] = useState(0);
  const [section, setSection] = useLocalStorage('section', 'all');
  const [hits, setHits] = useState([]);
  const [favHits, setFavHits] = useLocalStorage('faves', []);

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

  //add and remove hit from favHits functionality
  function faveSet(e, hit) {
    //prevents the anchor tag to trigger the link
    e.preventDefault();
    //prevents getting null at the first save-to-fave interaction from the user
    if(localStorage.getItem('faves') === null) localStorage.setItem('faves', '[]')

    //we get the array stored in the local storage
    const favHits = JSON.parse(window.localStorage.getItem('faves'));
    //we try to find if the hit we are interacting with it's already inside of the favHits array, if so we return it to later on make use of its index, if not it will just return undefined
    const isFave = favHits.find(favHit => shallowEqual(favHit, hit));
    //we just add the hit to the array by pushing it
    const addToFaves = () => favHits.push(hit);
    //removing the hit from the favHits array by index
    const removeFromFaves = () => favHits.splice(favHits.indexOf(isFave), 1);

    //if the element exist we remove it from the array, if not we add it
    isFave ? removeFromFaves() : addToFaves();
    //we set our modified array to our favHits state and save it in the local storage at the same time by using our custom react hook
    setFavHits(favHits);
  }

  return (
    <div className="App">
      <Header />
      <main style={{maxWidth: '114rem', margin: '0 auto'}}>
        <SectionController section={section} setSection={setSection}/>
        <Dropdown section={section} filter={filter} setFilter={setFilter}/>
        <Hits hits={section === 'all' ? hits : favHits} faveSet={faveSet}/>
      </main>
    </div>
  )
}

export default App