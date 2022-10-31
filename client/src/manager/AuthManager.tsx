import React, { useContext, useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom';
import { AuthContext, AuthContextInterface } from '../context/auth';

export function AuthManager({ children }: { children: JSX.Element }) {
    const { user } = useContext<AuthContextInterface>(AuthContext);

    let navigate = useNavigate();

    useEffect(() => {
        if(user.isAuth()) {
            navigate("/home");
        }
    }, [ user ])

    return (
        <>
            {children}
        </>
    )
}
