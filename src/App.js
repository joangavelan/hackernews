import React, { useState, useEffect } from 'react'
import Header from './components/Header'
import SectionController from './components/SectionController';
import { getHits, shallowEqual, useLocalStorage } from './utils';
import Dropdown from './components/Dropdown';
import Hits from './components/Hits';
import Pagination from './components/Pagination';
import Body from './components/Body'
import Loader from './components/Loader'
import Warning from './components/Warning'

const App = () => {

  const [filter, setFilter] = useLocalStorage('filter', 'reactjs');
  const [response, setResponse] = useState(true);
  const [page, setPage] = useState(1);
  const [section, setSection] = useLocalStorage('section', 'all');
  const [hits, setHits] = useState([]);
  const [favHits, setFavHits] = useLocalStorage('faves', []);

  useEffect(() => {
    setHits([]);
    setResponse(false);

    async function fetchHits(filter, page) {
      const hits = await getHits(filter, page);
      if(hits.length > 0) setHits(hits);      
      setResponse(true);
    }
    
    fetchHits(filter, page);
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
        <Body>
          {section === 'all' && !response && <Loader />}
          {section === 'all' && response && !hits.length > 0 && <Warning />}
            <Hits 
              hits={section === 'all' ? hits : favHits} 
              faveSet={faveSet} 
              response={response}/>
        </Body>
        <Pagination section={section} page={page} setPage={setPage} response={response}/>
      </main>
    </div>
  )
}

export default App