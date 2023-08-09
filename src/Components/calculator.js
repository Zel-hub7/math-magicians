import React from 'react';
import './calculator.css';
import CalculatorScreen from './CalculatorScreen';
import CalculatorButtons from './CalculatorButtons';

function Calculator() {
  return (
    <div className="calculator">
      <CalculatorScreen />
      <CalculatorButtons />
    </div>
  );
}

export default Calculator;
