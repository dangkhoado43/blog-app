import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/imgs/logo.png";
import { AuthContext } from "../context/AuthContext";

function Navbar() {
    const { currentUser, logout } = useContext(AuthContext);

    return (
        <div className="navbar">
            <div className="container">
                <div className="logo">
                    <Link to="/">
                        <img src={Logo} alt="logo" />
                    </Link>
                </div>
                <div className="links">
                    <Link className="link" to="/?cat=art">
                        <h6>ART</h6>
                    </Link>
                    <Link className="link" to="/?cat=science">
                        <h6>SCIENCE</h6>
                    </Link>
                    <Link className="link" to="/?cat=technology">
                        <h6>TECHNOLOGY</h6>
                    </Link>
                    <Link className="link" to="/?cat=cinema">
                        <h6>CINEMA</h6>
                    </Link>
                    <Link className="link" to="/?cat=design">
                        <h6>DESIGN</h6>
                    </Link>
                    <Link className="link" to="/?cat=food">
                        <h6>FOOD</h6>
                    </Link>
                    {currentUser && (
                        <span className="username">{currentUser.username}</span>
                    )}
                    {currentUser ? (
                        <>
                            <span className="logout">
                                <Link className="link" onClick={logout}>
                                    Logout
                                </Link>
                            </span>
                            <span className="write">
                                <Link to="/write" className="link">
                                    Write
                                </Link>
                            </span>
                        </>
                    ) : (
                        <>
                            <span className="login">
                                <Link className="link" to="/login">
                                    Login
                                </Link>
                            </span>
                            <span className="signup">
                                <Link className="link" to="/register">
                                    Sign Up
                                </Link>
                            </span>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Navbar;
