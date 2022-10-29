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
        <Route path='/' element= {<><Navbar current="Register"/><Form/></>} />
        <Route path='/welcome' element={<><Navbar current='Home'/><Welcome /></>} />
        <Route path='/login' element={<><Navbar current='Login'/><Login /></>} />
      </Routes>
    </Router>
  );
}

export default App;
