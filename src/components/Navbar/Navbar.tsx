import React, { useContext } from "react";
import { Link } from "react-router-dom";

import "./navbar.scss";

import { DarkModeContext, DarkModeContextInterface } from "../../context/DarkModeContext";
import { AuthContext, AuthContextInterface } from "../../context/auth";

import {
  HomeOutlined,
  DarkModeOutlined,
  WbSunnyOutlined,
  GridViewOutlined,
  NotificationsOutlined,
  EmailOutlined,
  PersonOutlineOutlined,
  SearchOutlined,
} from '@mui/icons-material';

export function Navbar() {
  const { toggleDarkMode, darkMode } = useContext<DarkModeContextInterface>(DarkModeContext);

  const { user } = useContext<AuthContextInterface>(AuthContext);

  return (
    <div className="navbar">
      <div className="left">
        <Link to="/home" style={{ textDecoration: "none" }}>
          <span>socialapp</span>
        </Link>
        <HomeOutlined />
        {darkMode ? (
          <WbSunnyOutlined onClick={toggleDarkMode} />
        ) : (
          <DarkModeOutlined onClick={toggleDarkMode} />
        )}
        <GridViewOutlined />
        <div className="search">
          <SearchOutlined />
          <input type="text" placeholder="Search" />
        </div>
      </div>
      <div className="right">
        <PersonOutlineOutlined />
        <EmailOutlined />
        <NotificationsOutlined />
        <div className="user">
          <img src={user.avatar} alt="avatar" />
          <span>{user.username}</span>
        </div>
      </div>
    </div>
  );
}
