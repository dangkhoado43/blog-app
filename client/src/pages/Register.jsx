import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { AUTH_PATH } from "../constants/URLConstant";

const Register = () => {
    const [inputs, setInputs] = useState({
        username: "",
        email: "",
        password: "",
    });

    const handleChange = (e) => {
        setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        console.log(inputs);

        const res = await axios.post(`${AUTH_PATH}/register`);
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
                <button>Register</button>
                <p>This is an error!</p>
                <span>
                    Do you have an account? <Link to="/login">Login</Link>
                </span>
            </form>
        </div>
    );
};

export default Register;
