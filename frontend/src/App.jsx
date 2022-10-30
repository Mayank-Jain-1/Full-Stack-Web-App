import './App.css';
import React from 'react';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import { Form } from './components/Form';
import Welcome from './components/Welcome';
import Navbar from './components/Navbar';
import Login from './components/Login';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element= {<><Navbar current="register"/><Form/></>} />
        <Route path='/home' element={<><Navbar current='home'/><Welcome /></>} />
        <Route path='/about' element={<><Navbar current='about'/><Welcome /></>} />
        <Route path='/contact' element={<><Navbar current='contact'/><Welcome /></>} />
        <Route path='/login' element={<><Navbar current='login'/><Login /></>} />
        <Route path='/register' element= {<><Navbar current="register"/><Form/></>} />
      </Routes>
    </Router>
  );
}

export default App;
