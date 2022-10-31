import React, { useContext } from "react";

import "./stories.scss";

import { AuthContext, AuthContextInterface } from "../../context/auth";

export function Stories() {
    const { user } = useContext<AuthContextInterface>(AuthContext);

    const stories = new Array(5).fill(1).map((_, index) => ({
        id: index + 1,
        username: "Lorem Ipsum",
        avatar: "https://thispersondoesnotexist.com/image",
    }));

    return (
        <div className="stories">
            <div className="story">
                <img src={user.avatar} alt="avatar" />
                <span>{user.username}</span>
                <button>+</button>
            </div>
            {stories.map(story => (
                <div className="story" key={story.id}>
                    <img src={story.avatar} alt="avatar" />
                    <span>{story.username}</span>
                </div>
            ))}
        </div>
    )
}
