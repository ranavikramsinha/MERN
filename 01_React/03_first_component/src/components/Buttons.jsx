import React from 'react'
import './Buttons.css'

export function ClickMeButton () {
    return (
        <span>&nbsp;&nbsp;<button className='white-button'>Click Me</button></span>
    )
};

export function DangerButton () {
    return (
        <span>&nbsp;&nbsp;<button className='red-button'>Delete</button></span>
    )
};

export function SuccessButton () {
    return (
        <span>&nbsp;&nbsp;<button className='green-button'>Save</button></span>
    )
};