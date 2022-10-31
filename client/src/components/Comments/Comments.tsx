import React, { useContext } from "react";
import { AuthContext, AuthContextInterface } from "../../context/auth";

import "./comments.scss";

export function Comments() {
    const { user } = useContext<AuthContextInterface>(AuthContext);

    const fakeComments = new Array(3).fill(1).map((_, index) => ({
        id: index + 1,
        comment: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum architecto totam culpa eligendi numquam, est ipsa nemo obcaecati doloremque eos.",
    }));

    return (
        <div className="comments">
            <div className="write">
                <img src={user.avatar} alt="avatar" />
                <input type="text" placeholder="write a comment" />
                <button>Send</button>
            </div>
            {fakeComments.map(fakeComment => (
                <div className="comment" key={fakeComment.id}>
                    <img src={user.avatar} alt="avatar" />
                    <div className="info">
                        <span>{user.username}</span>
                        <p>{fakeComment.comment}</p>
                    </div>
                    <span className="date">1 hour ago</span>
                </div>
            ))}
        </div>
    )
}
