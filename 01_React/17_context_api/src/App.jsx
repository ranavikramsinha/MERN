import React from 'react';
import { createContext } from 'react';
import { useState } from 'react';
import Title from './components/Title';
import ThemeToggle from './components/ThemeToggle';
import ChangeTheme from './store/ChangeTheme';

function App() {
  
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme(currentTheme => (currentTheme === 'light' ? 'dark' : 'light'));
  }
  
  return (
    <>
      <ChangeTheme.Provider value={{theme: theme, toggleTheme: toggleTheme,}}>
      <div className='flex justify-center items-center gap-3 mt-3'>
        <Title />
        <ThemeToggle />
      </div>
      </ChangeTheme.Provider>
    </>
  )
}

export default App
