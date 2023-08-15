import React from "react";
import { Link } from "react-router-dom";
//import axios from "axios";
import { usePostsContext } from "./Context/PostsContext";

export default function AllPosts() {
    const {allPosts} = usePostsContext();

return (
    <>
    <h1>All Posts</h1>
    <ul id = "main">
        {allPosts.map((post) => (
            <li key={post.id}>
                <Link to={`/AllPosts/${post.id}`}>{post.name}</Link> <br />
            </li>
        ))}
        </ul>
        </>
    );

}