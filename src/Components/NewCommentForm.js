import React from "react";
import axios from "axios";
import { useState } from "react";
import { useCommentContext } from "../Context/CommentContext";

export default function NewComment() {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [details, setDetails] = useState("");
    const { addComment } = useCommentContext();

    async function handleSubmit(event) {
        event.preventDefault();

        try {
            const { data } = await axios.post("/BlogPosts/:id/comments", {
                firstName,
                lastName,
                details,
            });
           addComment(postId, data);

        } catch (err) {
            console.error(err);
        }
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