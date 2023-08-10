// CalculatorButtons.js

import React from 'react';

function CalculatorButtons({
  onNumberClick,
  onOperatorClick,
  onEqualClick,
  onClearClick,
  onDecimalClick,
  onToggleSign,
}) {
  return (
    <div className="calculator-grid">
      <button type="button" onClick={onClearClick}>AC</button>
      <button type="button" onClick={onToggleSign}>+/-</button>
      <button type="button" onClick={() => onOperatorClick('%')}>%</button>
      <button type="button" className="oper" onClick={() => onOperatorClick('/')}>/</button>
      <button type="button" onClick={() => onNumberClick(7)}>7</button>
      <button type="button" onClick={() => onNumberClick(8)}>8</button>
      <button type="button" onClick={() => onNumberClick(9)}>9</button>
      <button className="oper" onClick={() => onOperatorClick('*')}>*</button>
      <button type="button" onClick={() => onNumberClick(4)}>4</button>
      <button type="button" onClick={() => onNumberClick(5)}>5</button>
      <button type="button" onClick={() => onNumberClick(6)}>6</button>
      <button className="oper" onClick={() => onOperatorClick('-')}>-</button>
      <button type="button" onClick={() => onNumberClick(1)}>1</button>
      <button type="button" onClick={() => onNumberClick(2)}>2</button>
      <button type="button" onClick={() => onNumberClick(3)}>3</button>
      <button className="oper" onClick={() => onOperatorClick('+')}>+</button>
      <button className="span-two" onClick={() => onNumberClick(0)}>0</button>
      <button type="button" onClick={onDecimalClick}>.</button>
      <button type="button" className="oper" onClick={onEqualClick}>=</button>
    </div>
  );
}

export default CalculatorButtons;
