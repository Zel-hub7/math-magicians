// Calculate.js
import { useState } from 'react';

export function useCalculatorLogic() {
  const [inputValue, setInputValue] = useState('0');
  const [previousValue, setPreviousValue] = useState(null);
  const [operator, setOperator] = useState(null);

  const handleNumberClick = (number) => {
    if (inputValue === '0' || inputValue === 'Error') {
      setInputValue(number.toString());
    } else {
      setInputValue(inputValue + number);
    }
  };

  const handleOperatorClick = (op) => {
    if (op === '%') {
      setOperator(op);
      setPreviousValue(inputValue);
      setInputValue('0');
    } else {
      setOperator(op);
      setPreviousValue(inputValue);
      setInputValue('0');
    }
  };

  const handleEqualClick = () => {
    if (previousValue === null || operator === null) return;

    const num1 = parseFloat(previousValue);
    const num2 = parseFloat(inputValue);

    let result;
    switch (operator) {
      case '+':
        result = num1 + num2;
        break;
      case '-':
        result = num1 - num2;
        break;
      case '*':
        result = num1 * num2;
        break;
      case '/':
        if (num2 !== 0) {
          result = num1 / num2;
        } else {
          setInputValue('Error');
          return;
        }
        break;
      case '%':
        result = num1 % num2;
        break;
      default:
        return;
    }

    setInputValue(result.toString());
    setPreviousValue(null);
    setOperator(null);
  };

  const handleClearClick = () => {
    setInputValue('0');
    setPreviousValue(null);
    setOperator(null);
  };

  const handleToggleSign = () => {
    setInputValue((prevValue) => (-parseFloat(prevValue)).toString());
  };

  const handleDecimalClick = () => {
    if (!inputValue.includes('.')) {
      setInputValue(inputValue + '.');
    }
  };

  return {
    inputValue,
    handleNumberClick,
    handleOperatorClick,
    handleEqualClick,
    handleClearClick,
    handleToggleSign,
    handleDecimalClick,
  };
}
