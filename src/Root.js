import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import AllPosts from "./Components/AllPosts";
import SingularPost from "./Components/SingularPost";
import Navbar from "./navbar";

const Root = () => {
    return (
        <div>
            <header className="App-header">
                <h1>Letters from Philosophy 💌</h1>
            </header>
            <Navbar />
            <Routes>
                <Route exact path="/" element={<Home />} /> 
                <Route exact path="/AllPosts" element={<AllPosts />} />
                <Route exact path="/AllPosts/:id" element={<SingularPost />}/>
            </Routes>
        </div>
    );
};

export default Root;
