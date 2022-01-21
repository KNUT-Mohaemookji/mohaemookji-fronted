<template>
  <header class = "header2">
      <div class="container">
          <img class="logo"
           src="https://user-images.githubusercontent.com/76980526/148074503-94784be9-47a4-41cc-9fa5-bf88c79b2b18.jpeg" alt="logo">
           <ul class="loginMenu" v-if="menuOpen == false">
                <li v-for="a,i in loginMenu"  :key="i">
                    <router-link :to="userUrl[i]">{{loginMenu[i]}}</router-link>
                </li>
            </ul>
          <div style="flex-grow : 1"></div>
          <ul class="menuList">
              <li v-for="a, i in menuList.length" :key="i">
                  <router-link :to="mainUrl[i]">{{menuList[i]}}</router-link>
              </li>
        </ul>
        <div class="menuListIcon"
        @click="hamburger()">
            <div class="line" v-for="a in 3" :key="a"></div>
        </div>
        <div class="mobileMenu">
            <ul>
                <li v-for="a,i in menuList" :key="i">
                    {{menuList[i]}}
                </li>
                <li v-for="a, i in loginMenu" :key="i">
                    {{loginMenu[i]}}
                </li>
            </ul>
        </div>
      </div>
  </header>
</template>

<script>
export default {
    data(){
        return{
            loginMenu: [
                'login',
                'myPage',
                'favorite!',
            ],
        }
    },
    props:{
        menuList: String,
        mainUrl: String,
        userUrl: String,
        menuOpen: Boolean,
    },
    mounted(){
        this.menuScroll();
        this.loginEvent();
    },
    methods:{
        loginEvent(){
            let menuList = document.querySelectorAll('.menuList li')
            // 이 부분 내일 다시 생각해보기
            for(var i = 0; i < menuList.length; i++){
                menuList[3].addEventListener('click', () => {
                    let loginList = document.querySelector('.loginMenu');
                    loginList.classList.toggle('event');
                })
            }
        },
        hamburger(){
            let line = document.querySelectorAll('.line');
            let mobileMenu = document.querySelector('.mobileMenu');
            let body = document.querySelector('.body');
            for(var i = 0; i < line.length; i++){
                line[i].classList.toggle('event');
            }
            // 햄버거 누르면 옆에 메뉴 생성해주기. + 배경 어둡게 해주기.
            mobileMenu.classList.toggle('event');
            body.classList.toggle('event');
        },
        menuScroll(){
            document.addEventListener('scroll', function(){
                let header = document.querySelector('.header2');
                // 현재 스크롤 값
                let scroll = document.documentElement.scrollTop;
                let menuList = document.querySelectorAll('.menuList li a');
                let loginMenuLi = document.querySelectorAll('.loginMenu li a');
                if(scroll >= 750){
                        header.style.backgroundColor = 'blanchedalmond';
                        header.style.transition = '.3s'
                    for(var i = 0; i < menuList.length; i++){
                        menuList[i].style.color = "#333";
                        loginMenuLi[i].style.color = "#333";
                    }
                }
                else{
                    header.style.backgroundColor = 'transparent';
                    header.style.transition = '.3s'
                    for(var i = 0; i < menuList.length; i++){
                        menuList[i].style.color = 'rgb(247, 225, 57)';
                        loginMenuLi[i].style.color = 'rgb(247, 225, 57)';
                    }
                }
                // console.log(document.documentElement.scrollTop);  
            })
        },
    }
}
</script>

<style scoped> 
    .header2{
        position: fixed;
        z-index: 10;
        width: 100%;
        height: 100px;
        background-color: transparent;
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
        cursor: pointer;
    }
    .menuList{
        display: flex;
        margin-top: 50px;
    }
    .menuList li{
        font-weight: 700;
        width: 100px;
        height: 50px;
        padding-top: 10px;
        text-align: center;
        border-radius: 10px;
        cursor: pointer;
    }
    .menuList li a{
        color: rgb(247, 225, 57);
    }
    .menuList li:hover{
        transition: 1s;
        border-top: 1px solid #333;
        /* border-left: 1px solid #333; */
    }
    .loginMenu{
        position: absolute;
        display: flex;
        right: 85px;
        border-radius: 0px 0px 10px 10px;
        font-weight: 500;
        padding-top: 20px;
    }
    .loginMenu li{
        font-size: 13px;
        padding: 0px 10px;
    }
    .loginMenu li a{
        color: rgb(247, 225, 57);
    }
    .menuListIcon{
        position: relative;
        cursor: pointer;
        z-index: 100;
        padding: 30px;
        width: 75px;
        height: 75px;
        display: none;
    }
    .line{
        width: 30px;
        cursor: pointer;
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
    .mobileMenu{
        position: fixed;
        display: none;
        /* opacity: 0; */
        right: 0;
        width: 25%;
        height: 100vh;
        transition: 1s;
        transform: translateX(300px);
        background-color: blanchedalmond;
    }
    .mobileMenu.event{
        /* opacity: 1; */
        transform: translateX(0px);
    }
    .mobileMenu ul li{
        font-size: 20px;
        cursor: pointer;
        font-weight: 700;
        margin: 80px 0px;
    }
    @media screen and (max-width: 800px){
        .header2{
            height: 80px;
        }
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
        .mobileMenu{
            display: block;
        }
        .loginMenu{
            display: none;
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