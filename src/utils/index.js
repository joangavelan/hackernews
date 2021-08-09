import { useState } from 'react'

//custom react hook for using and modifying items in local storage
export function useLocalStorage(key, initialValue) {
  
  const [storedValue, setStoredValue] = useState(() => {
    const item = window.localStorage.getItem(key)
    return item ? JSON.parse(item) : initialValue
  })

  const setValue = value => {
    try {
      setStoredValue(value);
      window.localStorage.setItem(key, JSON.stringify(value))
    } catch (error) {
      console.log(error)
    }
  }

  return [storedValue, setValue]
}

//shallow equal object comparission
export function shallowEqual(object1, object2) {
  const keys1 = Object.keys(object1);
  const keys2 = Object.keys(object2);

  if (keys1.length !== keys2.length) {
    return false;
  }

  for (let key of keys1) {
    if (object1[key] !== object2[key]) {
      return false;
    }
  }
  return true;
}

//func to verify if a hit (post) exist inside of the favHits
export function isFavorite(hit) {
  if(localStorage.getItem('faves') === null) return false;
  const favHits = JSON.parse(window.localStorage.getItem('faves'));
  //returns true or false depending on whether the hit is already inside of the favHits array or not
  return favHits.some(favHit => shallowEqual(favHit, hit));
}

//get time difference from a specific timezone
export function getTimeDifference(timezone) {
  const now = new Date();
  const created_at = new Date(timezone);
  
  const msPerMinute = 60 * 1000;
  const msPerHour = msPerMinute * 60;
  const msPerDay = msPerHour * 24;
  const msPerMonth = msPerDay * 30;
  const msPerYear = msPerDay * 365;

  const elapsed = now - created_at;

  let timeDiff = 0;

  if(elapsed <= 0) {
    return 'just now';
  }

  else if (elapsed < msPerMinute) {
    timeDiff = Math.round(elapsed/1000);   
    return `${timeDiff} ${timeDiff === 1 ? 'second ago' : 'seconds ago'}`
  }

  else if (elapsed < msPerHour) {
    timeDiff = Math.round(elapsed/msPerMinute);   
    return `${timeDiff} ${timeDiff === 1 ? 'minute ago' : 'minutes ago'}` 
  }

  else if (elapsed < msPerDay ) {
    timeDiff = Math.round(elapsed/msPerHour);   
    return `${timeDiff} ${timeDiff === 1 ? 'hour ago' : 'hours ago'}`   
  }

  else if (elapsed < msPerMonth) {
    timeDiff = Math.round(elapsed/msPerDay);   
    return `${timeDiff} ${timeDiff === 1 ? 'day ago' : 'days ago'}`  
  }

  else if (elapsed < msPerYear) {
    timeDiff = Math.round(elapsed/msPerMonth);   
    return `${timeDiff} ${timeDiff === 1 ? 'month ago' : 'months ago'}`  
  }

  else {
    timeDiff = Math.round(elapsed/msPerYear);   
    return `${timeDiff} ${timeDiff === 1 ? 'year ago' : 'years ago'}`   
  }
}

//checks if some value in an obj is either null or an empty string and returns the opposite indicating the object has all of its values correct
export const hasAllValues = (obj) => !Object.values(obj).some(value => value === null || value === '');