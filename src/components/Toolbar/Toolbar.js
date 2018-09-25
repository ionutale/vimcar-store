import React from 'react'
import css from './Toolbar.css'
import logo from '../../assets/logo&icons/vimcar-logo.svg'
import Cart from '../Cart/Cart';



const Toolbar = (props) => {
   return (
        <nav className={css.Toolbar}>
            <img className={css.Logo} src={logo} alt="vimcar"/>
            <Cart />
        </nav>
    )   
}

export default Toolbar

