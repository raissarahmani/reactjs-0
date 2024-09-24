import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import SignUpPage from './pages/signup-signin/signup'
import SignInPage from './pages/signup-signin/signin'
import Home from './pages/home/home'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <SignUpPage />
    <SignInPage />
    <Home />
  </StrictMode>
)
