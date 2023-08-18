import React from 'react';
import './calculator.css';
import PropTypes from 'prop-types';

function CalculatorScreen({ value }) {
  return (
    <input className="calculator-screen" type="text" value={value} disabled />
  );
}

CalculatorScreen.propTypes = {
  value: PropTypes.string.isRequired,
};

export default CalculatorScreen;
