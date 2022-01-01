import React from 'react'
import { useParams } from 'react-router-dom'
import { DataContext } from '../Context'
import { useState, useEffect, useContext } from "react";
import { Link } from 'react-router-dom';
import Colors from './Colors';
import '../css/Details.css'
const Details = () => {
    const contextType = useContext(DataContext)
    const {id} = useParams();
    // console.log(contextType);
    const [product, setProduct] = useState([])
    useEffect(() => {
        if(id){
            const data = contextType.prods.filter((item)=>{
                return item._id === id
            })   
            setProduct(data);
        }
    }, [id])

    return (
        <>
            {
                product.map(item=>{
                    return <div className="details" key={item._id}>
                        <img src={item.src} alt="item.title" />
                        <div className="box">
                            <div className="row">
                                <h2>{item.title}</h2>
                                <span>${item.price}</span>
                            </div>
                            <Colors colors={item.colors} />
                            <p>{item.description}</p>
                            <p>{item.content}</p>
                            <Link to="/cart" className='cart' onClick={()=>contextType.addCart(item._id)}>
                                Add to cart
                            </Link>
                        </div>
                    </div>
                })
            }
        </>
    )
}

export default Details
