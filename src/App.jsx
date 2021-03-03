import React from 'react';
import './styles.css';

function App() {
  return (
    <div className="calculator-container">
      <div id="display" className="output">DISPLAY</div>
      <button id="clear" className="section">AC</button>
      <button id="divide" className="operator section">/</button>
      <button id="multiply" className="operator section">x</button>
      <button id="seven" className="number section">7</button>
      <button id="eight" className="number section">8</button>
      <button id="nine" className="number section">9</button>
      <button id="subtract" className="operator section">-</button>
      <button id="four" className="number section">4</button>
      <button id="five" className="number section">5</button>
      <button id="six" className="number section">6</button>
      <button id="add" className="operator section">+</button>
      <button id="one" className="number section">1</button>
      <button id="two" className="number section">2</button>
      <button id="three" className="number section">3</button>
      <button id="equals" className="section">=</button>
      <button id="zero" className="number section">0</button>
      <button id="decimal" className="number section">.</button>
    </div>
  );
}

export default App;
