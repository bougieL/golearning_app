import Home from '@/page/Home'
import Login from '@/page/Login'
import User from '@/page/User'
import Image from '@/page/Image'
import Components from '@/page/Components'

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
  },
  {
    component: Image,
    path: '/image'
  },
  {
    component: Components,
    path: '/components'
  }
]