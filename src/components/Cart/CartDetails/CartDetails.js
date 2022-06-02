import React, { useContext } from 'react'
import Backdrop from '../../UI/Backdrop/Backdrop'
import CartContext from '../../../store/CartContext'
import classes from './CartDetails.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import Meal from '../../Meals/Meal/Meal'


export default function CartDetails() {
    const { cartData, cartDispatch } = useContext(CartContext)
    return (
        <Backdrop>
            <div className={classes.CartDetail} onClick={(e) => { e.stopPropagation() }}>
                <header className={classes.Header}>
                    <h2 className={classes.Title}>餐品详情</h2>
                    <div className={classes.Clear} onClick={() => { cartDispatch({ type: "CLEAR" }) }}>
                        <FontAwesomeIcon icon={faTrash} />
                        <span>清空购物车</span>
                    </div>
                </header>
                <div className={classes.MealList}>
                    {cartData.items.map(meal => <Meal key={meal.id} meal={meal} NoDesc={true} />)}
                </div>
            </div>
        </Backdrop>

    )
}
