import Vue from 'vue'
import Router from 'vue-router'
import Login from '../views/login/Login.vue'
import Register from '../views/login/Register.vue'
import MainPage from '@/views/layout/MainPage'
import HeartRate from '@/views/layout/HeartRate'
import PhysiData from '@/views/layout/PhysiData'
import Load from '@/views/layout/Load'
import Risk from '@/views/layout/Risk'
import Souvenir from '@/views/layout/Souvenir'

Vue.use(Router)

export default new Router({
  routes: [{
      path: '/',
      redirect: '/mainPage'
    }, //访问根页面时自动跳转到登录页面
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    },
    {
      path: '/mainPage',
      name: 'MainPage',
      component: MainPage
    },
    {
      path: '/heartRate',
      name: 'HeartRate',
      component: HeartRate
    },
    {
      path: '/physiData',
      name: 'PhysiData',
      component: PhysiData
    },
    {
      path: '/risk',
      name: 'Risk',
      component: Risk
    },
    {
      path: '/load',
      name: 'Load',
      component: Load
    },
    {
      path: '/souvenir',
      name: 'Souvenir',
      component: Souvenir
    },
  ],
  mode: "history" //去掉地址栏里边的#号键
})
