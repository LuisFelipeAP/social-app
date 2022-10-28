import "./navbar.scss";
import React, { useContext } from "react";

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

import { Link } from "react-router-dom";
import { DarkModeContext, DarkModeContextInterface } from "../../context/DarkModeContext";
import { AuthContext, AuthContextInterface } from "../../context/auth";

export function Navbar() {
  const { toggleDarkMode, darkMode } = useContext<DarkModeContextInterface>(DarkModeContext);

  const { logout } = useContext<AuthContextInterface>(AuthContext);

  return (
    <div className="navbar">
      <div className="left">
        <Link to="/" style={{ textDecoration: "none" }}>
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
          <img src="https://thispersondoesnotexist.com/image" alt="avatar" />
          <span onClick={logout}>Logout</span>
        </div>
      </div>
    </div>
  );
}
