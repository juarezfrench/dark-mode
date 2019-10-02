import React, {useEffect,useState } from 'react'
import useLocalStorage from './useLocalStorage'

const useDarkMode = (key) => {

    const [darkMode, setDarkMode] = useLocalStorage('key')
    const body = document.querySelector('body');
    useEffect(() => {
    
            if (localStorage.getItem(key)) {
              return body.classList.add('dark-mode');
            } else {
                return body.classList.remove('dark-mode');
        }}, [key])
    
        return ([darkMode, setDarkMode])
            
        
    };


export default useDarkMode
  
          
      
      















