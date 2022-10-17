import './App.css';
import React from 'react';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import { Form } from './components/Form';
import Welcome from './components/Welcome';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element= {<Form/>} />
        <Route path='/welcome' element={<Welcome name = "mayank"/>} />
      </Routes>
    </Router>
  );
}

export default App;
