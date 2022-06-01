import React from 'react'
import Counter from '../../UI/Counter/Counter'
import MealCss from './Meal.module.css'

export default function Meal(props) {
    const { title, desc, price, img } = props.meal
    return (
        <div className={MealCss.Meal}>
            <div className={MealCss.ImgBox}>
                <img src={img} />
            </div>
            <div className={MealCss.DescBox}>
                <h2 className={MealCss.Title}>{title}</h2>
                {props.NoDesc ? null : <p className={MealCss.Desc}>{desc}</p>}
                <div className={MealCss.PriceWrapper}>
                    <span className={MealCss.Price}>{price}</span>
                    <Counter
                        meal={props.meal}
                    />
                </div>
            </div>
        </div>
    )
}
