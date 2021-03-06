import React, { useState } from 'react';
import './styles.css';
import * as math from 'mathjs';


function App() {
  // State of the current button pressed
  const [input, setInput] = useState("0");
  // state of decimal used true means you can still use your decimal
  const [decimalFlag, setDecimalFlag] = useState(true);

  const isNumber = (str) => {
    return !isNaN(str) && !isNaN(parseFloat(str));
  }

  const isZero = (str) => {
    if (str === '0') return true;
    return false;
  }
  // is this the first input of the calculator?
  const firstZeroInput = (str) => {
    if (input === '0' && str === '0') return true;
    return false;
  }

  // is this the first number after an operator?
  const firstZeroOperator = (str) => {
    if ((input[input.length - 2] === '+' ||
      input[input.length - 2] === '/' ||
      input[input.length - 2] === '*' ||
      input[input.length - 2] === '-') &&
      (input[input.length - 1] === '0') &&
      str === '0' &&
      input.length > 2) {
      return true;
    }
  }

  const isDecimal = (str) => {
    if (str === '.') {
      setDecimalFlag(false);
      return true;
    }
    return false;
  }

  // logic b2b decimal
  // if target text content is decimal and previous last string in input was decimal forgot it
  const b2bDecimal = (str) => {
    if (input[input.length - 1] === '.' && str === '.') {
      return true;
    }
  }

  // logic multiple decimal in number
  // have a flag to raise when a decimal is used
  // then flag down when an operator is used
  const multipleDecimals = (str) => {
    // console.log('flag of decimal:', decimalFlag);
    if (str === '.') {
      return !decimalFlag;
    }
  }

  const isOperator = (str) => {
    if (str === '+' ||
      str === '/' ||
      str === '*' ||
      str === '-') {
      // console.log("isOPERATOR: ", input);
      setDecimalFlag(true);
      return true;
    }
    return false;
  }

  const isMinus = (str) => {
    if (str === '-') return true;
    return false;
  }
  const thirdOperator = () => {
    if (isMinus(input[input.length - 1]) && isOperator(input[input.length - 2])) return true;
    return false;
  }

  const handleClick = (e) => {
    // First check if the given input is a 0
    if (isZero(e.target.textContent)) {
      if (firstZeroInput(e.target.textContent)) {
        setInput(`${input}`);
      } else if (firstZeroOperator(e.target.textContent)) {
        setInput(`${input}`);
      } else {
        setInput(`${input}${e.target.textContent}`);
      }
    } else if (isDecimal(e.target.textContent)) {
      if (b2bDecimal(e.target.textContent)) {
        setInput(`${input}`)
      } else if (multipleDecimals(e.target.textContent)) {
        setInput(`${input}`)
      } else {
        setInput(`${input}${e.target.textContent}`);
      }
    } else if (isOperator(e.target.textContent)) {
      // 3rd operator 
      if (thirdOperator()) {
        if (isMinus(e.target.textContent)) {
          setInput(`${input.slice(0, input.length - 1)}${e.target.textContent}`)
        } else {
          setInput(`${input.slice(0, input.length - 2)}${e.target.textContent}`)
        }
        // 2nd operator
      } else if (isOperator(input[input.length - 1])) {
        // if current isMinus and prev was a operator then you can add the minus to state display 
        if (isMinus(e.target.textContent)) {
          setInput(`${input}${e.target.textContent}`);
        } else {
          // clears previous operator and only adds the newest one
          setInput(`${input.slice(0, input.length - 1)}${e.target.textContent}`);
        }
      } else {
        setInput(`${input}${e.target.textContent}`);
      }
    } else if (isNumber(e.target.textContent)) {
      // allows for recently clicked 0s to be cleared with a 1-9 
      if (input[input.length - 1] === '0') {
        setInput(`${input.slice(0, input.length - 1)}${e.target.textContent}`);
      } else {
        setInput(`${input}${e.target.textContent}`);
      }
    } else {
      setInput(`${input}${e.target.textContent}`);
    }
  }

  const handleEval = () => {
    // console.log('EVAL INPUT:', input);
    setInput(math.evaluate(input));
  }

  const handleClear = () => {
    setDecimalFlag(true);
    setInput("0");
  }

  return (
    <div className="calculator-container">
      <div id="display" className="output">{input}</div>
      <button id="clear" className="section" onClick={handleClear}>AC</button>
      <button id="divide" className="operator section" onClick={handleClick}>/</button>
      <button id="multiply" className="operator section" onClick={handleClick}>*</button>
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
