import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { DarkModeContextProvider } from "./context/DarkModeContext";

ReactDOM.createRoot(document.querySelector('#root') as HTMLElement).render(
  <React.StrictMode>
    <DarkModeContextProvider>
      <App />
    </DarkModeContextProvider>
  </React.StrictMode>
);
