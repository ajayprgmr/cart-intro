import ReactDOM from 'react-dom/client'
import App from './App'
import './App.css'
import { AppProvider } from './context'
import { StrictMode } from 'react'
AppProvider
ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AppProvider>
      <App />
    </AppProvider>
  </StrictMode>
)
