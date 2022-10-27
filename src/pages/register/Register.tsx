import { Link } from "react-router-dom";
import React from "react";
import "./register.scss";

export const Register = () => {
  return (
    <div className="register">
        <div className="card">
            <div className="left">
                <h1>Social App</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed suscipit, dicta debitis eaque nam, quos dolorem vel voluptatum deserunt cumque voluptatem impedit?</p>
                <span>Do you have an account?</span>
                <Link to="/login">
                    <button>Login</button>
                </Link>
                
            </div>
            <div className="right">
                <h1>Register</h1>
                <form>
                    <input type="text" placeholder="Username" />
                    <input type="email" placeholder="Password" />
                    <input type="password" placeholder="Password" />
                    <input type="text" placeholder="Password" />
                    <button>Register</button>
                </form>
            </div>
        </div>
    </div>
  );
};
