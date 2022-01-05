import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Main'
import VideoList from '@/components/VideoList'

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
  ]
})