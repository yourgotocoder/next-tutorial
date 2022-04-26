import { useContext, useEffect, useState } from "react";

import CommentList from "./comment-list";
import NewComment from "./new-comment";
import classes from "./comments.module.css";
import NotificationContext from "../../store/notification-context";

function Comments(props) {
    const { eventId } = props;

    const notificationContext = useContext(NotificationContext);

    const [showComments, setShowComments] = useState(false);
    const [comments, setComments] = useState([]);

    useEffect(() => {
        if (showComments) {
            fetch("/api/comments/" + props.eventId)
                .then((response) => response.json())
                .then((data) => {
                    console.log(data);
                    setComments(data.comments);
                });
        }
    }, [showComments]);

    function toggleCommentsHandler() {
        setShowComments((prevStatus) => !prevStatus);
    }

    function addCommentHandler(commentData) {
        notificationContext.showNotification({
            title: "Adding comment",
            message: "Sending comment",
            status: "pending",
        });
        fetch("/api/comments/" + props.eventId, {
            method: "POST",
            body: JSON.stringify(commentData),
            headers: {
                "Content-Type": "application/json",
            },
        })
            .then((response) => {
                if (response.ok) {
                    return response.json();
                }
                return response.json().then((data) => {
                    throw new Error(data.message || "Error adding comment");
                });
            })
            .then((data) => {
                notificationContext.showNotification({
                    title: "Adding comment successful",
                    message: "Comment Added",
                    status: "success",
                });
            })
            .catch((err) => {
                notificationContext.showNotification({
                    title: "Error!",
                    message: err.message,
                    status: "error",
                });
            });
    }

    return (
        <section className={classes.comments}>
            <button onClick={toggleCommentsHandler}>
                {showComments ? "Hide" : "Show"} Comments
            </button>
            {showComments && <NewComment onAddComment={addCommentHandler} />}
            {showComments && <CommentList items={comments} />}
        </section>
    );
}

export default Comments;
