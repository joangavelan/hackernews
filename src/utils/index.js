import { useState } from 'react'

//custom react hook for using and modifying items in local storage
export function useLocalStorage(key, initialValue) {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key)
      return item ? JSON.parse(item) : initialValue
    } catch(error) {
      return initialValue
    }
  })

  const setValue = value => {
    try {
      setStoredValue(value);
      window.localStorage.setItem(key, JSON.stringify(value))
    } catch(error) {
      console.log(error)
    }
  }
  return [storedValue, setValue]
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