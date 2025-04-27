import axios from 'axios';
import React, { useState } from 'react'

const Gettickets = () => {
// Hooks to hold phone number and tickets
const [phone, setPhone] = useState("");
const [tickets, setTickets] = useState([]); // empty array to hold tickets data from API

// Set Loading and Error states
const [loading, setLoading] = useState("");
const [error, setError] = useState("");

// Function to Fetch ticket data
const gettickets = async (e) =>{
    e.preventDefault(); // prevent site from reloading

    // Update loading hook
    setLoading("Fetching your ticket...");

    try{
        // Create an object to hold the data
        const data = new FormData

        // Add the phone number added to the hook
        data.append("phone", phone);

        // Access Post method
        const response = await axios.post("https://emmanuelkinda.pythonanywhere.com/api/get_ticket", data);
        console.log(response.data);

        // Check if response is an array
        // Access the tickets array directly
        if (response.data.tickets) {
        setTickets(response.data.tickets);
        setError("")
        } else {
        setTickets([]);
        setError("No tickets found.");
        }

        setLoading("");
    }

    catch(error){
        setError("Failed to fetch ticket. Please try again.");
        setLoading("");
        setTickets([]);
    } 
};


  return (
    <div className="row justify-content-center mt-4">
        <div className="col-md-6 card shadow p-4">
            <h2>My Tickets</h2>

            {loading}
            {error && <div className="alert alert-danger text-center">{error}</div>}

            <form onSubmit={gettickets}>
                <input 
                type="number"
                placeholder="Enter your phone number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className='form-control'
                required /><br/>

                <button type="submit" className="btn btn-primary">Check Tickets</button>
            </form>

            <div className="mt-4">
            {tickets.length > 0 ? (
                tickets.map((ticket, index) => {
                const eventDate = new Date(ticket.event_date).toLocaleDateString('en-GB', {
                    day: '2-digit',
                    month: 'short',
                    year: 'numeric'
                });

                const formattedAmount = Number(ticket.amount_paid).toLocaleString();

                return (
                    <div key={index} className="card p-3 mb-2">
                    <h5>Event: {ticket.event_name}</h5>
                    <p>Customer Name: {ticket.customer_name}</p>
                    <p>Event Date: {eventDate}</p>
                    <p>Amount Paid: Ksh {formattedAmount}</p>
            </div>
      );
    })
  ) : (
    <p>No tickets found.</p>
  )}
</div>

        </div>
      
    </div>
  )
}

export default Gettickets
