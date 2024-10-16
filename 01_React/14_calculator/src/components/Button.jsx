import React from 'react';

const Button = ({ text, onClickHandler, color = 'bg-zinc-500' }) => {
  const hoverColor = color === 'bg-red-500' ? 'hover:bg-red-700' :
                     color === 'bg-blue-500' ? 'hover:bg-blue-700' :
                     color === 'bg-green-500' ? 'hover:bg-green-700' :
                     'hover:bg-zinc-700';

  return (
    <button
      className={`${color} text-white border rounded px-4 py-2 text-xl transition duration-150 ease-in-out ${hoverColor}`}
      onClick={onClickHandler}
    >
      {text}
    </button>
  );
};

export default Button;
