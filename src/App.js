import React, { useState } from 'react'
import FilterMeals from './components/FilterMeals/FilterMeals';
import Meals from './components/Meals/Meals'
import CartContext from './store/CartContext'


// 模拟一组食物数据
const MEALS_DATA = [
    {
        id: '1',
        title: '汉堡包',
        desc: '百分百纯牛肉配搭爽脆酸瓜洋葱粒与美味番茄酱经典滋味让你无法抵挡！',
        price: 12,
        img: '/img/meals/1.png'
    },
    {
        id: '2',
        title: '双层吉士汉堡',
        desc: '百分百纯牛肉与双层香软芝，加上松软面包及美味酱料，诱惑无人能挡！',
        price: 20,
        img: '/img/meals/2.png'
    },
    {
        id: '3',
        title: '巨无霸',
        desc: '两块百分百纯牛肉，搭配生菜、洋葱等新鲜食材，口感丰富，极致美味！',
        price: 24,
        img: '/img/meals/3.png'
    }, {
        id: '4',
        title: '麦辣鸡腿汉堡',
        desc: '金黄脆辣的外皮，鲜嫩幼滑的鸡腿肉，多重滋味，一次打动您挑剔的味蕾！',
        price: 21,
        img: '/img/meals/4.png'
    }, {
        id: '5',
        title: '板烧鸡腿堡',
        desc: '原块去骨鸡排嫩滑多汁，与翠绿新鲜的生菜和香浓烧鸡酱搭配，口感丰富！',
        price: 22,
        img: '/img/meals/5.png'
    }, {
        id: '6',
        title: '麦香鸡',
        desc: '清脆爽口的生菜，金黄酥脆的鸡肉。营养配搭，好滋味的健康选择！',
        price: 14,
        img: '/img/meals/6.png'
    }, {
        id: '7',
        title: '吉士汉堡包',
        desc: '百分百纯牛肉与香软芝士融为一体配合美味番茄醬丰富口感一咬即刻涌现！',
        price: 12,
        img: '/img/meals/7.png'
    }
];

export default function App() {
    const [mealsData, setMealsData] = useState(MEALS_DATA)
    const [cartData, setCartData] = useState({
        //商品
        items: [],
        //总数量
        totalAmount: 0,
        //总价
        totalPrice: 0
    })
    const addMealHandler = (meal) => {
        //复制cartData
        const newCartData = { ...cartData }
        //如果购物车中还未添加该商品
        if (!newCartData.items.find(item => item === meal)) {
            newCartData.items.push(meal)
            //初始化商品amount属性
            meal.amount = 1
        } else {
            //不用重复将商品Push进items,总数加1就ok
            meal.amount += 1
        }
        //更新总价和总数
        newCartData.totalAmount += 1
        newCartData.totalPrice += meal.price
        //更新carData
        setCartData(newCartData)
    }
    const subMealHandler = (meal) => {
        //复制cartData
        const newCartData = { ...cartData }
        //首先items中肯定存在此meal。点击一次就meal.amount减一
        if (meal.amount !== 0) {
            meal.amount -= 1
        } else {
            //直到meal.amount为0才将其从items中删除
            newCartData.items.splice(newCartData.items.findIndex(item => item === meal), 1)
        }
        //更新总价和总数
        newCartData.totalAmount -= 1
        newCartData.totalPrice -= meal.price
        //更新carData
        setCartData(newCartData)
    }
    const filterHandler = (keyword) => {
        //根据filter过滤数据
        const newMealsData = MEALS_DATA.filter(meal => meal.title.search(keyword) !== -1)
        setMealsData(newMealsData)
    }
    return (
        <CartContext.Provider value={{ addMealHandler, subMealHandler }}>
            <FilterMeals onFilt={filterHandler} />
            <Meals
                mealsData={mealsData}
            />
        </CartContext.Provider>
    )
}
