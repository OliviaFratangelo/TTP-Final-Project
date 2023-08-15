import React, { createContext, useContext, useState, useEffect } from "react";

const PostsContext = createContext();

export function PostsProvider({ children }) {
    const currentPosts = [
        {
            id: 1,
            title: "Accessibility and Philosophy",
            synopsis: "Philosophy is discovered naturally from a young age, so why is there a lack of exposure to philosophy in mainstream education?",
            details: "(i will add this later",
        },
        {
        
            id: 2,
            title: "Plato's Cave",
            synopsis: "It's difficult to decide where to start when talking about philosophy, but I always start with Plato's cave allegory",
            details: "(will write later)",
        },
    ];

    const [allPosts, setAllPosts] = useState(currentPosts);
    
    useEffect(() => {
            const savedPosts = JSON.parse(localStorage.getItem("allPosts") || "[]");
            setAllPosts(savedPosts);
        }, []);

    useEffect(() => {
        localStorage.setItem("allPosts", JSON.stringify(allPosts));
    }, [allPosts]);

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