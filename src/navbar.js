import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav>
            <ul>
                <li>
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