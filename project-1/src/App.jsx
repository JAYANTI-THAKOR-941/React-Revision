import React from 'react'
import Products from './components/Products'
import { Routes,Route } from 'react-router-dom'
import ProductDescription from './components/ProductDescription'

const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Products/>}/>
        <Route path='/product-details/:id' element={<ProductDescription/>}/>
      </Routes>
    </>
  )
}

export default App