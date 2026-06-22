import React from 'react'
import { Routes,Route } from 'react-router-dom'
import AdminDashboard from './admin/AdminDashboard'


const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<AdminDashboard/>}/>
      </Routes>
    </>
  )
}

export default App