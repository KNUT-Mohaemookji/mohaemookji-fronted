<template>
  <div class="contain">
        <div class="inner">
            <p class="mainText">동네를 선택해주세요!</p>
            <div class="towns">
                <!--innerText로 버튼에 클릭한 text를 가져와서 urlReplace()의 인자로 넣어주기-->
                <button @click="urlReplace($event.target.innerText)"
                class="town" v-for="townList in $store.state.towns" :key="townList">
                    {{townList}}
                </button>
            </div>
        </div>
  </div>
</template>

<script>
// import martData from '@/data/mart.json'
export default {
    mounted(){
        this.$store.commit('martData');
        this.textEvent();
    },
    methods: {
        textEvent(){
            console.log('a');
            let mainText = document.querySelector('.mainText');
            setTimeout(() => {
                mainText.classList.add('event');
            }, 100);
        },
        urlReplace(url){
            for(var i = 0; i < this.$store.state.towns.length; i++){
                window.location.replace(`MartMain/${url}`);  
                console.log(url); 
            }
        }
    }
}
</script>

<style scoped>
.contain{
    width: 100vw;
    height: 100vh;
}
.inner{
    position: relative;
    margin: auto;
    width: 1100px;
    height: 100vh;
    /* background-color: antiquewhite; */
}
.mainText{
    padding-top: 13%;
    text-align: center;
    color: rgb(250, 212, 162);
    font-weight: 700;
    font-size: 50px;
    transition: .8s;
}
.mainText.event{
    transform: translateY(-20px);
}
.towns{
    position: absolute;
    bottom: 10%;
}
.town{
    width: 100px;
    height: 70px;
    background-color: rgb(250, 212, 162);
    color: #fff;
    font-weight: 500;
    font-size: 20px;
    border: 3px solid rgb(220, 220, 220);
    border-radius: 10px;
    margin: 10px;
    transition: .3s;
}
.town:hover{
    background-color: #fff;
    color: rgb(250, 212, 162);
}
@media screen and (max-width: 768px){
    .inner{
        width: 500px;
    }
    .mainText{
        font-size: 40px;
        padding-top: 25%;
    }
    .town{
        width: 80px;
        height: 50px;
        font-size: 16px;
    }
}
</style>