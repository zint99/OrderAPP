import React, { useContext, useState, useEffect } from 'react'
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
        //小bug -> 当cartData.totalAmount为0时退出不了
        if (cartData.totalAmount === 0) return;
        setShowCheckout(showCheckout => !showCheckout)
    }
    useEffect(() => {
        if (cartData.totalAmount === 0) {
            setShowDeatail(false)
            setShowCheckout(false)
        }
    }, [cartData.totalAmount])

    return (
        <div className={classes.Cart} onClick={toggleDetails}>
            {/* 
                使用数量判断有个小bug，关闭detail后再添加商品detail会突然又出现
                每当购物车重新渲染->CartData更新就去检查totalAmount，如果为0直接设置setShowDeatail(false)
                    -> 注意不能在if语句中用hook -> 会造成死循环
            */}
            {showDeatail && <CartDetails toggleDetails={toggleDetails} />}
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
