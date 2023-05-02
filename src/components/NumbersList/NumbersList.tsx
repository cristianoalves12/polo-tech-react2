import React from "react";
import "./NumbersList.css";

const NumbersList = () => {
    const numbers = [1, 2, 3, 4, 5, 6];

    return (
        <div className="list">
            <h3>Lista de números impares</h3>
            <ul>
            {
                numbers.map((number, index) => {
                    let isImpar = number % 2 > 0;

                    if(isImpar){
                        return(
                            <li key={index}>{number}</li>
                        )
                    }
                })
            }
            </ul>
                
        </div>
    )
}

export default NumbersList;