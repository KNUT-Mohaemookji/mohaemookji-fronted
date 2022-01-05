
<template>
  <div>
    
    <Header2/>
    <MainSection1/>
    <MainSection2/>
    <MainSection3/>
    <Footer/>
  </div>
</template>

<script>
import Header2 from './Header2.vue'
import MainSection1 from './main/MainSection1.vue'
import MainSection2 from './main/MainSection2.vue'
import MainSection3 from './main/MainSection3.vue'
// import MainSection1 from './components/main/MainSection1.vue'
// import MainSection2 from './components/main/MainSection2.vue'
// import MainSection3 from './components/main/MainSection3.vue'
import Footer from '../components/Footer.vue'
export default {
  components:{
    Header2,
    MainSection1,
    MainSection2,
    MainSection3,
    Footer,
  }
}
</script>

<style>
ul, li, ol{
  list-style: none;
}
.header{
    display: none;
}
</style>