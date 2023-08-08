// Calculator.js
import React from "react";
import "./calculator.css"; // Import the CSS file

function Button({ children, isOperation, isDouble }) {
  const buttonClassName = isOperation ? "operation-button" : "";
  const buttonStyle = isDouble ? { gridColumn: "span 2" } : {};
  return (
    <button className={buttonClassName} style={buttonStyle}>
      {children}
    </button>
  );
}

function Calculator() {
  return (
    <div className="calculator">
      <div className="display">0</div>
      <div className="button-row">
        <Button>7</Button>
        <Button>8</Button>
        <Button>9</Button>
        <Button isOperation>+</Button>
      </div>
      <div className="button-row">
        <Button>4</Button>
        <Button>5</Button>
        <Button>6</Button>
        <Button isOperation>-</Button>
      </div>
      <div className="button-row">
        <Button>1</Button>
        <Button>2</Button>
        <Button>3</Button>
        <Button isOperation>*</Button>
      </div>
      <div className="button-row">
        <Button isDouble>0</Button>
        <Button>C</Button>
        <Button>=</Button>
        <Button isOperation>/</Button>
      </div>
    </div>
  );
}

export default Calculator;
