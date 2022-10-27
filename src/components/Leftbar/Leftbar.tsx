import "./leftbar.scss";

import React from "react";

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
  return (
    <div className="leftBar">
      <div className="container">
        <div className="menu">
          <div className="user">
            <img src="https://thispersondoesnotexist.com/image" alt="avatar" />
            <span>Username</span>
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
