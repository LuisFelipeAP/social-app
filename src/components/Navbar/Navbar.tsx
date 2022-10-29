import React, { useContext } from "react";
import { useNavigate } from 'react-router-dom';
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
  let navigate = useNavigate();
  const { toggleDarkMode, darkMode } = useContext<DarkModeContextInterface>(DarkModeContext);
  const { user } = useContext<AuthContextInterface>(AuthContext);

  return (
    <div className="navbar">
      <div className="left">
        <Link to="/home" style={{ textDecoration: "none" }}>
          <span>socialapp</span>
        </Link>
        <HomeOutlined onClick={() => navigate("/home")} style={{cursor: "pointer"}} />
        {darkMode ? (
          <WbSunnyOutlined onClick={toggleDarkMode} style={{cursor: "pointer"}} />
        ) : (
          <DarkModeOutlined onClick={toggleDarkMode} style={{cursor: "pointer"}} />
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
