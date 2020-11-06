import Home from '@pages/home'
import Category from '@pages/category'
import Product from '@pages/product'
import Role from '@pages/role'
import User from '@pages/user'
import Bar from '@pages/charts/bar'
import Line from '@pages/charts/line'
import Pie from '@pages/charts/pie'

let routes = [
  { path:'/home',component: Home },
  { path:'/category',component: Category },
  { path:'/product',component: Product },
  { path:'/role',component: Role },
  { path:'/user',component: User },
  { path:'/charts/bar',component: Bar },
  { path:'/charts/line',component: Line },
  { path:'/charts/pie',component: Pie }
]

export default routes