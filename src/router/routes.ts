import Home from '../page/Home'
import Login from '../page/Login'
import User from '../page/User'

export default [
  {
    component: Home,
    exact: true,
    path: '/'
  },
  {
    component: Login,
    path: '/login'
  },
  {
    component: User,
    path: '/user'
  }
]