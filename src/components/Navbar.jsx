import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import {
  Home,
  CalendarDays,
  Ticket,
  Info,
  PlusSquare
} from 'lucide-react';

const Navbar = () => {
  const navigate = useNavigate();

  const handleAddEventClick = (e) => {
    const token = localStorage.getItem("token");
    if (!token) {
      e.preventDefault();
      navigate("/AdminLogin");
    }
  };

  return (
    <nav className="navbar navbar-expand-lg wave-background px-4">
      <NavLink className="navbar-brand" to="/">
      <img src="/logo.png" alt="EasyPass Tickets" style={{ width: '35px', height: '30px', marginRight: '10px' }} />
        EasyPass Tickets
      </NavLink>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ms-auto">
          <li className="nav-item">
            <NavLink exact="true" className="nav-link" to="/">
              <Home size={18} className="me-2" /> Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/Getevents">
              <CalendarDays size={18} className="me-2" /> Events
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/Gettickets">
              <Ticket size={18} className="me-2" /> My Tickets
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/Aboutus">
              <Info size={18} className="me-2" /> About Us
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/Addevent" onClick={handleAddEventClick}>
              <PlusSquare size={18} className="me-2" /> Add Event
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
