<template>
  <div class="container">
      <div class="inner">
        <p>URL 주소가 잘못되었습니다!</p>
        <div class="error404">404Error!</div>
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
    .container{
        position: relative;
        margin: auto;
        width: 100vw;
        height: 100vh;
    }
    .inner{
        position: absolute;
        width: 100%;
        text-align: center;
        top: 30%;
    }
    .inner p{
        font-size: 50px;
        font-weight: 500;
        color: rgb(244, 201, 138);
    }
    .error404{
        width: 180px;
        height: 180px;
        margin: 70px auto;
        font-size: 30px;
        font-weight: 700;
        color: #333;
        box-sizing: border-box;
        padding-top: 60px;
        /* border: 5px solid rgb(176, 176, 176); */
        /* border-radius: 50%; */
    }
    @media screen and (max-width: 768px){
        .inner p{
            font-size: 30px;
        }
        .error404{
            font-size: 20px;
        }
    }
</style>