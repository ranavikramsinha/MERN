import React from 'react';
import Button from './button';

const NumberPad = ({ displayVal, setDisplayVal }) => {
    const buttons = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "."];
    const operations = ["+", "-", "*", "/"];

    const addToDisplay = (text) => {
        setDisplayVal(displayVal + text);
    };

    const evaluateExpression = () => {
        try {
            const result = eval(displayVal);
            setDisplayVal(result.toFixed(3).toString());
        } catch {
            setDisplayVal("Error");
        }
    };

    return (
        <div className="flex flex-col items-center w-64 mt-3 p-4 bg-gray-900 rounded-lg shadow-md">
          <div className="text-3xl font-bold mb-3">Calculator</div>
            <input
                type="text"
                value={displayVal}
                onChange={(event) => setDisplayVal(event.target.value)}
                className="mb-4 text-2xl font-bold bg-gray-800 text-white border border-gray-700 rounded w-full p-2"
                placeholder="0"
            />
            <div className="grid grid-cols-4 gap-2 mb-4">
                <Button text="C" onClickHandler={() => setDisplayVal("")} color="bg-red-500" />
                {buttons.map((text) => (
                    <Button text={text} key={text} onClickHandler={() => addToDisplay(text)} />
                ))}
                {operations.map((text) => (
                    <Button text={text} key={text} onClickHandler={() => addToDisplay(text)} color="bg-blue-500" />
                ))}
                <Button text="=" onClickHandler={evaluateExpression} className="col-span-4" color="bg-green-500" />
            </div>
        </div>
    );
};

export default NumberPad;
