import React, { useState } from 'react';
import './styles.css';

function App() {
  // State of the current button pressed
  const [input, setInput] = useState("");

  const handleClick = (e) => {
    // save this state in order to display in the output
    console.log(e.target.textContent);
    setInput(`${input} ${e.target.textContent}`);
  }

  return (
    <div className="calculator-container">
      <div id="display" className="output">{input}</div>
      <button id="clear" className="section" onClick={handleClick}>AC</button>
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
      <button id="equals" className="section" onClick={handleClick}>=</button>
      <button id="zero" className="number section" onClick={handleClick}>0</button>
      <button id="decimal" className="number section" onClick={handleClick}>.</button>
    </div>
  );
}

export default App;
