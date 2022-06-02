import React, { useContext } from 'react'
import ReactDOM from 'react-dom'
import Bar from './Bar/Bar'
import classes from './Checkout.module.css'
import CartContext from '../../../store/CartContext'
import CheckoutItem from './CheckoutItem/CheckoutItem'

export default function Checkout(props) {
    const { cartData } = useContext(CartContext)
    return ReactDOM.createPortal((
        <div className={classes.Checkout}>
            <div onClick={props.toggleCheckout} className={classes.Quit}>x</div>
            <div className={classes.MealsDesc}>
                <header className={classes.Header}>
                    <h2 className={classes.Title}>餐品详情</h2>
                </header>
                <div className={classes.Meals}>
                    {cartData.items.map(item => <CheckoutItem key={item.id} meal={item} />)}
                </div>
                <footer className={classes.Footer}>
                    <p className={classes.TotalPrice}>{cartData.totalPrice}</p>
                </footer>
            </div>
            <Bar totalPrice={cartData.totalPrice} />
        </div>
    ), document.getElementById('checkout-root'))
}
