import React, { useState } from 'react';
import './calculator.css';
import calculate from '../logic/calculate';
import CalculatorScreen from './CalculatorScreen';
import CalculatorButtons from './CalculatorButtons';

function Calculator() {
  const [calculatorState, setCalculatorState] = useState({
    total: null,
    next: null,
    operation: null,
  });

  const handleButtonClick = (buttonName) => {
    const newCalculatorState = calculate(calculatorState, buttonName);
    setCalculatorState(newCalculatorState);
  };

  return (
    <div className="main-container">
      <div className="desc">
        <h1 className="title">LET&apos;S DO SOME MATH</h1>

      </div>
      <div className="calculator">
        <CalculatorScreen value={calculatorState.next || calculatorState.total || '0'} />
        <CalculatorButtons onButtonClick={handleButtonClick} />
      </div>

    </div>

  );
}

export default Calculator;
