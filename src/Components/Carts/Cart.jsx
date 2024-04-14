import React from 'react'
import './Cart.css'

const Carts = (props) => {
    const Cart =[id, title, price, description, category, image]= (props)

    return (
        <div className='cart-wrap'>
      <div id='cart-image'>    
      <img src={props.image} alt="" /></div>
            <div>
                <h2 className='cart-id'>id: {props.id}</h2>
                <h1 className='cart-title'>title: {props.title}</h1>
                <p className='cart-price'>price: ${props.price}</p>
                <p className='cart-description'>description: {props.description}</p>
                <p className='cart-category'>category: {props.category}</p>
            </div>
        </div>
    )
}

export default Carts