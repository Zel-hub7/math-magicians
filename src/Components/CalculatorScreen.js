import React from 'react';
import './calculator.css';

function CalculatorScreen({value}) {
  return (
    <input className="calculator-screen" type="text" value={value} disabled />
  );
}

export default CalculatorScreen;
