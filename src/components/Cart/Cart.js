import React from 'react'
import css from './Cart.css'
import cartSVG from '../../assets/logo&icons/cart.svg'

const Cart = ({itemsInCart = 0}) => {
   return (
        <div className={css.Cart}>
            <div className={css.Badge} >{itemsInCart}</div>
            <img className={css.CartImg} src={cartSVG} alt="See cart" />
        </div>
    )   
}

export default Cart
