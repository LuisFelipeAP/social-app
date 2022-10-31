import React, { useContext } from "react";
import { Link } from "react-router-dom";

import "./login.scss";

import { AuthContext, AuthContextInterface } from "../../context/auth";
import { User } from "../../models/User";

export const Login = () => {
    const { login } = useContext<AuthContextInterface>(AuthContext);

    return (
        <div className="login">
            <div className="card">
                <div className="left">
                    <h1>Hello World.</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed suscipit, dicta debitis eaque nam, quos dolorem vel voluptatum deserunt cumque voluptatem impedit?</p>
                    <span>Don&apos;t you have an account?</span>
                    <Link to="/register">
                        <button>Register</button>
                    </Link>
                </div>
                <div className="right">
                    <h1>Login</h1>
                    <form>
                        <input type="text" placeholder="Username" />
                        <input type="password" placeholder="Password" />
                        <button onClick={() => {console.log(User); login("", "")}}>Login</button>
                    </form>
                </div>
            </div>
        </div>
    );
};
