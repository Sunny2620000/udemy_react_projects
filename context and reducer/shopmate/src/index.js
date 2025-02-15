import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from "react-router-dom";
import './index.css';
import App from './App';
import {CardProvider } from './context/CardContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <CardProvider>
      <App />
      </CardProvider>
    </Router>
  </React.StrictMode>
);