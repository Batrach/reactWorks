import React from 'react';
import logo from './logo.svg';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import './App.css';
import { Main } from './components/main';
import { MainPages } from './pages/mainPages';
import { SmilesPages } from './pages/smailsPages';

function App() {
  return (
    <>
     <BrowserRouter>
    <Routes>  
      <Route path='/' element={<MainPages/>}/>   
      <Route path='/smile' element={<SmilesPages/>}/>   
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
