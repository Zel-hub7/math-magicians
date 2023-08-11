// src/App.js
import React from 'react';
import Calculator from './Components/calculator';
import Quotes from './Components/FetchAPI';
import './index.css'

function App() {
  return (
    <div>
      <Calculator />
      <Quotes />
    </div>
  );
}

export default App;
