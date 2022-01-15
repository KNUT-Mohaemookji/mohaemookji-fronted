import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Main'
import VideoList from '@/components/VideoList'
import About from '@/components/About'
import Error404 from '@/components/Error404'
import Login from '@/components/login/Login'
import Join from '@/components/login/Join'

Vue.use(Router)

export default new Router({
  mode: 'history', // mode를 history로 변경해서 url에 # 안보이게 해주기.
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/videoList',
      name: 'VideoList',
      component: VideoList
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/login/join',
      name: 'Join',
      component: Join
    },
    {
      // url에 /:뒤에 위의 객체 안에 정의된 url이 없으면 404페이지를 보여줌.
      path: '/:error',
      name: 'Error404',
      component: Error404
    }
  ]
})