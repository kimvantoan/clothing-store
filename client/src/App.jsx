import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import NewPassword from './pages/NewPassword'
import ProductList from './pages/ProductList'
import Cart from './pages/Cart'
import Wishlist from './pages/Wishlist'
import Account from './pages/Account'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/signin' element={<SignIn/>}/>
        <Route path='/signup' element={<SignUp/>}/>
        <Route path='/newpassword' element={<NewPassword/>}/>
        <Route path='/men' element={<ProductList/>}/>
        <Route path='/women' element={<ProductList/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/wishlist' element={<Wishlist/>}/>
        <Route path='/account' element={<Account/>}/>
      </Routes>
    </div>
  )
}

export default App