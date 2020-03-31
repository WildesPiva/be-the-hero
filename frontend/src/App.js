import React, { useState } from 'react'
import { ThemeProvider } from 'styled-components'
import { lightTheme, darkTheme } from './theme'
import { FiMoon, FiSun } from 'react-icons/fi'
import { GlobalStyles } from './global';

import './global.css'
import Routes from './routes'

function App() {

  const [theme, setTheme] = useState(localStorage.getItem('pageTheme'))
  const [icon, setIcon] = useState(<FiSun size={18} color="#e02041"/>)

  function handleTheme() {
    if (theme === 'light') {
        localStorage.setItem('pageTheme', 'dark')
        setTheme('dark')
        setIcon(<FiMoon size={18} color="#e02041"/>)
      // otherwise, it should be light
      } else {
        localStorage.setItem('pageTheme', 'light')
        setTheme('light')
        setIcon(<FiSun size={18} color="#e02041"/>)
      }
}

  return (
    <div>
      <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <GlobalStyles />
      <button onClick={handleTheme} type="button" id="theme-button">{icon}</button>
        <Routes/>
      </ThemeProvider>
    </div>
  );
}

export default App;
