import React from 'react'

const DynamicComponent = () => {

    const studentName = 'Aryan';
    const marks = [80, 81, 82, 83, 85];
    const sum = marks.reduce((acc, curr) => acc + curr, 0);
    const percentage = sum / marks.length;

    return (
        <p>{studentName} scored {percentage}% marks in this exam.</p>
    )
}

export default DynamicComponent;