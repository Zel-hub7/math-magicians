import React from 'react';
import PropTypes from 'prop-types';

function CalculatorButtons({ onButtonClick }) {
  const handleClick = (buttonName) => {
    onButtonClick(buttonName);
  };
  return (
    <div className="calculator-grid">
      <button type="button" onClick={() => handleClick('AC')}>AC</button>
      <button type="button" onClick={() => handleClick('+/-')}>+/-</button>
      <button type="button" onClick={() => handleClick('%')}>%</button>
      <button type="button" onClick={() => handleClick('÷')} className="oper">÷</button>
      <button type="button" onClick={() => handleClick('7')}>7</button>
      <button type="button" onClick={() => handleClick('8')}>8</button>
      <button type="button" onClick={() => handleClick('9')}>9</button>
      <button type="button" className="oper" onClick={() => handleClick('x')}>x</button>
      <button type="button" onClick={() => handleClick('4')}>4</button>
      <button type="button" onClick={() => handleClick('5')}>5</button>
      <button type="button" onClick={() => handleClick('6')}>6</button>
      <button type="button" className="oper" onClick={() => handleClick('-')}>-</button>
      <button type="button" onClick={() => handleClick('1')}>1</button>
      <button type="button" onClick={() => handleClick('2')}>2</button>
      <button type="button" onClick={() => handleClick('3')}>3</button>
      <button type="button" className="oper" onClick={() => handleClick('+')}>+</button>
      <button type="button" className="span-two" onClick={() => handleClick('0')}>0</button>
      <button type="button" onClick={() => handleClick('.')}>.</button>
      <button type="button" onClick={() => handleClick('=')} className="oper">=</button>
    </div>
  );
}

CalculatorButtons.propTypes = {
  onButtonClick: PropTypes.func.isRequired,
};

export default CalculatorButtons;
