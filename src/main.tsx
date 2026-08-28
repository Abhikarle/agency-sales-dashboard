import React from 'react';
import { createRoot } from 'react-dom/client';
import Dashboard from '../pages/_index';
import '../base.css';

createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Dashboard />
  </React.StrictMode>
);
