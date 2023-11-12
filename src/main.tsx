import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import Contextbox from './Contextbox.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Contextbox>
    <App />
    </Contextbox>
  </React.StrictMode>,
)
