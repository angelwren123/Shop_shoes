import React from 'react'

const Colors = (props) => {
    // console.log(props)
    return (
        <div className='colors'>
            {props.colors.map((color)=>
            <button 
                key={color} 
                style={{background: color}}>
                 
            </button>)}
        </div>
    )
}

export default Colors
