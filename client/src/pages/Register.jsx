import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Register = () => {
    const [inputs, setInputs] = useState({
        username: "",
        email: "",
        password: "",
    });

    const [err, setError] = useState(null);

    const navigate = useNavigate();

    const handleChange = (e) => {
        setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!inputs.username || !inputs.email || !inputs.password) {
            setError("All fields are required!");
            return;
        }

        try {
            await axios.post("/auth/register", inputs);
            setError(null);
            navigate("/login");
        } catch (err) {
            setError(err.response.data || "An error occurred");
        }
    };

    return (
        <div className="auth">
            <h1>Register</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Username"
                    name="username"
                    required
                    onChange={handleChange}
                />
                <input
                    type="email"
                    placeholder="Email"
                    name="email"
                    required
                    onChange={handleChange}
                />
                <input
                    type="password"
                    placeholder="Password"
                    name="password"
                    required
                    onChange={handleChange}
                />
                <button type="submit">Register</button>
                {err && <p className="error-message">{err}</p>}
                <span>
                    Do you have an account? <Link to="/login">Login</Link>
                </span>
            </form>
        </div>
    );
};

export default Register;
