import React from 'react'
import {
    Routes,
    Route
  } from "react-router-dom";
import Products from './section/Products'
import Details from './section/Details'
import Cart from './section/Cart';
import Payment from './section/Payment';
const Section = () => {
    return (
        <Routes>
            <Route path="/product" element={<Products/>}/>
            <Route path="/product/:id" element={<Details/>}/>
            <Route path="/cart" element={<Cart/>}/>
            <Route path="/payment" element={<Payment/>}/>
        </Routes>
    )
}

export default Section
