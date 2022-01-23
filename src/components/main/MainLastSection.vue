<template>
  <div class="mainSection3">
      <div class="icons">
        <div v-for="a, i in icons" :key="i" class="icon">
            <i :class="icons[i]"></i>
            <div class="text">
                {{iconText[i]}}
            </div>
        </div>
      </div>
  </div>
</template>

<script>
export default {
    data(){
        return{
            
        }
    },
    props:{
        icons: String,
        iconText: String,
    }

}
</script>

<style scoped>
.mainSection3{  
    position: relative;
    margin: auto;
    width: 1100px;
    height: 40vh;
}
.icon{
    margin: auto;
}
.icons{
    text-align: center;
    display: flex;
    /* flex-grow: 1; */
}
.icons i{
    width: 150px;
    height: 150px;
    padding-top: 50px;
    margin: 50px 30px;
    border-radius: 50%;
    background-color: blanchedalmond;
    font-size: 50px;
}
.text{
    font-size: 30px;
    font-weight: 700;
    margin-top: -30px;
}
@media screen and (max-width: 1100px){
    .mainSection3{
        width: 100vw;
    }
    .icons{
        display: block;
    }
}
@media screen and (max-width: 768px){
    .icons i{
        width: 100px;
        height: 100px;
        font-size: 40px;
        padding-top: 30px;
    }
    .text{
        font-size: 20px;
    }
}
</style>