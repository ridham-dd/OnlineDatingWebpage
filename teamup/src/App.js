import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import HomePage from './components/HomePage';
import LoginForm from './components/LoginForm';
import Loginl from './components/Loginl';
import LoginButton from './components/LoginButton';
import TicTacToe from './components/playTictactoe';
import AboutUs from './components/AboutUs';
import Help from './components/Help';
import Profile from './components/profile';
import Chats from './components/Chats';
import TeamMembers from './components/TeamMembers';
import GamesPage from './components/GamesPage';
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import React, { useState, useEffect } from 'react';

function App() {
  return (
    <BrowserRouter> 
      <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
        {/* <NavBar isLoggedIn={true} /> */}
        <div style={{ flexGrow: 1 }}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/signup" element={<LoginForm />} />
            <Route path="/loginbutton" element={<LoginButton />} />
            <Route path="/AboutUs" element={<AboutUs />} />
            <Route path="/Help" element={<Help />} />
            <Route path="/TeamMembers" element={<TeamMembers />} />
            <Route path="/TicTacToe" element={<TicTacToe />} />
            <Route path="/games" element={<GamesPage />} />
            <Route path="/login" element={<Loginl />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/chats" element={<Chats />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
