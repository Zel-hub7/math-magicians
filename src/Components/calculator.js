// Calculator.js
import React from 'react';
import './calculator.css';
import CalculatorScreen from './CalculatorScreen';
import CalculatorButtons from './CalculatorButtons';
import { useCalculatorLogic } from '../logic/calculate';

function Calculator() {
  const {
    inputValue,
    handleNumberClick,
    handleOperatorClick,
    handleEqualClick,
    handleClearClick,
    handleToggleSign,
    handleDecimalClick,
  } = useCalculatorLogic();

  return (
    <div className="calculator">
      <CalculatorScreen value={inputValue} />
      <CalculatorButtons
        onNumberClick={handleNumberClick}
        onOperatorClick={handleOperatorClick}
        onEqualClick={handleEqualClick}
        onClearClick={handleClearClick}
        onToggleSign={handleToggleSign}
        onDecimalClick={handleDecimalClick}
      />
    </div>
  );
}

export default Calculator;
