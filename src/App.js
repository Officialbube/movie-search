import React from "react";

import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from "./pages/Home";
import Movies from "./pages/Movies";



function App() {
  return (
    <BrowserRouter className="app">
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="movie" element={<Movies/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
