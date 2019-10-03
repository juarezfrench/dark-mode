import React, {useEffect} from 'react'
import {useLocalStorage} from './useLocalStorage'

const useDarkMode = (key,darkMode) => {

    let [setDarkMode] = useLocalStorage(key,darkMode)
    const body = document.querySelector('body');
    useEffect(() => {
    
            if (localStorage.getItem()) {
              return body.classList.add('dark-mode');
            } else {
                return body.classList.remove('dark-mode');
        }}, [])
    
        return ([darkMode, setDarkMode])
            
        
    };


export default useDarkMode
  
          
      
      















