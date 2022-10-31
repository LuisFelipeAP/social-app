import React from "react";

import "./home.scss";

import { Stories } from "../../components/Stories/Stories";
import { Posts } from "../../components/Posts/Posts";

export function Home() {
  return (
    <div className="home">
      <Stories />
      <Posts />
    </div>
  );
}
