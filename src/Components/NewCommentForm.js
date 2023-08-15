import React from "react";
import { useState } from "react";
import { useCommentContext } from "./Context/CommentContext";

export default function NewComment({ postId }) {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [details, setDetails] = useState("");
    const { addComment } = useCommentContext();

    function handleSubmit(event) {
        event.preventDefault();

        const newComment = {
            firstName,
            lastName,
            details,
        };

        addComment(postId, newComment);

        setFirstName("");
        setLastName("");
        setDetails("");
    }

    return (
        <>
        <form id="comments-form" onSubmit={handleSubmit}>
        <label htmlFor="firstName">First Name:</label>
        <input
            name="firstName"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            /> <br />
        <label htmlFor="lastName">Last Name:</label>
        <input
            name="lastName"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            /> <br />
        <label htmlFor="details">Details:</label>
        <input
            name="details"
            value={details}
            onChange={(e) => setDetails(e.target.value)}
            /> 
            <button type="submit">Go</button>
            </form> 
        </>
        );
    }