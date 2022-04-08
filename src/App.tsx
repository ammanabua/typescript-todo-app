import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from "./components/Home";
import Filter from './components/Filter';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/filter" element={<Filter />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
