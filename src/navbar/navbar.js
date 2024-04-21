import React, {useState} from 'react'
import logo from '../images/logo.svg'
import cart from '../images/icon-cart.svg'
import profilePic from '../images/image-avatar.png'
import classes from './navbar.module.css'
import toggleBar from '../images/icon-menu.svg'
import toggleClose from '../images/icon-close.svg'
// import { useState } from 'react'

const Navbar = ({count, setCount}) => {
    const[showLinks, setShowLinks] = useState(false);
    const[showCart, setShowCart] = useState(false)

    const toggleLinks = () =>{
        setShowLinks(!showLinks)
    }

    // const alertMenu = ()=> {
    // //    if (showCart && count == 0) {
    // //     return ( 
    // //     <div className={classes.cartDisplay}>
    // //         <p>cart</p>
    // //         <div className="line"></div>
    // //         <p>your cart is empty </p>
    // //     </div> )
    // //      } 
    // //     //  else{
    // //     //     setShowCart(!showCart)

    // //     // }

    // }

    console.log(showCart)
  return (
    <nav className={classes.nav} >
        <div className={classes.left}>
            <div className={classes.menu}>
                {!showLinks ? <img className={classes.toggle} src={toggleBar} onClick={toggleLinks} alt="" /> :
                <img className={classes.close} onClick={toggleLinks} src={toggleClose} alt="" />}

                {showLinks && <div className={classes.mobile_links}>
                    <a href="">collections</a>
                    <a href="">men</a>
                    <a href="">women</a>
                    <a href="">about</a>
                    <a href="">contact</a>
                </div>}
                <img src={logo} alt="" />
            </div>
            <div className={classes.links}>
                <a href="">collections</a>
                <a href="">men</a>
                <a href="">women</a>
                <a href="">about</a>
                <a href="">contact</a>
            </div>
        </div>
        
        <div className={classes.right}>
            <div className={classes.cart}>
                <img className={classes.cart_img} src={cart} onClick={()=> setShowCart(prev => !prev)}  alt="cart Image"  />
                {!showCart && count === 0 && (
                    <div className={classes.cartDisplay}>
                
                        <p>your cart is empty </p>
                    </div> 
                    )}
                
                <span>{count}</span>  
            </div>
            <img src={profilePic} alt="" />
        </div>
    </nav>
  )
}

export default Navbar