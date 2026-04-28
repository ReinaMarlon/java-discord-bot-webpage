import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import { BrowserRouter, Navigate, Route, Routes } from 'react-router'
import { AuthCallback } from './services/AuthCallback'

import './index.css'

import { MainPage } from './pages/Main/MainPage'
import { Dashboard } from './pages/Dashboard/Dashboard'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Navigate to='/main' replace />} />
        <Route path='/main' element={<MainPage />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/auth/callback' element={<AuthCallback />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
