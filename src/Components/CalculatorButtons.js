import React from 'react';

function CalculatorButtons({
  onNumberClick,
  onOperatorClick,
  onEqualClick,
  onClearClick,
  onDecimalClick,
}) {
  const buttons = [
    'AC', '+/-', '%', '/',
    7, 8, 9, '*',
    4, 5, 6, '-',
    1, 2, 3, '+',
    '0', '.', '='
  ];

  return (
    <div className="calculator-grid">
      {buttons.map((button) => (
        <button
          key={button}
          type="button"
          className={`${
            typeof button === 'number'
              ? ''
              : button === '+' ||
                button === '-' ||
                button === '*' ||
                button === '/' ||
                button === '='
              ? 'oper'
              : ''
          } ${button === '0' ? 'span-two' : ''}`}
          onClick={
            typeof button === 'number'
              ? () => onNumberClick(button)
              : button === '='
              ? onEqualClick
              : button === '.'
              ? onDecimalClick
              : () => onOperatorClick(button)
          }
        >
          {button}
        </button>
      ))}
    </div>
  );
}

export default CalculatorButtons;
