import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-4">
      <NavLink className="navbar-brand" to="/">EasyPass Tickets</NavLink>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ms-auto">
          <li className="nav-item">
            <NavLink exact className="nav-link" to="/">Home</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/Getevents">Events</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/Gettickets">My Tickets</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/Aboutus">About Us</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/Addevent">Add Event</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
