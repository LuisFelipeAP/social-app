import React, { useContext } from "react";
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  Navigate,
} from "react-router-dom";

import './App.css';
import "./style.scss";

import { DarkModeContext, DarkModeContextInterface } from "./context/DarkModeContext";
import { AuthContext, AuthContextInterface } from './context/auth';
import { AuthManager } from './manager/AuthManager';

import { Login } from './pages/login/Login';
import { Register } from './pages/register/Register';
import { Home } from './pages/home/Home';
import { Profile } from './pages/profile/Profile';

import { Leftbar } from './components/Leftbar/Leftbar';
import { Rightbar } from './components/Rightbar/Rightbar';
import { Navbar } from './components/Navbar/Navbar';

function App() {
  const { user } = useContext<AuthContextInterface>(AuthContext);
  const { darkMode } = useContext<DarkModeContextInterface>(DarkModeContext);

  const Layout = () => {
    return (
      <div className={`theme-${darkMode ? "dark" : "light"}`}>
        <Navbar />
        <div style={{ display: "flex" }}>
          <Leftbar />
          <div style={{ flex: "6" }}>
            <Outlet />
          </div>
          <Rightbar />
        </div>
      </div>
    );
  };

  const ProtectedRoute = ({ children }: { children: JSX.Element }) => {
    if (!user.isAuth()) {
      return <Navigate to="/login" />;
    }
    return children;
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <AuthManager>
          <ProtectedRoute>
            <Layout />
          </ProtectedRoute>
        </AuthManager>
      ),
      children: [
        {
          path: "/home",
          element: <Home />
        },
        {
          path: "/profile/:id",
          element: <Profile />
        },
      ],
    },
    {
      path: "/login",
      element:
        <AuthManager>
          <Login />
        </AuthManager>,
    },
    {
      path: "/register",
      element: <Register />,
    },
  ]);

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
