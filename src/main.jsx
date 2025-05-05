import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {routerapp} from './App.jsx'
import { RouterProvider } from 'react-router-dom'
import './index.css'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={routerapp} />
  </StrictMode>
)
