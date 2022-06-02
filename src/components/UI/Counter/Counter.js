import React, { useContext } from 'react'
import CartContext from '../../../store/CartContext'
import CounterCss from './Counter.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons'

export default function Counter(props) {
    const { cartDispatch } = useContext(CartContext)
    const addButtonHandler = () => {
        cartDispatch({ type: "ADD", payload: props.meal })
    }
    const subButtonHandler = () => {
        cartDispatch({ type: "SUB", payload: props.meal })
    }
    return (
        <div className={CounterCss.Counter}>
            {props.meal.amount && props.meal.amount !== 0 ? (
                <>
                    <button className={CounterCss.Sub} onClick={subButtonHandler}>
                        <FontAwesomeIcon icon={faMinus} />
                    </button>
                    <span className={CounterCss.Count}>{props.meal.amount}</span>
                </>
            )
                : null
            }
            <button className={CounterCss.Add} onClick={addButtonHandler}>
                <FontAwesomeIcon icon={faPlus} />
            </button>
        </div>
    )
}
