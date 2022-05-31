import React from 'react'
import Meal from './Meal/Meal'
import MealsCss from './Meals.module.css'

export default function Meals(props) {
    const { mealsData } = props
    const meals = mealsData.map(meal => <Meal
        key={meal.id}
        meal={meal}
        onAdd={props.onAdd}
        onSub={props.onSub}
    />)
    return (
        /*
            滚动条设置给Meals自身
        */
        <div className={MealsCss.Meals}>
            {meals}
        </div>
    )
}
