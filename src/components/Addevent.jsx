import axios from "axios";
import { useState } from "react";

const Addevent = () => {

    // Create Hooks that will store different data
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [event_date, setEvent_date] = useState("");
    const [price, setPrice]=useState("");
    const [img_url, setImg_url]=useState("");

    // loading, message and error hooks to handle states when the add event button is clicked
    const [loading, setLoading] = useState("");
    const [message, setMessage] = useState("");
    const [error, setError] = useState("");

    // Create a function to help handle the submit event
    const submit = async (e) =>{
        e.preventDefault() //prevent site from reloading

        // Retreive Token from local storage for Admin Login
        const token = localStorage.getItem("token");
        if (!token) {
            setError("You must log in as an admin first.");
            return;
        }

        // Update the loading hook
        setLoading("Please wait as we upload the details of the event...")
        // clear previous error
        setError("");

        // Create form data variables that will hold all the info
        const data = new FormData();

        // Append the info from the Hooks
        data.append("name", name);
        data.append("description", description);
        data.append("event_date", event_date);
        data.append("price", price);
        data.append("img_url", img_url);

        try{
            // handle the reponse from pythonanywhere
            const response = await axios.post(
        "https://emmanuelkinda.pythonanywhere.com/api/addevent",
        data,
        {
            headers: {
                "Content-Type": "multipart/form-data",
                Authorization: `Bearer ${token}`
            }
        }
    );

            // Set loading back to default
            setLoading("");

            // Update message hook if details are added successfully
            setMessage("Event added successfuly!");

            // Clear the data of the other hooks
            setName("");
            setDescription("");
            setEvent_date("");
            setPrice("");
            setImg_url("");
        }

        catch(error){
            // Set Loading back to default
            setLoading("");
            // give an error message
            setError("Failed to add the event. Please try again")
        }
    }



  return (
    <div className="row justify-content-center mt-4">
        <div className="col-md-6 card shadow p-4 rounded-3">
            {/* Bind loading, message and error */}
                {loading && <div className="alert alert-info text-center">{loading}</div>}
                {message && <div className="alert alert-success text-center">{message}</div>}
                {error && <div className="alert alert-danger text-center">{error}</div>}
            <form onSubmit={submit}>
                <h2 className="text-center mb-4">Add Event</h2>
                
            <input 
            type="text"
            placeholder="Enter the event name"
            value={name}
            onChange={(e)=> setName(e.target.value)}
            className="form-control"
            required /><br/>

            <input 
            type="text" 
            placeholder="Enter the description of the event"
            value={description}
            onChange={(e)=> setDescription(e.target.value)}
            className="form-control"
            required /><br/>


            <label>Set the Date for the event</label>
            <input 
            type="date"
            value={event_date}
            onChange={(e)=> setEvent_date(e.target.value)}
            className="form-control"
            required /><br/>

            <input 
            type="number"
            value={price}
            onChange={(e)=> setPrice(e.target.value)}
            placeholder="Enter ticket price (KES)"
            className="form-control"
            required /><br/>

            <label>Event Poster</label>

            <input type="file"
            className="form-control"
            accept="image/*"
            onChange={(e) => setImg_url(e.target.files[0])}
            required /><br/>

            <button type="submit" className="btn btn-danger w-100">Add Event</button>

            </form>
        </div>

      
    </div>
  )
}

export default Addevent
