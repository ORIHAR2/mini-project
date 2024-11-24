import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React, { useEffect } from 'react';
import Home from './screens/Home';
import Opening from './screens/Opening';
import House from './screens/House';
import FrontDoor from './screens/FrontDoor';
import BackDoor from './screens/BackDoor';
import Assailant from './screens/Assailant';
import GameOver from './screens/GameOver';
import Continued from './screens/Continued';



function App() {

  useEffect(() => {
    document.title = 'Game of justice';
    return () => {
      document.title = 'Game of justice';
    };
  }, []);

  return (
    <Router>
          <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/opening" element={<Opening/>} />
          <Route path="/theHouse" element={<House/>} />
          <Route path="/FrontDoor" element={<FrontDoor/>} />
          <Route path="/BackDoor" element={<BackDoor/>} />
          <Route path="/Assailant" element={<Assailant/>} />
          <Route path="/GameOver" element={<GameOver/>} />
          <Route path="/Continued" element={<Continued/>} />




          </Routes>
    </Router>
  );
}

export default App;
