import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import './index.css'

const root = document.getElementById('root') || document.body.appendChild(document.createElement('div'));
if (!root.id) root.id = 'root';

createRoot(root).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
