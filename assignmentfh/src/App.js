
import './App.css';
import React from 'react'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import Login from './views/Login'
import Register from './views/Register'
import Dashboard from './views/dashboard'

const App = () => {
  return (
  <>
  <BrowserRouter>
      <Routes>
      <Route path="/login" element={ <Login/> } />
      <Route path="/register" element={ <Register/> } />
      <Route path="/dashboard" element={ <Dashboard/> } />
      </Routes>
 </BrowserRouter>
  </>
  )
}

export default App