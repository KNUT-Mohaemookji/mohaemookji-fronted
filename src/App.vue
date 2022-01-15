<template>
  <div class="body">
    <Header
    :menuList="menuList"
    :mainUrl="mainUrl"
    :userUrl="userUrl"
    :menuOpen = "menuOpen"/>
    <router-view></router-view>
  </div>
</template>

<script>
import Header from './components/Header.vue'
// import Footer from './components/Footer.vue'
export default {
  data(){
    return{
      // HEADER 부분
      menuList:['Home', 'Video', 'About'],
      mainUrl: ['/','/videoList', '/about', ''],
      userUrl: ['/login', '/mypage', '/favorite'],
      menuOpen: false,
    }
  },
  components:{
    Header,
    // Footer,
  }
}
</script>

<style>
a{
  text-decoration: none;
}
ul, li, ol{
  list-style: none;
}
</style>