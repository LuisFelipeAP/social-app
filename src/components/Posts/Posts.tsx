import React from "react";

import "./posts.scss";

import { Post } from "../Post/Post";

export function Posts() {
  const posts = new Array(500).fill(1).map((_, index) => ({
    id: index + 1,
    name: "Lorem Ipsum",
    userId: index + 1,
    avatar: "https://thispersondoesnotexist.com/image",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta doloribus quod sunt voluptatem at consequatur.",
    coverPicture: `https://picsum.photos/id/${index + 1}/600/400`,
  }));

  return (
    <div className="posts">
      {posts.map(post => 
        <Post post={post} key={post.id} />
      )}
    </div>
  )
}
