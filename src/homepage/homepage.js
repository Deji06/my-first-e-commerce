import React, { useState } from 'react'
import classes from './homepage.module.css'
import image1 from '../images/image-product-1.jpg'
import image2 from '../images/image-product-2.jpg'
import image3 from '../images/image-product-3.jpg'
import image4 from '../images/image-product-4.jpg'
import minus from '../images/icon-minus.svg'
import plus from '../images/icon-plus.svg'
import cart from '../images/icon-cart.svg'


const Homepage = ({count, setCount}) => {
   const[value, setValue] = useState(0)


   const addToCart = ()=>{
      setCount(count + value)
      // navigate
   }


  return (
  <>
     <div className={classes.container}>
        <div className={classes.leftContainer}>
            <img className={classes.image} src={image1} alt="" />
            <div className={classes.images}>
               <img src={image1} alt="" />
               <img src={image2} alt="" />
               <img src={image3} alt="" />
               <img src={image4} alt="" />
            </div>
        </div>

        <div className={classes.rightContainer}>
            <p className={classes.sneakers_text}>sneakers company</p>
            <h1>fall limited edition sneakers</h1>
            <p className={classes.text}>These low-profile sneakers are your perfect casual wear companion. Featuring a 
               durable rubber outer sole, they’ll withstand everything the weather can offer.
            </p>
            <div className={classes.leg}>
                  <div className={classes.price}>
                     <p>$125.00</p>
                     <h5>50%</h5>
                  </div>
                  <p className={classes.discount}>$250.00</p>
            </div>`
            <div className={classes.box}>
               <div className={classes.left_box}>
                  <img className={classes.sign} src={minus} alt=""  onClick={()=>setValue(value => value - 1)}/>
                  <p>{value}</p>
                  <img className={classes.sign} src={plus} alt=""  onClick={()=>setValue(value => value + 1)} />
               </div>
               
               <button className={classes.right_box} onClick={addToCart}>
               <img className={classes.cart} src={cart} alt=""/>
               <p >Add to cart</p>

               </button>
            </div>

        </div>
      </div>
  </>

)
}

{/* <img id="image" class="image" src="/images/image-product-1.jpg" alt="">
<div class="image-container">
     <img src="/images/image-product-1.jpg" alt="">
     <img src="/images/image-product-2.jpg" alt="">
     <img src="/images/image-product-3.jpg" alt="">
     <img src="/images/image-product-4.jpg" alt="">
</div> */}
export default Homepage