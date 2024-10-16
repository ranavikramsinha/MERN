import React from 'react'

const Display = ({textToShow}) => {
  return (
    <>
    {textToShow ? <div className='mt-3'>{textToShow}</div> : <div className='mt-3'>0</div>}
    </>
  )
}

export default Display