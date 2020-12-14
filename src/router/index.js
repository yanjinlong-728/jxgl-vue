import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home/Home.vue'
import About from '../views/About'
import Particulars from '../views/particulars'
import Details from '../views/Home/details'
import Homeor from '../views/Home/homeor'
import  Machinery from '../views/machinery'
import Category from '../views/machinery/category'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    redirect: '/homeor',
    component: Home,
    children: [
      {
        path: 'homeor',
        name: 'Homeor',
        component: Homeor,
      },

      {
        path: 'details',
        name: 'Details',
        component: Details,
      },
    ]
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/particulars',
    name: 'Particulars',
    component: Particulars
  },
  {
    path:'/machinery',
    name: 'Machinery',
    component: Machinery
  },
  {
    path:'/category',
    name: 'Category',
    component: Category
  }

]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
