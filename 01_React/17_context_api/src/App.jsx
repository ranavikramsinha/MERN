import React from 'react';
// import { createContext } from 'react';
// import { useState } from 'react';
import Title from './components/Title';
import ThemeToggle from './components/ThemeToggle';
// import ChangeTheme, { ThemeProvider } from './store/ChangeTheme';
import ThemeProvider from './store/ThemeProvider';


function App() {
  
  // const [theme, setTheme] = useState('light');

  // const toggleTheme = () => {
  //   setTheme(currentTheme => (currentTheme === 'light' ? 'dark' : 'light'));
  // }

  // const contextValue = {theme: theme, toggleTheme: toggleTheme,};
  
  // return (
  //   <>
  //     <ChangeTheme.Provider value={contextValue}>
  //     <div className='flex justify-center items-center gap-3 mt-3'>
  //       <Title />
  //       <ThemeToggle />
  //     </div>
  //     </ChangeTheme.Provider>
  //   </>
  // )

  return (
    <>
      <ThemeProvider>
      <div className='flex justify-center items-center gap-3 mt-3'>
        <Title />
        <ThemeToggle />
      </div>
      </ThemeProvider>
    </>
  )
}

export default App
