import React from 'react'
import { createContext, useState,useEffect } from 'react'

const products = [{
    "_id": "1",
    "title": "Nike Shoes 01",
    "src": "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/awjogtdnqxniqqk0wpgf/air-max-270-mens-shoes-KkLcGR.png",
    "description": "UI/UX designing, html css tutorials",
    "content": "Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.",
    "price": 23,
    "colors":["red","black","crimson","teal"],
    "count": 1
},
{
    "_id": "2",
    "title": "Nike Shoes 02",
    "src": "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/3f347d45-5468-4871-8331-4bc28306a112/air-vapormax-2021-fk-mens-shoes-NpTfFz.png",
    "description": "UI/UX designing, html css tutorials",
    "content": "Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.",
    "price": 19,
    "colors":["red","crimson","teal"],
    "count": 1
},
{
    "_id": "3",
    "title": "Nike Shoes 03",
    "src": "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,b_rgb:f5f5f5/fb7eda3c-5ac8-4d05-a18f-1c2c5e82e36e/blazer-mid-77-vintage-mens-shoes-nw30B2.png",
    "description": "UI/UX designing, html css tutorials",
    "content": "Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.",
    "price": 50,
    "colors":["lightblue","white","crimson","teal"],
    "count": 1
},
{
    "_id": "4",
    "title": "Nike Shoes 04",
    "src": "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,b_rgb:f5f5f5/f675baa0-414e-4239-ac27-eb8d9cc1101f/sb-zoom-blazer-mid-skate-shoes-qX3MZV.png",
    "description": "UI/UX designing, html css tutorials",
    "content": "Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.",
    "price": 15,
    "colors":["orange","black","crimson","teal"],
    "count": 1
},
{
    "_id": "5",
    "title": "Nike Shoes 05",
    "src": "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,b_rgb:f5f5f5/60d885c6-c70b-4202-b978-c6ae431bc295/air-jordan-1-low-se-shoes-WfSnjt.png",
    "description": "UI/UX designing, html css tutorials",
    "content": "Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.",
    "price": 10,
    "colors":["orange","black","crimson","teal"],
    "count": 1
},
{
    "_id": "6",
    "title": "Nike Shoes 06",
    "src": "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,b_rgb:f5f5f5/4b1c52c6-7e70-48d2-a4c7-0a05d66dedc5/air-jordan-13-retro-mens-shoes-Wgz8G4.png",
    "description": "UI/UX designing, html css tutorials",
    "content": "Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.",
    "price": 17,
    "colors":["orange","black","crimson","teal"],
    "count": 1
}]
const DataContext = createContext()

const DataProvider = ({children}) => {
    const [prods, setProds] = useState(products)
    const [cart, setCart] = useState([])
    const [total, setTotal] = useState(0)
    const addCart = (id) =>{
        const check = cart.every(item =>{
            return item._id !== id
        })
        if(check){
            const data = prods.filter(prod =>{
                return prod._id === id
            })
            setCart([...cart,...data])
            // alert('Added to cart!')
        }else{
            alert('The product has been added to cart!')
        }
    }
    const reduction = id =>{
        const newCart = [...cart];
        newCart.forEach(item => {
            if(item._id===id){
                item.count === 1 ? item.count = 1 : item.count -=1;
            }
        })
        setCart(newCart)
        getTotal()
    }
    const increase = id =>{
        const newCart = [...cart];
        newCart.forEach(item => {
            if(item._id===id){
                item.count +=1;
            }
        })
        setCart(newCart)
        getTotal()
    }
    const removeProd = id =>{
        if(window.confirm('Do you want to delete this product?')){
            const newCart = [...cart]
            cart.forEach((item, index) =>{
                if(item._id === id ){
                    newCart.splice(index,1)
                } 
            })
            setCart(newCart)
            getTotal();
        }
    }
    const getTotal = () =>{
        const res = cart.reduce((prev, item)=>{
            return prev + (item.price * item.count) 
        },0)
        setTotal(res)
    }
    useEffect(()=>{
        localStorage.setItem('dataCart',JSON.stringify(cart))
        localStorage.setItem('dataTotal',JSON.stringify(total))      
    },[cart,total])
    const dataCart = JSON.parse(localStorage.getItem('dataCart'));  
    const dataTotal = JSON.parse(localStorage.getItem('dataTotal'));
    useEffect(()=>{
      
        if(dataCart !== null){
            setCart(dataCart)
        }
        
        if(dataTotal !== null){
            setTotal(dataTotal)
        }
    },[])
    const value = {
        prods,
        addCart,
        cart,
        reduction,
        increase,
        removeProd,
        total,
        getTotal
    }
    return (
        <DataContext.Provider value={value}>
            {children}
        </DataContext.Provider>    
    )
}
export {DataContext, DataProvider}
