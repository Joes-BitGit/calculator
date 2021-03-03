import React from 'react';
import style from './styles.css'

function App() {
  return (
    <div className="grid-container">
      <div id="display">DISPLAY</div>
      <button id="clear">AC</button>
      <button id="divide" className="operator">/</button>
      <button id="multiply" className="operator">X</button>
      <button id="seven" className="number">7</button>
      <button id="eight" className="number">8</button>
      <button id="nine" className="number">9</button>
      <button id="subtract" className="operator">-</button>
      <button id="four" className="number">4</button>
      <button id="five" className="number">5</button>
      <button id="six" className="number">6</button>
      <button id="add" className="operator">+</button>
      <button id="one" className="number">1</button>
      <button id="two" className="number">2</button>
      <button id="three" className="number">3</button>
      <button id="equals">=</button>
      <button id="zero" className="number">0</button>
      <button id="decimal" className="number">.</button>
    </div>
  );
}

export default App;