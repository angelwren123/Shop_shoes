import React from 'react'
import { DataContext } from '../Context'
import {  useContext, useEffect } from "react";
import { Link } from 'react-router-dom'
import Colors from './Colors';
import '../css/Details.css'
import '../css/Cart.css'
const Cart = () => {
    const contextType = useContext(DataContext)
    useEffect(()=>{
        contextType.getTotal();
    })
    
    if(contextType.cart.length === 0){
        return <h2 style={{textAlign:"center"}}>Nothings Product</h2>
    }else{
        return (
            <>
                {
                    contextType.cart.map((item,index)=>{
                return <div className="details" key={index}>
                            <img src={item.src} alt="item.title" />
                            <div className="box">
                                <div className="row">
                                    <h2>{item.title}</h2>
                                    <span>${item.price * item.count}</span>
                                </div>
                                <Colors colors={item.colors} />
                                <p>{item.description}</p>
                                <p>{item.content}</p>
                                <div className='amount'>
                                    <button className='count' onClick={()=>contextType.reduction(item._id)}> - </button>
                                    <span>{item.count}</span>
                                    <button className='count'onClick={()=>contextType.increase(item._id)}> + </button>
                                </div>
                            </div>
                            <div className='delete' onClick={()=>contextType.removeProd(item._id)}>x</div>
                        </div>
                    })
                }
                <div className='total'>
                    <Link to="/payment">Payment</Link>
                    <h3>Total: ${contextType.total}</h3>
                </div>
            </>
        )
    }
    
}

export default Cart
