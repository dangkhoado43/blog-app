import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/imgs/logo.png";

function Footer() {
    return (
        <div className="footer">
            <div className="container">
                <p>© 2024 DDK</p>
                <div className="logo">
                    <Link to="/">
                        <img src={Logo} alt="logo" />
                    </Link>
                </div>
                <ul>
                    <li className="item">
                        <Link className="link" to="/?cat=art">
                            ART
                        </Link>
                    </li>
                    <li className="item">
                        <Link className="link" to="/?cat=science">
                            SCIENCE
                        </Link>
                    </li>
                    <li className="item">
                        <Link className="link" to="/?cat=technology">
                            TECHNOLOGY
                        </Link>
                    </li>
                    <li className="item">
                        <Link className="link" to="/?cat=cinema">
                            CINEMA
                        </Link>
                    </li>
                    <li className="item">
                        <Link className="link" to="/?cat=design">
                            DESIGN
                        </Link>
                    </li>
                    <li className="item">
                        <Link className="link" to="/?cat=food">
                            FOOD
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Footer;
