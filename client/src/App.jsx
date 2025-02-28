import React from 'react'
import { Button } from './components/ui/button'
import { Routes , Route } from 'react-router-dom'
import AuthPage from './pages/auth'

function App() {
  return (
   <Routes>
    <Route path="/auth" element={<AuthPage />} />
   </Routes>
  )
}

export default App