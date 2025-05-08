import axios from 'axios';
import React, { useState } from 'react';
import { FaPhoneAlt, FaTicketAlt, FaUserAlt, FaCalendarAlt, FaMoneyBillWave } from 'react-icons/fa';
import Footer from './Footer';

const Gettickets = () => {
  const [phone, setPhone] = useState("");
  const [tickets, setTickets] = useState([]);
  const [loading, setLoading] = useState("");
  const [error, setError] = useState("");

  const gettickets = async (e) => {
    e.preventDefault();
    setLoading("Fetching your ticket...");
    setError("");

    try {
      const data = new FormData();
      data.append("phone", phone);

      const response = await axios.post("https://emmanuelkinda.pythonanywhere.com/api/get_ticket", data);

      if (response.data.tickets) {
        setTickets(response.data.tickets);
        setError("");
      } else {
        setTickets([]);
        setError("No tickets found.");
      }

      setLoading("");
    } catch (error) {
      setError("Failed to fetch ticket. Please try again.");
      setLoading("");
      setTickets([]);
    }
  };

  return (
    <>
    <div className="row justify-content-center ticketbcg">
      <div className="col-md-6 card shadow p-4 rounded-3">
        <h2 className="text-center mb-3"><FaTicketAlt className="mb-1" /> My Tickets</h2>

        {loading && <div className="alert alert-info text-center">{loading}</div>}
        {error && <div className="alert alert-danger text-center">{error}</div>}

        <form onSubmit={gettickets} className="mb-4">
          <label htmlFor="phone" className="form-label"><FaPhoneAlt /> Enter your phone number</label>
          <input
            id="phone"
            type="number"
            placeholder="254XXXXXXXX"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="form-control"
            required
          />
          <button type="submit" className="btn btn-primary mt-3 w-100">Check Tickets</button>
        </form>

        <div>
          {tickets.length > 0 ? (
            tickets.map((ticket, index) => {
              const eventDate = new Date(ticket.event_date).toLocaleDateString('en-GB', {
                day: '2-digit',
                month: 'short',
                year: 'numeric'
              });

              const formattedAmount = Number(ticket.amount_paid).toLocaleString();

              return (
                <div key={index} className="card p-3 mb-3 border-start border-primary border-4">
                  <h5><FaTicketAlt className="me-2" />{ticket.event_name}</h5>
                  <p><FaUserAlt className="me-2" />Name: {ticket.customer_name}</p>
                  <p><FaCalendarAlt className="me-2" />Date: {eventDate}</p>
                  <p><FaMoneyBillWave className="me-2" />Paid: Ksh {formattedAmount}</p>
                </div>
              );
            })
          ) : (
            !loading && !error && <p className="text-muted text-center">Enter your number to view tickets.</p>
          )}
        </div>
      </div>
    </div>
    <Footer/>
    </>
  );
};


export default Gettickets;
