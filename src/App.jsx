import React, { useEffect, useState } from 'react';
import './styles.css';
import * as math from 'mathjs';


function App() {
  // State of the current button pressed
  const [input, setInput] = useState("");

  const isNumber = (str) => {
    return !isNaN(str) && !isNaN(parseFloat(str));
  }

  const isZero = (str) => {
    // Check 2 things
    // is this the first input of the calculator?
    console.log('ZERO INPUT: ', input[input.length - 1]);
    console.log('ZERO TEXT: ', str);
    if (input === '0' && str === '0') return true;
    // is this the first number after an operator?
    if ((input[input.length - 2] === '+' ||
      input[input.length - 2] === '/' ||
      input[input.length - 2] === '*' ||
      input[input.length - 2] === '-')
      && (input[input.length - 1] === '0') &&
      str === '0') {
      return true;
    }
  }

  const handleClick = (e) => {
    // save this state in order to display in the output
    console.log("TARGET:", (e.target.textContent));
    // if the last element in string is zero dont add to input state
    console.log("INPUT:", input);
    // First check if the given input is a number
    if (isZero(e.target.textContent)) {
      setInput(`${input}`);
    } else if (isNumber(e.target.textContent) && input[input.length - 1] === '0') { // clears 0 when multiple 0s are pressed
      setInput(`${input.slice(0, input.length - 1)}${e.target.textContent}`);
    } else {
      setInput(`${input}${e.target.textContent}`)
    }
  }

  const handleEval = () => {
    console.log('EVAL INPUT:', input);
    setInput(math.evaluate(input));
  }

  const handleClear = () => {
    setInput("0");
  }

  return (
    <div className="calculator-container">
      <div id="display" className="output">{input}</div>
      <button id="clear" className="section" onClick={handleClear}>AC</button>
      <button id="divide" className="operator section" onClick={handleClick}>/</button>
      <button id="multiply" className="operator section" onClick={handleClick}>x</button>
      <button id="seven" className="number section" onClick={handleClick}>7</button>
      <button id="eight" className="number section" onClick={handleClick}>8</button>
      <button id="nine" className="number section" onClick={handleClick}>9</button>
      <button id="subtract" className="operator section" onClick={handleClick}>-</button>
      <button id="four" className="number section" onClick={handleClick}>4</button>
      <button id="five" className="number section" onClick={handleClick}>5</button>
      <button id="six" className="number section" onClick={handleClick}>6</button>
      <button id="add" className="operator section" onClick={handleClick}>+</button>
      <button id="one" className="number section" onClick={handleClick}>1</button>
      <button id="two" className="number section" onClick={handleClick}>2</button>
      <button id="three" className="number section" onClick={handleClick}>3</button>
      <button id="equals" className="section" onClick={handleEval}>=</button>
      <button id="zero" className="number section" onClick={handleClick}>0</button>
      <button id="decimal" className="number section" onClick={handleClick}>.</button>
    </div >
  );
}

export default App;
