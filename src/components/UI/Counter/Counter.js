import React from 'react'
import CounterCss from './Counter.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons'

export default function Counter(props) {
    return (
        <div className={CounterCss.Counter}>
            {props.amount && props.amount !== 0 ? (
                <>
                    <button className={CounterCss.Sub}>
                        <FontAwesomeIcon icon={faMinus} />
                    </button>
                    <span className={CounterCss.Count}>{props.amount}</span>
                </>
            )
                : null
            }
            <button className={CounterCss.Add}>
                <FontAwesomeIcon icon={faPlus} />
            </button>
        </div>
    )
}
