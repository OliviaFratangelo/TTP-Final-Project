import React, { createContext, useContext, useState, useEffect } from "react";

const CommentContext = createContext();

export function CommentProvider({ children }) {
    const [commentsByPost, setCommentsByPost] = useState({});

useEffect(() => {
            const savedComments = JSON.parse(localStorage.getItem("commentsByPost") || "{}");
            setCommentsByPost(savedComments); 
        }, []);

        useEffect(() => {
            const savedComments = JSON.parse(localStorage.getItem("commentsByPost"));
            if (savedComments !== null && savedComments.length !== 0) {
                setCommentsByPost(savedComments);
            }
}, []);

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

const deleteComment = async (postId, commentId) => {
    try {
        const updatedComments = {
            ...commentsByPost,
            [postId]: commentsByPost[postId].filter(comment => comment.id !== commentId),
        };
        setCommentsByPost(updatedComments);
        localStorage.setItem("commentsByPost", JSON.stringify(updatedComments))
    } catch (error) {
        console.error("could not delete comment", error);
    }
};

const contextValue = {
    commentsByPost,
    addComment,
    deleteComment,
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

