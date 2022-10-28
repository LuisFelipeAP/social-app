import React, { useContext } from "react";

import "./leftbar.scss";

import { AuthContext, AuthContextInterface } from "../../context/auth";

import {
  GroupAddOutlined,
  GroupsOutlined,
  LocalGroceryStoreOutlined,
  PlayCircleOutlineOutlined,
  TimerOutlined,
  CalendarMonthOutlined,
  SportsEsportsOutlined,
  CollectionsOutlined,
  VideocamOutlined,
  ForumOutlined,
  FactoryOutlined,
  VideoFileOutlined,
  OndemandVideoOutlined  
} from '@mui/icons-material';

export function Leftbar() {
  const { user } = useContext<AuthContextInterface>(AuthContext);

  return (
    <div className="leftBar">
      <div className="container">
        <div className="menu">
          <div className="user">
            <img src={user.avatar} alt="avatar" />
            <span>{user.username}</span>
          </div>
          <div className="item">
            <GroupAddOutlined />
            <span>Friends</span>
          </div>
          <div className="item">
            <GroupsOutlined />
            <span>Groups</span>
          </div>
          <div className="item">
            <LocalGroceryStoreOutlined />
            <span>Marketplace</span>
          </div>
          <div className="item">
            <PlayCircleOutlineOutlined />
            <span>Watch</span>
          </div>
          <div className="item">
            <TimerOutlined />
            <span>Memories</span>
          </div>
        </div>
        <hr />
        <div className="menu">
          <span>Your shortcuts</span>
          <div className="item">
            <CalendarMonthOutlined />
            <span>Events</span>
          </div>
          <div className="item">
            <SportsEsportsOutlined />
            <span>Gaming</span>
          </div>
          <div className="item">
            <CollectionsOutlined />
            <span>Gallery</span>
          </div>
          <div className="item">
            <VideocamOutlined />
            <span>Videos</span>
          </div>
          <div className="item">
            <ForumOutlined />
            <span>Messages</span>
          </div>
        </div>
        <hr />
        <div className="menu">
          <span>Others</span>
          <div className="item">
            <FactoryOutlined />
            <span>Fundraiser</span>
           </div>
          <div className="item">
            <VideoFileOutlined />
            <span>Tutorials</span>
          </div>
          <div className="item">
            <OndemandVideoOutlined />
            <span>Courses</span>
          </div>
        </div>
      </div>
    </div>
  );
}
