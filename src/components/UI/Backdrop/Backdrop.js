import React from 'react'
import ReactDOM from 'react-dom'
import classes from './Backdrop.module.css'

const backdropRoot = document.getElementById('backdrop-root')
export default function Backdrop(props) {
    return ReactDOM.createPortal(<div className={`${classes.Backdrop
        } ${props.className}`}>
        {props.children}
    </div>, backdropRoot)
}
