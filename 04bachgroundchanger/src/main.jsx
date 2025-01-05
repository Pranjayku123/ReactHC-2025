import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import BackgroundChanger from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BackgroundChanger />
  </StrictMode>,
)
