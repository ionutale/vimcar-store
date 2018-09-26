import React from 'react'
import css from './Toolbar.css'
import logo from '../../assets/logo&icons/vimcar-logo.svg'
import Cart from '../Cart/Cart';

const Toolbar = ({itemsInCart, onClick}) => 
    (
        <nav className={css.Toolbar}>
            <img className={css.Logo} src={logo} alt="vimcar logo"/>
            <Cart itemsInCart={itemsInCart} onClick={onClick}/>
        </nav>
    ) 

export default Toolbar

