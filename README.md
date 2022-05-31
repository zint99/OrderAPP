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