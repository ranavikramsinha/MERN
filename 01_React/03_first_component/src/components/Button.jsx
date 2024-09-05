import React from 'react';
import './Buttons.css'

const Button = ({btnType, btnText, handler}) => {

    if(btnType === 'success') {
        return (
            <span>&nbsp;&nbsp;<button className='white-button' onClick={handler}>{btnText}</button></span>
        )
    } else if(btnType === 'danger') {
        return (
            <span>&nbsp;&nbsp;<button className='red-button' onClick={handler}>{btnText}</button></span>
        )
    }
    else if(btnType === 'save') {
        return (
            <span>&nbsp;&nbsp;<button className='green-button' onClick={handler}>{btnText}</button></span>
        )
    }
}

export default Button;