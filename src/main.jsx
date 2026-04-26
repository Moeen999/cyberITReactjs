import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import DynamicValues from './components/DynamicValues.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    {/* <DynamicValues/> */}
  </StrictMode>,
)
