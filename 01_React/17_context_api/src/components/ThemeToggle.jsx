import React, { useContext} from 'react';
import ChangeTheme from '../store/ChangeTheme';

const ThemeToggle = () => {

    const {theme, toggleTheme} = useContext(ChangeTheme);

  return (
    <div>
        <button className={` border rounded px-4 py-6 font-semibold ${theme === 'light' ? 'text-gray-900 bg-blue-300' : 'text-white bg-black'}`} onClick={toggleTheme}>Change Theme to {theme === 'light' ? 'Dark' : 'light'}</button>
    </div>
  )
}

export default ThemeToggle