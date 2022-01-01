import React from 'react'
import {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import Menu from './svg/bars-solid.svg'
import CartIcon from './svg/shopping-cart-solid.svg'
import Close from './svg/times-solid.svg'
import './css/Header.css'
import { useContext } from 'react'
import { DataContext } from './Context'


const Header = () => {
    const contextType = useContext(DataContext)
    // 
    const [toggle, setToggle] = useState(true)
    useEffect(() => {
        const handleResize =()=>{
            if(window.innerWidth<600){
                setToggle(false)
            }else{
                setToggle(true)
            }
        }
        window.addEventListener("resize",handleResize)
        return()=>{
            window.removeEventListener('resize',handleResize)
        }
    }, [toggle])
    return (
        
        <header>
            <div className="menu" onClick={()=>setToggle(!toggle)}>
                <img src={Menu} alt="CartIcon" width="20"/>
            </div>
            <div className='logo'>
                <h1><Link to="/">Nike</Link></h1>
            </div>
            <nav>
                {toggle &&<ul className={toggle ? "toogle" : ""}>
                    <li><Link to="/#">Home</Link></li>
                    <li><Link to="/product">Product</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/login">Login / Register</Link></li> 
                    <li className="close" onClick={()=>setToggle(!toggle)}>
                        <img src={Close} alt="Close" width="20" />
                    </li>
                </ul>}
                <div className="nav-cart">
                    <span>{contextType.cart.length}</span>
                    <Link to="/cart">
                        <img src={CartIcon} alt="Cart" width="20" />
                    </Link>
                </div>
            </nav>
        </header>
    )
}

export default Header
