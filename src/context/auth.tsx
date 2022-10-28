import React, { createContext, useCallback, useState } from "react";

import { faker } from '@faker-js/faker';

import { User } from "../models/User";


export interface AuthContextInterface {
    user: User;
    login: (username: string, password: string) => boolean;
    logout: () => boolean;
}

export const AuthContext = createContext<AuthContextInterface>({
    user: new User(),
    login: (username, password) => true,
    logout: () => true,
})

export const AuthContextProvider = ({ children }: { children: JSX.Element }) => {
    const [user, setUser] = useState<User>(new User());

    const fetch = () => {
        const loggedUser = new User();
        loggedUser.username = faker.internet.userName();
        loggedUser.avatar = faker.image.avatar();
        loggedUser.uuid = "123";
        return loggedUser;
    }

    const login = useCallback((username: string, password: string) => {
        const loggedUser = fetch();
        setUser(loggedUser);
        return true
    }, [])

    const logout = useCallback(() => {
        setUser(new User());
        return true
    }, [])

    const authContext = { user, login, logout };

    return (
        <AuthContext.Provider value={authContext}>
            {children}
        </AuthContext.Provider>
    );
};
