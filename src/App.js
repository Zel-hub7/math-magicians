// src/App.js
import React from 'react';
import Calculator from './Components/calculator';
import Quotes from './Components/FetchAPI';

function App() {
  return (
    <div>
      <Quotes />
      <Calculator />
    </div>
  );
}

export default App;
