import { createRoot } from 'react-dom/client'
import { StrictMode } from 'react'
// import { TranslationProvider } from 'react-google-multi-lang'
import App from './screens/App/index.tsx'
import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      {/* <TranslationProvider apiKey={import.meta.env.VITE_GOOGLE_TRANSLATOR_API_KEY || ''} defaultLanguage='en'> */}
      <App />
      {/* </TranslationProvider> */}
    </BrowserRouter>
  </StrictMode>,
)
