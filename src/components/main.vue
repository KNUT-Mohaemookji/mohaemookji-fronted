<template>
  <div class="inner">
    <!-- <Header/> -->
    <section class="section">
      <MainSection1/>
      <MainSection2
      :text = "text"
      :kinds = "kinds"/>
      <MainSection3
      :icons = "icons"
      :iconText = "iconText"/>
      <Footer class="footer"/>
    </section>
    
  </div>
</template>

<script>
// import Header from './Header.vue'
import MainSection1 from './main/MainSection1.vue'
import MainSection2 from './main/MainSection2.vue'
import MainSection3 from './main/MainSection3.vue'
import Footer from '../components/Footer.vue'
export default {
  data(){
    return{
      // \u00a0는 공백을 주는 기능이다.
      text:['D','i', 'f','f','e','r','e','n', 't','\u00a0' ,'k', 'i', 'n', 'd','s','\u00a0', 'o','f', '\u00a0', 'f','o','o','d','!'],
      kinds: ['Meal', 'Diet', 'Exercise', 'Snack'],
      foodImg: [
          'https://user-images.githubusercontent.com/76980526/148056682-21d0c8c7-1e64-4946-8904-a4ea38b712cc.jpeg',
          'https://user-images.githubusercontent.com/76980526/148056717-fd28767a-8bc9-4871-abbe-943c5afb2c27.jpeg',
          'https://user-images.githubusercontent.com/76980526/148056751-8ce23483-e50b-4040-af0b-94f3ac23b461.jpeg',
          'https://user-images.githubusercontent.com/76980526/148057274-9c53c69f-fa28-49ac-bfb6-062b546a1504.jpeg'
      ],
      // Section3
      icons: [
        'fas fa-home',
        'fas fa-users',
        'fas fa-cookie'
      ],
      iconText: [
          'Anwhere!',
          'Together!',
          'Cooking!'
      ]
    }
  },
  components:{
    // Header,
    MainSection1,
    MainSection2,
    MainSection3,
    Footer,
  }
}
</script>

<style scoped>
ul, li, ol{
  list-style: none;
}
.header{
    display: none;
}
.inner{
  position: relative;
}
.section{
  position: absolute;
}
@media screen and (max-width: 1100px){
      .footer{
        top: 550px;
      }
}
@media screen and (max-width: 768px){
  .footer{
    top: 400px;
  }   
}
</style>