import { Routes, Route } from 'react-router-dom';
import React from 'react';
import Calculator from './Components/calculator';
import Quotes from './Components/FetchAPI';
import Home from './Components/Home';
import './index.css';
import NavBar from './Components/NavBar';

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Calculator" element={<Calculator />} />
        <Route path="/Quotes" element={<Quotes />} />
      </Routes>

    </>
  );
}

export default App;
