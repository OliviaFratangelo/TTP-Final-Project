import React, { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";

const CommentContext = createContext();

export function CommentProvider({ children }) {
    const [commentsByPost, setCommentsByPost] = useState({});

useEffect(() => {
    async function fetchAllComments() {
        try {
            const { data } = await axios.get("/api/BlogPosts");
            const comments = {};

            for (const post of data) {
                const { data: postComments } = await axios.get(`/api/BlogPosts/${post.id}`);
                comments[post.id] = postComments;
            }

            setCommentsByPost(comments);
        } catch (error) {
            console.error("Could not fetch comments", error);
        }
    }

    fetchAllComments();
}, []);

const addComment = async (postId, newComment) => {
    try {
        const { data: addedComment }= await axios.post(`api/BlogPosts/${postId}/comments`, newComment);
        setCommentsByPost((prevComments) => ({ 
            ...prevComments,
            [postId]: [...(prevComments[postId] || []), addedComment],
        }));
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

