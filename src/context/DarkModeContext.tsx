import { useState, useEffect } from "react";
import React, { createContext } from "react";

export interface DarkModeContextInterface {
    darkMode: boolean;
    toggleDarkMode: () => void;
}

export const DarkModeContext = createContext<DarkModeContextInterface>({ darkMode: false, toggleDarkMode: () => {} })

export const DarkModeContextProvider = ({ children }: {children: JSX.Element}) => {
    const [darkMode, setDarkMode] = useState<boolean>(
        localStorage.getItem("darkMode") === "true"
    );
    
    const toggleDarkMode = () => {
        setDarkMode(!darkMode)
    }

    useEffect(() => {
        localStorage.setItem("darkMode", `${darkMode}`)
    }, [darkMode]);

    return (
        <DarkModeContext.Provider value={{ darkMode, toggleDarkMode }}>
            {children}
        </DarkModeContext.Provider>
    );
};
