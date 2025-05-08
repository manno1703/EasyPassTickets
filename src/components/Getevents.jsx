import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Footer from './Footer';
import Loader from './Loader';

const Getevents = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [search, setSearch] = useState("");
  const [sortOrder, setSortOrder] = useState(""); // NEW
  const [currentPage, setCurrentPage] = useState(1);
  const eventsPerPage = 6;
  const navigate = useNavigate();
  const img_url = "https://emmanuelkinda.pythonanywhere.com/static/images/";

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [currentPage]);

  const getevents = async () => {
    setLoading(true);
    try {
      const response = await axios.get("https://emmanuelkinda.pythonanywhere.com/api/getevents");
      setEvents(response.data);
    } catch (error) {
      setError("There was an error encountered. Please reload.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getevents();
  }, []);

  // Filter
  const filtered_events = events.filter((event) =>
    event.name.toLowerCase().includes(search.toLowerCase()) ||
    event.description.toLowerCase().includes(search.toLowerCase()) ||
    event.price.toString().includes(search)
  );

  // Sort after filtering
  const sorted_events = [...filtered_events].sort((a, b) => {
    if (sortOrder === "low") return a.price - b.price;
    if (sortOrder === "high") return b.price - a.price;
    return 0;
  });

  return (
    <>
      <div className="container">
        <h2 className="text-center my-4 heading-bg bounce-heading">Available Events</h2>

        {/* Search and Sort Controls */}
        <div className="row justify-content-center mb-4">
          <div className="col-md-6 mb-2">
            <input
              className="form-control"
              type="search"
              placeholder="Search Events..."
              value={search}
              onChange={(e) => {
                setSearch(e.target.value);
                setCurrentPage(1);
              }}
            />
          </div>
          <div className="col-md-3">
            <select
              className="form-select"
              value={sortOrder}
              onChange={(e) => setSortOrder(e.target.value)}
            >
              <option value="">-- No Sorting --</option>
              <option value="low">Lowest First</option>
              <option value="high">Highest First</option>
            </select>
          </div>
        </div>

        {loading && <Loader text={loading} />}
        {error && <div className="alert alert-danger text-center">{error}</div>}

        <div className="row">
          {sorted_events
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

        {/* Pagination */}
        <div className="d-flex justify-content-center mt-4">
          <nav>
            <ul className="pagination">
              <li className={`page-item ${currentPage === 1 && "disabled"}`}>
                <button className="page-link" onClick={() => setCurrentPage(currentPage - 1)}>Previous</button>
              </li>
              {[...Array(Math.ceil(filtered_events.length / eventsPerPage)).keys()].map((num) => (
                <li
                  key={num + 1}
                  className={`page-item ${currentPage === num + 1 ? "active" : ""}`}
                >
                  <button className="page-link" onClick={() => setCurrentPage(num + 1)}>
                    {num + 1}
                  </button>
                </li>
              ))}
              <li className={`page-item ${currentPage === Math.ceil(filtered_events.length / eventsPerPage) && "disabled"}`}>
                <button className="page-link" onClick={() => setCurrentPage(currentPage + 1)}>Next</button>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Getevents;
