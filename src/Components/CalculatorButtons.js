import React from 'react';

function CalculatorButtons() {
  return (
    <div className="calculator-grid">
      <button type = 'button'>AC</button>
      <button type = 'button'>+/-</button>
      <button type = 'button'>%</button>
      <button type='button' className="oper">/</button>
      <button type = 'button'>7</button>
      <button type = 'button'>8</button>
      <button type = 'button'>9</button>
      <button className="oper">*</button>
      <button type = 'button'>4</button>
      <button type = 'button'>5</button>
      <button type = 'button'>6</button>
      <button className="oper">-</button>
      <button type = 'button'>1</button>
      <button type = 'button'>2</button>
      <button type = 'button'>3</button>
      <button className="oper">+</button>
      <button className="span-two">0</button>
      <button type = 'button'>.</button>
      <button type='button' className="oper">=</button>
    </div>
  );
}

export default CalculatorButtons;
