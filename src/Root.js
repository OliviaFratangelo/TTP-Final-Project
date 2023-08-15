import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./Home";
import AllPosts from "./AllPosts";
import SingularPost from "./SingularPost";
import Navbar from "./navbar";
import { PostsProvider } from './Components/Context/PostsContext';
import { CommentProvider } from './Components/Context/CommentContext';

const Root = () => {
    return (
        <div>
            <Navbar />
            <PostsProvider>
            <CommentProvider>
            <Routes>
                <Route exact path="/" element={<Home />} /> 
                <Route exact path="/AllPosts" element={<AllPosts />} />
                <Route exact path="/AllPosts/:id" element={<SingularPost />}/>
            </Routes>
            </CommentProvider>
            </PostsProvider>
        </div>
    );
};

export default Root;
