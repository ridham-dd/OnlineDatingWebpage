import logo from './logo.svg';
import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import HomePage from './components/HomePage';
import LoginForm from './components/LoginForm';
import GamesPage from './components/GamesPage';

function App() {
  return (
    //fix routes here
    <BrowserRouter> 
      <NavBar/>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginForm />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
    // <div>
    // <NavBar/>
    // <GamesPage/>
    // <Footer/>
    // </div>

   
  );
}

export default App;