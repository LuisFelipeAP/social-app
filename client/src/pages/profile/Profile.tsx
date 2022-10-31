import React, { useContext } from "react";

import "./profile.scss";

import { AuthContext, AuthContextInterface } from "../../context/auth";

import { Posts } from "../../components/Posts/Posts";

import {
  FacebookTwoTone,
  LinkedIn,
  Instagram,
  Twitter,
  GitHub,
  Place,
  Language,
  EmailOutlined,
  MoreVert
} from '@mui/icons-material/';

export function Profile() {
  const { user } = useContext<AuthContextInterface>(AuthContext);

  return (
    <>
      <div className="profile">
        <div className="images">
          <img className="profileCover" src="https://picsum.photos/1600/800" alt="cover picture" />
          <img className="profileAvatar" src={user.avatar} alt="avatar" />
        </div>
        <div className="profileContainer">
          <div className="profileInfo">
            <div className="left">
              <a href="">
                <FacebookTwoTone fontSize="large" />
              </a>
              <a href="">
                <Instagram fontSize="large" />
              </a>
              <a href="">
                <Twitter fontSize="large" />
              </a>
              <a href="">
                <LinkedIn fontSize="large" />
              </a>
              <a href="">
                <GitHub fontSize="large" />
              </a>
            </div>
            <div className="center">
              <span>{user.username}</span>
              <div className="info">
                <div className="item">
                  <Place />
                  <span>BR</span>
                </div>
                <div className="item">
                  <Language />
                  <span>portfolio</span>
                </div>
              </div>
              
            </div>
            <div className="right">
              <EmailOutlined />
              <MoreVert />
            </div>
          </div>
          <Posts />
        </div>
      </div>
    </>
  );
}
