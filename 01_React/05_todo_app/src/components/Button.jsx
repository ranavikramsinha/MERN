import React from 'react';

const Button = ({btnType, btnText, handler}) => {

    if(btnType === 'primary') {
        return (
            <span>&nbsp;&nbsp;<button className='btn btn-primary' onClick={handler}>{btnText}</button></span>
        )
    } else if(btnType === 'danger') {
        return (
            <span>&nbsp;&nbsp;<button className='btn btn-danger' onClick={handler}>{btnText}</button></span>
        )
    }
    else if(btnType === 'success') {
        return (
            <span>&nbsp;&nbsp;<button className='btn btn-success' onClick={handler}>{btnText}</button></span>
        )
    }
}

export default Button;