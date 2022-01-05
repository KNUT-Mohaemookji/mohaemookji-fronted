<template>
  <div class="section1">
      <div class="container">
        <h1 class="bigText">
                <span>배고픈데..</span> <br>
                모해묵지?!
          </h1>
          <button class="btn">
              Let's Video!

          </button>
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.section1{
    position: relative;
    width: 100vw;
    height: 100vh;
    background-image: url('https://user-images.githubusercontent.com/76980526/148063224-1335fd79-6d7a-451b-9489-60baad93cc06.jpeg');
    background-size: cover;
    filter: brightness(70%);
}
.container{
}
.bigText{
    position: absolute;
    margin-top: 20%;
    color: rgb(247, 225, 57);
    font-weight: 700;
    font-size: 800%;
}
.bigText span{
    /* font-size: 50px; */
    font-size: 80%;
}
.btn{
    position: absolute;
    margin-top: 45%;
    width: 200px;
    height: 80px;
    font-weight: 500;
    font-size: 30px;
    color: rgb(247, 225, 57);
    transition: 1s;
}
.btn:hover{
    /* background-color: #fff; */
    color: #333;
    background-color:rgb(247, 225, 57);
    border: 1px solid #333;
    border-radius: 10px;
}
@media screen and (max-width: 768px){
    .bigText{
        right: 0;
        left: 0;
        text-align: center;
        font-size: 500%;
        top: 30%;
        bottom: 0;
    }
    .btn{
        bottom: 10%;
        font-size: 25px;
        width: 180px;
        height: 60px;
    }
}
</style>