import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../Login'
import Home from '../Home'
import Manage from '../Manage'
import Plane from '../views/Plane'
import Exam from '../views/check/Exam'
import Allow from '../views/check/Allow'
import Book from '../views/result/Book'
import Eroll from '../views/result/Eroll'
Vue.use(VueRouter)

const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push (location, onResolve, onReject) {
  if (onResolve || onReject) return originalPush.call(this, location, onResolve, onReject)
  return originalPush.call(this, location).catch(err => err)
}

const routes = [
  {
    path: '/', redirect: '/login'
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/manage',
    name: 'Manage',
    component: Manage,
    redirect: '/plane',
    children: [
      {
        path: '/check/allow',
        name: 'Allow',
        component: Allow
      },
      {
        path: '/check/exam',
        name: 'Exam',
        component: Exam
      },
      {
        path: '/result/book',
        name: 'Book',
        component: Book
      },
      {
        path: '/result/eroll',
        name: 'Eroll',
        component: Eroll
      },
      {
        path: '/plane',
        name: 'Plane',
        component: Plane
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

// 挂载路由导航守卫，检验用户是否登录，若未登录，跳转到登陆界面
router.beforeEach((to, from, next) => {
  if (to.path === '/login') return next()
  const tokenStr = window.sessionStorage.getItem('token')
  if (!tokenStr) return next('/login')
  next()
})

export default router
