import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import './index.css'
import App from './App.jsx';
import Home from "./Componets/Home.jsx";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />

    
        
  </StrictMode>,
)
