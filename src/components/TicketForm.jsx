import axios from 'axios';
import React, { useState } from 'react'
import { useLocation } from 'react-router-dom';

const TicketForm = () => {

// Receive event Info
const {events} = useLocation().state || {};

// create hooks for username and phonenumber
const [customer_name, setCustomer_name] = useState("");
const [customer_phone, setCustomer_phone] = useState("");
// const [amount_paid, setAmount_paid] = useState("");
const [numTickets, setNumTickets] = useState(1); //the number of tickets a user want. set as 1 by default

// Set Message and Error hooks
const [message, setMessage] = useState("");
const [error, setError] = useState("");

// calculate the total amount for ticket price depending on number of tickets bought
    const totalAmount = events.price * numTickets;

// Function to handle submission
const submit = async (e) =>{
    e.preventDefault() //prevent site from reloading

    

    // Update the message hook
    setMessage("Processing your ticket, please wait...");

    // create a form data object and add the name and phone number
    const data = new FormData();

    // append name, phonenumber and event ID
    data.append("event_id", events.event_id);
    data.append("customer_name", customer_name);
    data.append("customer_phone", customer_phone);
    data.append("amount_paid", totalAmount); //pre-set to match total amount since we're not actually paying

    try{
        // Handle response from pythonanywhere
        const reponse = await axios.post("https://emmanuelkinda.pythonanywhere.com/api/generate_ticket", data);

        // set message hook
        setMessage("Ticket generated successfully! Enjoy the event.")
        // return hooks to their initial states
        setCustomer_name("");
        setCustomer_phone("");
        setNumTickets(1);
    }

    catch(error){
        setError("Failed to generate ticket. Please try again.")
    }   
};

  return (
    <div className="row justify-content-center mt-4">
        <div className="col-md-6 card shadow p-4">
            <form onSubmit={submit}>
                {/* Bind Message and error */}
                <h2>Book Tickets for {events.name}</h2>
                {message && <div className="alert alert-success text-center">{message}</div>}
                {error && <div className="alert alert-danger text-center">{error}</div>}

                <input 
                type="text"
                placeholder='Your Name'
                value={customer_name}
                onChange={(e) => setCustomer_name(e.target.value)}
                className='form-control'
                required /><br/>

                <input type="number"
                placeholder='Phone Number'
                value={customer_phone}
                onChange={(e) => setCustomer_phone(e.target.value)}
                className='form-control'
                required /><br/>

                <label>Select Number of Tickets:</label>
                <input type="number" 
                min="1"
                value={numTickets}
                onChange={(e) => setNumTickets(e.target.value)}
                className='form-control'
                required /><br/>

                <b>Total:{totalAmount} KES</b><br/><br/>

                <button type='submit' className='btn btn-success'>Generate Ticket</button>
            </form>
        </div>
      
    </div>
  )
}

export default TicketForm
