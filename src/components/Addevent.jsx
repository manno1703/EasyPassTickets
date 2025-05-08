import axios from "axios";
import { useState } from "react";
import Footer from "./Footer";

const Addevent = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [event_date, setEvent_date] = useState("");
  const [price, setPrice] = useState("");
  const [img_url, setImg_url] = useState("");

  const [loading, setLoading] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const submit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");

    if (!token) {
      setError("You must log in as an admin first.");
      return;
    }

    setLoading("Uploading event details...");
    setError("");

    const data = new FormData();
    data.append("name", name);
    data.append("description", description);
    data.append("event_date", event_date);
    data.append("price", price);
    data.append("img_url", img_url);

    try {
      const response = await axios.post(
        "https://emmanuelkinda.pythonanywhere.com/api/addevent",
        data,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setLoading("");
      setMessage("✅ Event added successfully!");
      setName("");
      setDescription("");
      setEvent_date("");
      setPrice("");
      setImg_url("");
    } catch (error) {
      setLoading("");
      setError("❌ Failed to add the event. Please try again.");
    }
  };

  return (
    <>
    <div className="addbcg">
    <div className="row justify-content-center mb-5 px-3">
      <div className="col-lg-6 col-md-8 col-sm-10 bg-light shadow p-4 rounded-4 border border-2 border-primary-subtle">
        {loading && <div className="alert alert-info text-center">{loading}</div>}
        {message && <div className="alert alert-success text-center">{message}</div>}
        {error && <div className="alert alert-danger text-center">{error}</div>}

        <form onSubmit={submit}>
          <h2 className="text-center text-primary fw-bold mb-4">
            <i className="bi bi-calendar-plus"></i> Add New Event
          </h2>

          <div className="mb-3">
            <label className="form-label">Event Name</label>
            <input
              type="text"
              className="form-control"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Event Description</label>
            <textarea
              className="form-control"
              placeholder="Describe the event..."
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              rows="3"
              required
            ></textarea>
          </div>

          <div className="mb-3">
            <label className="form-label">Event Date</label>
            <input
              type="date"
              className="form-control"
              value={event_date}
              onChange={(e) => setEvent_date(e.target.value)}
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Ticket Price (KES)</label>
            <input
              type="number"
              className="form-control"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              required
            />
          </div>

          <div className="mb-4">
            <label className="form-label">Event Poster</label>
            <input
              type="file"
              className="form-control"
              accept="image/*"
              onChange={(e) => setImg_url(e.target.files[0])}
              required
            />
          </div>

          <button type="submit" className="btn btn-primary w-100 fw-bold">
            <i className="bi bi-upload me-2"></i> Submit Event
          </button>
        </form>
      </div>
    </div>
    </div>
    <Footer/>
    </>
    
  );
};

export default Addevent;
