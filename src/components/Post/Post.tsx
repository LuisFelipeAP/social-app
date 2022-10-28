import React from "react";

import "./post.scss";

import { Posts } from "../Posts/Posts"
import { Link } from "react-router-dom";

import { 
  MoreHorizOutlined,
  FavoriteBorderOutlined,
  FavoriteOutlined,
  TextsmsOutlined,
  ShareOutlined
} from '@mui/icons-material/';

export function Post({ post }) {
  const liked = false;
  
  return (
    <div className="post">
      <div className="container">
        <div className="user">
          <div className="userInfo">
            <img src={post.avatar} alt="avatar" />
            <div className="details">
              <Link to={`/profile/${post.userId}`} style={{textDecoration: "none", color: "inherit"}}>
                <span className="name">{post.name}</span>
              </Link>
              <span className="date">1 min ago</span>
            </div>
          </div>
          <MoreHorizOutlined />
        </div>
        <div className="content">
          <p>{post.description}</p>
          <img src={post.coverPicture} alt="cover picture" />
        </div>
        <div className="info">
          <div className="item">
            {liked ? <FavoriteOutlined /> : <FavoriteBorderOutlined />}
            12 Likes
          </div>
          <div className="item">
            <TextsmsOutlined />
            12 Comments
          </div>
          <div className="item">
            <ShareOutlined />
            Share
          </div>
        </div>
      </div>
    </div>
  )
}
