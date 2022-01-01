import React from 'react'
import {Link} from 'react-router-dom'
// import { useNavigate } from 'react-router'
import { useContext } from 'react'
import { DataContext} from '../Context'

import '../css/Products.css'

const Products = () => {
    // const navigate = useNavigate();
    const contextType = useContext(DataContext)
    // console.log(contextType)

    return (
        <div id="product">
            {
                contextType.prods.map((i)=>{
                    return <div className="card" key={i._id}>
                                <Link to={`/product/${i._id}`}>
                                    <img src={i.src} alt={i.title} />
                                </Link>
                                <div className="content">
                                    <h3><Link to={`/product/${i._id}`}>{i.title}</Link></h3>
                                </div>
                                <span>${i.price}</span>
                                <p>${i.description}</p>
                                <button onClick={()=>contextType.addCart(i._id)}>ADD TO CART</button>
                                {/* onClick={()=>navigate(`/product/${i.title}`)} */}
                            </div> 
                               
                })
            }
        </div>
    )
}

export default Products
