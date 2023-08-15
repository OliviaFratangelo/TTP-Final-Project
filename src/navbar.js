import React from "react";
import { Link } from "react-router-dom";
import "./index.css";

const Navbar = () => {
    return (
        <nav className="navbar">
            <ul className="nav-list">
                <li className="nav-item">
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/AllPosts">All Posts</Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;