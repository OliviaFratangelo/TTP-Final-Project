import React, { createContext, useContext, useState, useEffect } from "react";

const CommentContext = createContext();

export function CommentProvider({ children }) {
    const [commentsByPost, setCommentsByPost] = useState({});

useEffect(() => {
            const savedComments = JSON.parse(localStorage.getItem("commentsByPost") || "{}");
            setCommentsByPost(savedComments); 
        }, []);

        useEffect(() => {
            localStorage.setItem("commentsByPost", JSON.stringify(commentsByPost));
        }, [commentsByPost]);

const addComment = async (postId, newComment) => {
    try {
        const updatedComments = {
            ...commentsByPost,
            [postId]: [...(commentsByPost[postId] || []), newComment],
        };
        setCommentsByPost(updatedComments);
        localStorage.setItem("commentsByPost", JSON.stringify(updatedComments))
    } catch (error) {
        console.error("could not add comment", error);
    }
};

const contextValue = {
    commentsByPost,
    addComment,
};

return (
    <CommentContext.Provider value = {contextValue}>
        {children}
    </CommentContext.Provider>
);
}

export function useCommentContext() {
    return useContext(CommentContext);
}

