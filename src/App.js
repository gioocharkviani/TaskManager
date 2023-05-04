import React from "react";
import { Route , Routes } from 'react-router-dom';
import './App.css';

import Home from './pages/home/home'
import UserLogin from "./components/Auth/UserLogin";
import Start from "./pages/Start/Start";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' Component={Start} />
        <Route path='/home' Component={Home} />
      </Routes>
    </div>
  );
}

export default App;
