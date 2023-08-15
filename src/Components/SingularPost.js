import React from "react";
import { useParams } from "react-router-dom";
import { usePostsContext } from "./Context/PostsContext";
import NewComment from "./NewCommentForm";
import { useCommentContext } from "./Context/CommentContext";

export default function SingularPost() {
    const { id } = useParams();
    const { allPosts } = usePostsContext();
    const { commentsByPost, addComment } = useCommentContext();

    const post = allPosts.find((post) => post.id === parseInt(id));

    if(!post) {
        return <div>Loading...</div>;
    }

    const comments = commentsByPost[id] || [];

    return (
        <div>
            <h2>{post.title}</h2>
            <p>{post.details}</p>

            <h3>Comments</h3>
            <ul>
                {comments.map((comment) => (
                    <li key={comment.id}>
                        <p>{comment.details}</p>
                        <p>By: {comment.firstName} {comment.lastName}</p>
                    </li>
                ))}
            </ul>

            <h3>Add a Comment</h3>
            <NewComment postId={id} addComment={addComment} />
        </div>
    );
}