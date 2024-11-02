import React, { useState } from 'react'
import ChangeTheme from './ChangeTheme';

const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState('light');

    const toggleTheme = () => {
        setTheme(currentTheme => (currentTheme === 'light' ? 'dark' : 'light'));
    };
  
    const contextValue = { theme, toggleTheme };

    return (
        <ChangeTheme.Provider value={contextValue}>
            {children}
        </ChangeTheme.Provider>
    );
};

export default ThemeProvider