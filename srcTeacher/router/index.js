import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter);

const routes = [
  {
    path: '',
    redirect: '/login'
  },
  {
    path: '/home',
    component: () => import('../pages/Home/Home')
  },
  {
    path: '/profile',
    component: () => import('../pages/Profile/Profile')
  },
  {
    path: '/login',
    component: () => import('../pages/Login/Login')
  },
  {
    path: '/404',
    component: () => import('../pages/404')
  },
  {
    path: '/attention',
    component: () => import('../pages/Attention/Attention')
  },
  {
    path: '/fans',
    component: () => import('../pages/Fans/Fans')
  },
  {
    path: '/article',
    component: () => import('../pages/Article/Article')
  },
  {
    path: '/favorites',
    component: () => import('../pages/Favorites/Favorites')
  },
  {
    path: '/othersprofile',
    component: () => import('../pages/OthersProfile/OthersProfile')
  },
  {
    path: '/profiledetails',
    component: () => import('../pages/Profile/Details/Details')
  }
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

export default router