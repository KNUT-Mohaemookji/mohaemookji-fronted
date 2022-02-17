<template>
<div class="section2">
  <div class="inner">
      <!-- <h1 class="text">Different kinds of food!</h1> -->
      <h1 class="text">{{text}}</h1>
      <div class="imgs">
          <div v-for="a, i in 4" :key="i" class="img" :style="{backgroundImage: `url(${foodImg[i]})`}">
              <div class="imgText">
                  {{kinds[i]}}
              </div>
          </div>
      </div>
  </div>
</div>
</template>

<script>
import { mapState } from 'vuex'
export default {
    data(){
        return{
            // \u00a0는 공백을 주는 기능이다.
            // kinds: ['Meal', 'Diet', 'Exercise', 'Snack'],
            foodImg: [
                'https://user-images.githubusercontent.com/76980526/148056682-21d0c8c7-1e64-4946-8904-a4ea38b712cc.jpeg',
                'https://user-images.githubusercontent.com/76980526/148056717-fd28767a-8bc9-4871-abbe-943c5afb2c27.jpeg',
                'https://user-images.githubusercontent.com/76980526/148056751-8ce23483-e50b-4040-af0b-94f3ac23b461.jpeg',
                'https://user-images.githubusercontent.com/76980526/148057274-9c53c69f-fa28-49ac-bfb6-062b546a1504.jpeg'
            ]
        }
    },
    computed:{
        ...mapState('main', ['text'])
    },
    props:{
        // text: String,
        kinds: String,
    },
    mounted(){
        this.typeWrite();
    },
    methods: {
        typeWrite(){
            let inText = document.querySelector('.text');
            inText.innerHTML = '';
            let count = 0;
            for(var i = 0; i < this.text.length; i++){
                setTimeout(() => {
                    inText.innerHTML = inText.innerHTML + this.text[`${count}`];
                    console.log(this.text[`${count}`])
                    count++;
                }, 200 * i);
            }
        }
    }
}
</script>

<style scoped>
    .section2{
        width: 100vw;
        height: 70vh;
    }
    .inner{
        position: relative;
        margin: 15% auto;
        /* border: 1px solid #333; */
    }
    .text{
        text-align: center;
        font-size: 50px;
    }
    .imgs{
        /* position: absolute; */
        margin: 10% auto;
        width: 600px;
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-template-rows: 1fr 1fr;
    }
    .img{
        width: 300px;
        height: 150px;
        background-repeat: no-repeat;
        background-size: cover;
        transition: .4s;
    }
    .img:hover{
        transform: scale(1.2);
        border-radius: 10px;
    }
    .imgText{
        right: 0;
        font-size: 25px;
        font-weight: 700;
        color: rgb(247, 225, 57);
    }
    @media screen and (max-width: 768px){
        .text{
            font-size: 30px;
        }
        .imgs{
            width: 500px;
        }
        .img{
            width: 100%;
            height: 125px;
        }
        .imgText{
            font-size: 20px;
        }
    }
    @media screen and (max-width: 500px){
        .text{
            font-size: 20px;
        }
        .imgs{
            width: 300px;
        }
        .imgText{
            font-size: 15px;
        }
    }
</style>