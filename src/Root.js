import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./Home";
import AllPosts from "./AllPosts";
import SingularPost from "./SingularPost";
import Navbar from "./navbar";

const Root = () => {
    return (
        <div className="navigation">
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} /> 
                <Route path="/AllPosts" element={<AllPosts />} />
                <Route path="/AllPosts/:id" element={<SingularPost />}/>
            </Routes>
        </div>
    );
};

export default Root;
