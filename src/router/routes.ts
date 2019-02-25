import {Home, Login, User, Image, Components, Containers} from '@/page'

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
    component: Containers,
    path: '/containers'
  },
  {
    component: Components,
    path: '/components'
  }
]