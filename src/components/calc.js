import { evaluate } from 'mathjs';
import { useState } from "react";
import './calc.css';

const Calculator = () => {

    const [calc, setCalc] = useState("");
    const [res, setRes] = useState(0);
    const [back, setBack] = useState("");

    const buttons = ["AC", "C", "÷", "x", "9", "8", "7", "-", "6", "5", "4", "+", "3", "2", "1", "=", "0"]

    function EventHandler(input){
        if (input==="="){
            setBack("");
            setCalc(`${calc}${input}`);
            setRes(evaluate(calc));
            let result = evaluate(calc)
            setCalc(`${result}`);
        } else if (input==="+"){
            setBack(`${calc}`);
            setCalc(`${calc}${input}`)
        } else if (input==="-"){
            setBack(`${calc}`);
            setCalc(`${calc}${input}`)
        } else if (input==="x"){
            setBack(`${calc}`);
            setCalc(`${calc}*`)
        } else if (input==="÷"){
            setBack(`${calc}`);
            setCalc(`${calc}/`)
        } else if (input==="C"){
            setCalc(`${back}`)
        } else if (input==="AC"){
            setBack("");
            setCalc("");
            setRes(0);
        } else {
            setCalc(`${calc}${input}`)
        }
    }

    return(
        <div className="calculator">
            <div className="screen">
                <p className="topDisplay">{calc}</p>
                <h1 className="display">{res}</h1>
            </div>
            <div className="buttons">
                {buttons.map((but) => (
                    <button className="button" onClick={() => EventHandler(but)}>{but}</button>
                ))
                }
            </div>


        </div>
    )
}

export default Calculator