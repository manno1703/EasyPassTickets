import axios from "axios";
import { useState } from 'react'
import { useNavigate } from "react-router-dom";

const AdminLogin = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    
    // Loading and error states
    const [loading, setLoading] = useState("");
    const[error, setError] = useState("");
    const [message, setMessage] = useState("");

    // Create a navigation hook to open add event form
    const navigate = useNavigate();

    // Function to handle Login
    const handleLogin = async (e) => {
    e.preventDefault();
    setLoading("Please wait");
    setError("");

    try {
        const response = await axios.post(
            "https://emmanuelkinda.pythonanywhere.com/api/adminlogin",
            { username, password },
            {
                headers: { "Content-Type": "application/json" },
                withCredentials: true, // Ensures cookies/tokens are sent if needed
            }
        );

        // Store JWT in localStorage
        localStorage.setItem("token", response.data.token);
        setLoading("");
        setMessage("Login successful!");
        navigate("/addevent");
    } catch (error) {
        setError("Invalid credentials. Please try again");
    }
};




  return (
    <div className="row justify-content-center mt-4">
            <div className="col-md-6 card shadow p-4 rounded-3">
                {error && <div className="alert alert-danger text-center">{error}</div>}
                <form onSubmit={handleLogin}>
                    <h2 className="text-center mb-4">Admin Login</h2>
                    <p className="text-muted text-center">Use admin/password123 for testing</p>
                    <input 
                        type="text"
                        placeholder="Enter your username (admin)"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        className="form-control"
                        required
                    /><br/>

                    <input 
                        type="password"
                        placeholder="Enter your password(password123)"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="form-control"
                        required
                    /><br/>

                    <button type="submit" className="btn btn-danger w-100">Login</button>
                </form>
            </div>
        </div>
  )
}

export default AdminLogin
