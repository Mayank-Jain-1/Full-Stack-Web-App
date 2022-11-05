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
        <Route path='/register' element= {<><Navbar current="register"/><Form/></>} />
        <Route path='/welcome' element={<><Navbar current='welcome'/><Welcome /></>} />
        <Route path='/login' element={<><Navbar current='login'/><Login /></>} />
      </Routes>
    </Router>
  );
}

export default App;
