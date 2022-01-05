<template>
  <header class="header">
      <div class="container">
          <img class="logo" src="https://user-images.githubusercontent.com/76980526/148074503-94784be9-47a4-41cc-9fa5-bf88c79b2b18.jpeg" alt="logo">
          <div style="flex-grow : 1"></div>
          <ul class="menuList">
              <li v-for="a, i in menuList.length" :key="i">
                  {{menuList[i]}}
                  <router-link to="/home"></router-link>
              </li>
        </ul>
        <div class="menuListIcon"
        @click="hamburger()">
            <div class="line" v-for="a in 3" :key="a"></div>
        </div>
      </div>
  </header>
</template>

<script>
export default {
    data(){
        return{
            menuList:[
                'Home',
                'Video',
                'About'
            ],
            url: []
        }
    },
    methods:{
        hamburger(){
            let line = document.querySelectorAll('.line');
            for(var i = 0; i < line.length; i++){
                line[i].classList.toggle('event');
            }
        },
    }
}
</script>

<style scoped> 
    .header{
        position: fixed;
        z-index: 10;
        width: 100%;
        height: 100px;
        background-color: blanchedalmond;
    }
    .container{
        z-index: 10;
        right: 0;
        left: 0;
        display: flex;
        border-radius: 30px;
        /* border-bottom: 1px solid #333; */
    }
    .logo{
        width: 75px;
        height: 75px;
        margin-top: 10px;
        border-radius: 50%;
    }
    .menuList{
        display: flex;
        margin-top: 50px;
    }
    .menuList li{
        font-weight: 700;
        width: 100px;
        height: 50px;
        color: #333;

        padding-top: 10px;
        text-align: center;
        border-radius: 10px;
        cursor: pointer;
    }
    .menuList li:hover{
        transition: 1s;
        border-top: 1px solid #333;
        /* border-left: 1px solid #333; */
    }
    .menuListIcon{
        position: relative;
        padding: 30px;
        width: 75px;
        height: 75px;
        display: none;
    }
    .line{
        width: 30px;
        position: absolute;
        border-bottom: 5px solid #333;
    }
    .line:nth-child(2){
        margin-top: 10px;
    }
    .line:nth-child(3){
        animation-name: hamburgetBottom;
        margin-top: 20px;
    }
    .line.event:nth-child(1){
        animation-name: hamburgerTop;
        animation-duration: 1s;
        animation-fill-mode: forwards;
    }
    .line.event:nth-child(2){
        opacity: 0;
    }
    .line.event:nth-child(3){
        animation-name: hamburgerBottom;
        animation-fill-mode: forwards;
        animation-duration: 1s;
    }
    /* .rightMenu{
        width: 300px;
        height: 100vh;
        background-color: #333;
    } */
    @media screen and (max-width: 800px){
        .menuList{
            display: none;
        }
        .menuListIcon{
            display: block;
        }
        .logo{
            width: 50px;
            height: 50px;
        }
        .header{
            height: 80px;
        }
        .line{
            border-bottom: 2px solid #333;
        }
    }

    @keyframes hamburgerTop{
        0%{
            
            transform: rotate(0deg);
        }
        50%{
            transform: translateY(10px);
        }
        100%{
            transform: translateY(10px)rotateZ(50deg);
        }
    }
    @keyframes hamburgerBottom{
        0%{
            transform: rotate(0deg);
        }
        50%{
            transform: translateY(-10px);
        }
        100%{
            transform: translateY(-10px) rotateZ(-50deg);
        }
    }
</style>