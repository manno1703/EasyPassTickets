import React, { useEffect } from 'react'
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Footer from './Footer';

const Getevents = () => {

    // Create Hooks
    const [events, setEvents] = useState([]) // empty array
    // loading and error hooks
    const [loading, setLoading] = useState("");
    const [error, setError] = useState("");

    // Create a navigation hook to open create ticket form
    const navigate = useNavigate();

    // specify the location of the images
    const img_url= "https://emmanuelkinda.pythonanywhere.com/static/images/";

    // Create a function that will handle the get operation
    const getevents = async () =>{
        setLoading("Please wait as we retrieve available events...")

        try{
            // handle the reponse from pythonanywhere
            const response = await axios.get("https://emmanuelkinda.pythonanywhere.com/api/getevents")

            // update the events hooks with the received events from the API
            setEvents(response.data);

            // Return loading hook back to default
            setLoading("");
        }

        catch(error){
            // Set loading hook back to default
            setLoading("");

            // Project an error message
            setError("There was an error encountered. Please reload.")
        }
    };


    // Use useEffect hook to call our getevents function.
    useEffect(
        ()=>{getevents()},
        []
    );

    // Filtered events based on search
    const [search, setSearch] = useState("");

    const filtered_events = events.filter((event) =>
    event.name.toLowerCase().includes(search.toLowerCase()) || 
    event.description.toLowerCase().includes(search.toLowerCase()) ||
    event.price.toString().includes(search)
    );


  return (
    <div className='row'>
        <h2 className="text-center">Available Events</h2>
        <div className="row justify-content-center mt-3 mb-3">
            <input 
        className="form-control w-50 mb-4"
        type="search"
        placeholder="Search Events..."
        value={search}
        onChange={(e)=> setSearch(e.target.value)} />
        </div>
        
        {/* bind loading and error messages */}
        {loading && <div className="alert alert-info text-center">{loading}</div>}
        {error && <div className="alert alert-danger text-center">{error}</div>}

        {filtered_events.map((events) =>(
            <div className="col-md-4 justify-content-center mb-4" key={events.event_id}>
                {/* This card contains info about a single event */}
                <div className="card shadow event-card">
                    <img src={img_url + events.img_url} className="event_img" alt="" />
                
                {/* Card body */}
                <div className="card-body text-center">
                    <h5 className="mt-2">
                        {events.name}
                    </h5>
                    <p>{events.description.slice(0, 70)}...</p>
                <b>Date: <span className="text-warning">{new Date(events.event_date).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })}</span></b><br/>
                <b>Price: <span className="text-warning">KES {events.price}</span></b><br/><br/>
                <button className="ticket_btn" onClick={()=> navigate("/TicketForm", {state : {events}})}>Get Tickets</button> 


                </div>
                </div>
            </div>
    ))}
      <Footer/>
    </div>
  )
}

export default Getevents
