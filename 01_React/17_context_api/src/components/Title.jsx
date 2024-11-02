import React, { useContext} from 'react'
import ChangeTheme from '../store/ChangeTheme'

const Title = () => {

    const {theme} = useContext(ChangeTheme);
    console.log(theme);

  return (
    <div>
        <div className={`text-6xl font-bold cursor-pointer border rounded-lg p-2 ${theme === 'light' ? 'text-gray-900 bg-slate-200' : 'text-white bg-black'} `}>Dark Mode</div>
    </div>
  )
}

export default Title