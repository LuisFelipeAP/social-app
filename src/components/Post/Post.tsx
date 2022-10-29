import React, { useState } from "react";
import { Link } from "react-router-dom";

import "./post.scss";

import { Comments } from "../Comments/Comments";

import { 
  MoreHorizOutlined,
  FavoriteBorderOutlined,
  FavoriteOutlined,
  TextsmsOutlined,
  ShareOutlined
} from '@mui/icons-material/';

export function Post({ post }) {
  const [isLiked, setLiked] = useState(false);
  const [isCommentOpen, setCommentOpen] = useState(false)
  
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
          <div className="item" onClick={() => setLiked(!isLiked)}>
            {isLiked ? <FavoriteOutlined /> : <FavoriteBorderOutlined />}
            12 Likes
          </div>
          <div className="item" onClick={() => setCommentOpen(!isCommentOpen)}>
            <TextsmsOutlined />
            12 Comments
          </div>
          <div className="item">
            <ShareOutlined />
            Share
          </div>
        </div>
        {isCommentOpen && <Comments />}
      </div>
    </div>
  )
}
