import React from 'react'
import { Routes,Route } from 'react-router-dom'
import ProductData from './components/ProductData'


const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<ProductData/>}/>
      </Routes>
    </>
  )
}

export default App