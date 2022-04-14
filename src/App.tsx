import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from "./components/Home";
import { Filter } from './components/Filter';
import TodoProvider from './context/todoContext';


function App() {

  return (
    <BrowserRouter>
      <TodoProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/filter" element={<Filter />} />
        </Routes>
      </TodoProvider>
    </BrowserRouter>
  );
}

export default App;
