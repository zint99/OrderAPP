import React, { useContext, useState } from 'react'
import classes from './Cart.module.css'
import iconImg from '../../assets/bag.png'
import CartContext from '../../store/CartContext'
import CartDetails from './CartDetails/CartDetails'
import Checkout from './Checkout/Checkout'

export default function Cart() {
    const { cartData } = useContext(CartContext)
    const [showDeatail, setShowDeatail] = useState(false)
    const [showCheckout, setShowCheckout] = useState(false)
    const toggleDetails = () => {
        if (cartData.totalAmount === 0) return;
        setShowDeatail(showDeatail => !showDeatail)
    }
    const toggleCheckout = () => {
        if (cartData.totalAmount === 0) return;
        setShowCheckout(showCheckout => !showCheckout)
    }

    return (
        <div className={classes.Cart} onClick={toggleDetails}>
            {showDeatail && cartData.totalAmount ? <CartDetails toggleDetails={toggleDetails} /> : null}
            {showCheckout && <Checkout toggleCheckout={toggleCheckout} />}
            <div className={classes.Icon} >
                <img src={iconImg} />
                {cartData.totalAmount !== 0 && <span className={classes.TotalAmount}>{cartData.totalAmount}</span>}
            </div>
            {cartData.totalPrice === 0 ? <p className={classes.NoMeal}>未选购商品</p> : <p className={classes.Price}>{cartData.totalPrice}</p>}
            <button className={`${cartData.totalAmount !== 0 ? classes.Button : classes.Disabled}`} onClick={toggleCheckout}>去结算</button>
        </div >
    )
}
