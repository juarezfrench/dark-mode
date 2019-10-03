import React, {useEffect} from 'react';
import {useLocalStorage} from './useLocalStorage'


const UseDarkMode = (initialValue) => {
// console.log('useDarkMode.js -> %cprops:', 'color: magenta', props)

       const [darkMode, setDarkMode] = useLocalStorage('darkModeKey');
    
            useEffect(() => {
        //   const body = document.body;
         
			const body = document.querySelector('body');
			body.classList.toggle('dark-mode');
		
          
        }, [darkMode]);
      
        return [darkMode, setDarkMode];
      };


export default UseDarkMode