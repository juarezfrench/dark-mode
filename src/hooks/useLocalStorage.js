 import React, {useState} from 'react';
 
 
 const useLocalStorage = (key, initialValue) => {
    if (typeof key !== 'string') {
      throw new Error(
        'Invalid Params: useLocalStorage should receive a string for the first argument'
      );
    }
  
    const [storedValue, setStoredValue] = useState(() => {
      if (localStorage.getItem(key)) {
        return JSON.parse(window.localStorage.getItem(key));
      } else {
        window.localStorage.setItem(key, JSON.stringify(initialValue));
        return initialValue;
      }
    });
  
    const setValue = value => {
      // update storedValue state property
      setStoredValue(value);
      // update localStorage value
      window.localStorage.setItem(key, JSON.stringify(value));
    };
  
    return [storedValue, setValue];
  };
  export default  useLocalStorage