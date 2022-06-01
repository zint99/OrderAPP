项目整体架构


1.项目准备
- 配置meta标签

- 添加静态资源汉堡图片

- 设置公共样式

- 设置移动端适配
  
  2.Meals组件
  
    - Meal组件
        - 引入meals的模拟数据(实际开发中数据都从服务器获得) -> 因为搜索框和购物车组件都要使用meals -> 所以提升存放至App组件
    - Counter组件
        - 引入iconfont不起作用
        - 改用fontAwesome
  
  3.Cart组件
  
  - 将购物车数据提升至App组件
    - 完成addMealHandler和subMealHandler -> 第一次使用一层层传递属性(很恶心，App中的两个函数只有Counter要使用，但是经过两个中间组件进行传递，对两个中间组件这个函数是没有作用的)。App -> Meals -> Ｍeal -> Counter
  - 使用context修改数据传递

​		4.完成**搜索框过滤**功能

​		5.完成**购物车条两种状态**

​			Backdrop的使用：Backdrop高阶组件。需要在index.html中再添加一个供Backdrop使用的div。使用`ReactDOM.createPotal`创建Backdrop组件，组件内放children

​		6.购物车**详情页**

​			作为遮罩的插槽使用。一点击去结算就应该显示详情页









bug:

1.`subMealHandler`有个逻辑错误，如果先判断`meal.amount !== 0`。则当点击sub按钮将其从1减到后，由于条件渲染将sub按钮隐藏了起来，所以再也无法执行`subMealHandler`，更无法将其删除了

改bug -> 将条件判断顺序互换。先判断`meal.amount === 0`，执行删除操作 -> **还是错的！** ->经调试bug应该是因为`meal.amount`从1减到0后，根本没机会再执行`subMealHandler`函数进行删除判断

```react
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
```

```react
    const subMealHandler = (meal) => {
        //复制cartData
        const newCartData = { ...cartData }
        //首先items中肯定存在此meal。点击一次就meal.amount减一
        meal.amount -= 1
        if (meal.amount === 0) {
            //直到meal.amount为0才将其从items中删除
            newCartData.items.splice(newCartData.items.findIndex(item => item === meal), 1)
        }
        //更新总价和总数
        newCartData.totalAmount -= 1
        newCartData.totalPrice -= meal.price
        //更新carData
        setCartData(newCartData)
    }
```

- 处理了Cart组件点击事件`toggleDetail`冒泡

  ```react
  <div className={classes.CartDetail} onClick={(e) => { e.stopPropagation() }}>
  ```

2.`showDetail`和`toggleDetail`还有bug没解决

3.`Checkout`的小缺口等以后css学精了再来写