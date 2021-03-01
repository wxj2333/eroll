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
    component: Manage
  },
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

const router = new VueRouter({
  routes
})

export default router
