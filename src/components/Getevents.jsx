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

    // Pagination Hook
    const [currentPage, setCurrentPage] = useState(1);
    const eventsPerPage = 6;

    // Scroll to top when page changes
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
        }, [currentPage]);

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
  <>
    <div className="container">
      <h2 className="text-center my-4">Available Events</h2>

      <div className="row justify-content-center mb-4">
        <input
          className="form-control w-50"
          type="search"
          placeholder="Search Events..."
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
            setCurrentPage(1); // reset to page 1 when search changes
          }}
        />
      </div>

      {loading && <div className="alert alert-info text-center">{loading}</div>}
      {error && <div className="alert alert-danger text-center">{error}</div>}

      <div className="row">
        {filtered_events
          .slice((currentPage - 1) * eventsPerPage, currentPage * eventsPerPage)
          .map((event) => (
            <div className="col-md-4 mb-4" key={event.event_id}>
              <div className="card shadow-sm h-100">
                <img
                  src={img_url + event.img_url}
                  className="card-img-top event_img"
                  alt={event.name}
                  style={{ height: "200px", objectFit: "cover" }}
                />

                <div className="card-body d-flex flex-column text-center">
                  <h5 className="card-title">{event.name}</h5>
                  <p className="card-text text-muted">
                    {event.description.length > 70
                      ? event.description.slice(0, 70) + "..."
                      : event.description}
                  </p>

                  <p className="mb-1">
                    <strong>Date:</strong>{" "}
                    <span className="text-warning">
                      {new Date(event.event_date).toLocaleDateString("en-GB", {
                        day: "numeric",
                        month: "short",
                        year: "numeric",
                      })}
                    </span>
                  </p>
                  <p className="mb-3">
                    <strong>Price:</strong>{" "}
                    <span className="text-warning">KES {event.price}</span>
                  </p>

                  <button
                    className="btn btn-primary mt-auto"
                    onClick={() =>
                      navigate("/TicketForm", { state: { events: event } })
                    }
                  >
                    Get Tickets
                  </button>
                </div>
              </div>
            </div>
          ))}
      </div>

      {/* Pagination Controls */}
      <div className="d-flex justify-content-center mt-4">
        <nav>
          <ul className="pagination">
            <li className={`page-item ${currentPage === 1 && "disabled"}`}>
              <button
                className="page-link"
                onClick={() => setCurrentPage(currentPage - 1)}
              >
                Previous
              </button>
            </li>

            {[...Array(Math.ceil(filtered_events.length / eventsPerPage)).keys()].map(
              (num) => (
                <li
                  key={num + 1}
                  className={`page-item ${
                    currentPage === num + 1 ? "active" : ""
                  }`}
                >
                  <button
                    className="page-link"
                    onClick={() => setCurrentPage(num + 1)}
                  >
                    {num + 1}
                  </button>
                </li>
              )
            )}

            <li
              className={`page-item ${
                currentPage === Math.ceil(filtered_events.length / eventsPerPage) &&
                "disabled"
              }`}
            >
              <button
                className="page-link"
                onClick={() => setCurrentPage(currentPage + 1)}
              >
                Next
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </div>
    <Footer />
  </>
);


}

export default Getevents
