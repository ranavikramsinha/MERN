import React from 'react'

const RandomNumber = () => {
    const number = Math.floor(Math.random() * 100) + 1;
    return (
        <p>{number}</p>
    )
}

export default RandomNumber