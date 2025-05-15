import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import Register from './pages/register/index'
import { GlobalStyle } from './styles/GlobalStyles'
import { RouterProvider } from 'react-router-dom'
import router from './router.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GlobalStyle/>
    <RouterProvider router = {router}/>
  </StrictMode>,
)
