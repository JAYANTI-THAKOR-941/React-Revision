import React from 'react'
import { Routes,Route } from 'react-router-dom'
import UserManagement from './components/UserManagement'


const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<UserManagement/>}/>
      </Routes>
    </>
  )
}

export default App