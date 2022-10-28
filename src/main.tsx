import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import './index.css';

import { DarkModeContextProvider } from "./context/DarkModeContext";
import { AuthContextProvider } from './context/auth';

ReactDOM.createRoot(document.querySelector('#root') as HTMLElement).render(
  <React.StrictMode>
    <AuthContextProvider>
      <DarkModeContextProvider>
        <App />
      </DarkModeContextProvider>
    </AuthContextProvider>
  </React.StrictMode>
);
