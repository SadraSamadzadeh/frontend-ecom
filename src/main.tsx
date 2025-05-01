import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import StyleProvider from './style/StyleProvider.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <StyleProvider>
      <App />
    </StyleProvider>
  </StrictMode>,
)
