import Vue from 'vue'
import Router from 'vue-router'
// 홈 / 비디오 / about / 에러 페이지 
import Home from '@/components/Main'
import VideoList from '@/components/VideoList'
import About from '@/components/About'
import Error404 from '@/components/Error404'
// 로그인 / 회원가입 / 아이디 찾기 / 비밀번호 찾기
import Login from '@/components/login/Login'
import Join from '@/components/login/Join'
import SearchId from '@/components/login/SearchId'
import SearchPw from '@/components/login/SearchPw'

// 마트 찾는거 관련 페이지
import MartMain from '@/components/martLocation/MartMain'
import store from '../store'

Vue.use(Router)

const router = new Router({
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
      path: '/martMain',
      name: 'MartMain',
      component: MartMain
    },
    {
      // url에 /:뒤에 위의 객체 안에 정의된 url이 없으면 404페이지를 보여줌.
      // err페이지를 정의한 부분 밑에부터 / 뒤에 경로를 지정하면 에러 메시지 뜸. 여기 위에다 작성해야됨.
      path: '/:error',
      name: 'Error404',
      component: Error404
    },
    {
      path: '/login/searchId',
      name: 'SearchId',
      component: SearchId
    },
    {
      path: '/login/searchPw',
      name: 'SearchPw',
      component: SearchPw
    },
    // 마트 url
  ]
})

// 화면 로딩 전 spinner 기능 구현하기..
router.beforeEach((to, from, next) => {
  store.commit('startSpinner');
  setTimeout(() => {
    next();
  }, 1);
})

router.afterEach((to, from) => {
  store.commit('endSpinner');
})

export default router