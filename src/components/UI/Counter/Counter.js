import React from 'react'
import CounterCss from './Counter.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons'

export default function Counter(props) {
    const addButtonHandler = () => {
        props.onAdd(props.meal)
    }
    const subButtonHandler = () => {
        props.onSub(props.meal)
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
