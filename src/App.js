import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import Addevent from './components/Addevent';
import TicketForm from './components/TicketForm';
import Gettickets from './components/Gettickets';
import Home from './components/Home';
import Getevents from './components/Getevents';
import"bootstrap/dist/js/bootstrap.min.js";
import Aboutus from './components/Aboutus';
import AdminLogin from './components/AdminLogin';
import Chatbot from './components/Chatbot';
import Notfound from './components/NotFound';


function App() {
  return (
    <Router>
      <div className="App">
      <header className="App-header wave-background">
        <h1>EasyPass Tickets</h1>
      </header>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home/>}/>
        
        <Route path='/Addevent' element={<Addevent/>} />
        <Route path='/TicketForm' element={<TicketForm />} />
        <Route path='/Gettickets' element={<Gettickets/>} />
        <Route path='/Getevents' element={<Getevents/>} />
        <Route path='/Aboutus' element={<Aboutus/>} />
        <Route path='/AdminLogin' element={<AdminLogin/>} />
        <Route path='/*' element={<Notfound/>}/>
      </Routes>
      
      <Chatbot/>
    </div>
    </Router>

  );
}

export default App;
