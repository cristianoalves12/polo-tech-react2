import React, { useState } from "react";
import "./ButtonCounter.css";

export interface IButtonCounterProps {
    titleIncrement: string
    titleDecrement: string
    active?: boolean
}

const ButtonCounter = ({ titleDecrement, titleIncrement, active = false }: IButtonCounterProps) => {
    const [count, setCount] = useState(0);
    console.log(" ~ file: index.tsx:8 ~ButtonCounter ~ title:", titleIncrement);
    console.log(" ~ file: index.tsx:8 ~ButtonCounter ~ title:", titleIncrement);
    console.log(" ~ file: index.tsx:9 ~ButtonCounter ~ active:", active);
    
    const handleClickDecrement = () => {
        setCount(count - 1);
    };

    const handleClickIncrement = () => {
        setCount(count + 1);
    };

    return (
    <div className="buttons">
        <button onClick={handleClickDecrement}>{titleDecrement}</button>
        <h2>{count}</h2>
        <button onClick={handleClickIncrement}>{titleIncrement}</button>
    </div>
    );
};

export default ButtonCounter;
