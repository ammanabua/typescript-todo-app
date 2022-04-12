import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from "./components/Home";
import { Filter } from "./components/Filter"
import { NavLink } from 'react-router-dom';
import TodoProvider from './context/todoContext';

function App() {

  return (
    <BrowserRouter>
      <TodoProvider>
        <nav>
          <NavLink to="/">
            Home
          </NavLink>{" "}
          <NavLink to="/filter">
            Filter
          </NavLink>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/filter" element={<Filter />} />
        </Routes>
      </TodoProvider>
    </BrowserRouter>
  );
}

export default App;
