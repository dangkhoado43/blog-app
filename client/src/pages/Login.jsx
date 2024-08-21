import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const Login = () => {
    const [inputs, setInputs] = useState({
        username: "",
        password: "",
    });

    const [err, setError] = useState(null);

    const navigate = useNavigate();

    const { login } = useContext(AuthContext);

    const handleChange = (e) => {
        setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!inputs.username || !inputs.password) {
            setError("All fields are required!");
            return;
        }

        try {
            await login(inputs);
            setError(null);
            navigate("/");
        } catch (err) {
            setError(err.response.data || "An error occurred");
        }
    };

    return (
        <div className="auth">
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Username"
                    name="username"
                    onChange={handleChange}
                />
                <input
                    type="password"
                    placeholder="Password"
                    name="password"
                    onChange={handleChange}
                />
                <button type="submit">Login</button>
                {err && <p className="error-message">{err}</p>}
                <span>
                    Don't you have an account?{" "}
                    <Link to="/register">Register</Link>
                </span>
            </form>
        </div>
    );
};

export default Login;
