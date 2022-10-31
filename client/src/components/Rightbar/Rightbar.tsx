import React, { useContext } from "react";

import "./rightbar.scss";

import { AuthContext, AuthContextInterface } from "../../context/auth";

export function Rightbar() {
  const { user } = useContext<AuthContextInterface>(AuthContext);

  const fakeUsers = new Array(6).fill(1).map((_, index) => ({
    id: index + 1,
  }));

  return (
    <div className="rightBar">
      <div className="container">
        <div className="item">
          <span>Suggestions For You</span>

          {fakeUsers.map(fakeUser => (
            <div className="user" key={fakeUser.id}>
              <div className="userInfo">
                <img src={user.avatar} alt="avatar" />
                <span>{user.username}</span>
              </div>
              <div className="buttons">
                <button>Follow</button>
                <button>Dismiss</button>
              </div>
            </div>
          ))}
        </div>
        <div className="item">
          <span>Latest Activities</span>
          {fakeUsers.map(fakeUser => (
            <div className="user" key={fakeUser.id}>
              <div className="userInfo">
                <img src={user.avatar} alt="avatar" />
                <p>
                  <span>{user.username}</span> changed their cover picture
                </p>
              </div>
              <span>1 min ago</span>
            </div>
          ))}
        </div>
        <div className="item">
          <span>Online Friends</span>
          {fakeUsers.map(fakeUser => (
            <div className="user" key={fakeUser.id}>
              <div className="userInfo">
                <img src={user.avatar} alt="avatar" />
                <div className="online" />
                <span>{user.username}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
