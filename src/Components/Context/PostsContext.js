import React, { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";
//import SingularPost from "../SingularPost";

const PostsContext = createContext();

export function PostsProvider({ children }) {
    const [allPosts, setAllPosts] = useState([]);
 
    useEffect(() => {
        async function fetchAllPosts() {
            const { data } = axios.get("/api/BlogPosts");
            setAllPosts(data);
        }

        fetchAllPosts();
      },  []);

        const contextValue = {
            allPosts,
            setAllPosts,
        };

        return (
            <PostsContext.Provider value={contextValue}>
                {children}
            </PostsContext.Provider>
        );
    }

    export function usePostsContext() {
        return useContext(PostsContext);
    }