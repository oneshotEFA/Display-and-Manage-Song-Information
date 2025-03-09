import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import './index.css';
import App from './App.jsx';
import { SearchProvider } from './Componets/SearchProvider.jsx';

createRoot(document.getElementById('root')).render(
  <SearchProvider>
    <StrictMode>
        <App />
    </StrictMode>
  </SearchProvider>
);
