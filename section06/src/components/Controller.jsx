import React from 'react';
import classNames from "classnames";

const Controller = ({onClickButton}) => {

    const buttonClass = classNames(
        "bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded ml-2"
    )

    return (
        <div className="p-4 bg-gray-100 rounded-md">
            <button 
                className={buttonClass}
                onClick={() => onClickButton(-1) }>-1</button>
            <button 
                className={buttonClass}
                onClick={() => onClickButton(-10) }>-10</button>
            <button 
                className={buttonClass}
                onClick={() => onClickButton(-100) }>-100</button>
            <button 
                className={buttonClass}
                onClick={() => onClickButton(+100) }>+100</button>
            <button 
                className={buttonClass}
                onClick={() => onClickButton(+10) }>+10</button>
            <button 
                className={buttonClass}
                onClick={() => onClickButton(+1) }>+1</button>
        </div>
    );
};

export default Controller;