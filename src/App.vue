<template>
  <div>
    <Header/>
    <!-- <Footer/> -->
    <router-view></router-view>
  </div>
</template>

<script>
import Header from './components/Header.vue'
// import Footer from './components/Footer.vue'
export default {
  components:{
    Header,
    // Footer,
  }
}
</script>

<style>
ul, li, ol{
  list-style: none;
}
</style>