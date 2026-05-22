import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './helpers/icons/icons.config.js'
import { LanguageProvider } from './helpers/i18n/context.jsx'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <LanguageProvider>
      <App />
    </LanguageProvider>
  </StrictMode>,
)
