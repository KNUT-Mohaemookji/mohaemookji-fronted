<template>
  <!-- <div class="body">
    <div class="mapImg"/>
    <div class="inner">
      <p class="text">재료는 있어야 <br> 요리하지!</p>
      <img class="cart" src="https://user-images.githubusercontent.com/76980526/151375249-7a2c4005-64b9-4de6-b85b-e7fa890c4fd1.png" alt="">
    </div> -->
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
/* 마트 이미지 https://s3.ap-northeast-2.amazonaws.com/cloimage/home/rails/clo/public/ckeditor_assets/pictures/4044/content_.png. 
요리 이미지 https://d2qgx4jylglh9c.cloudfront.net/kr/wp-content/uploads/2016/03/2458734256E90FF629D95B.jpg */
.mapImg{
  /* position: absolute; */
  background-color: blanchedalmond;
  width: 100vw;
  height: 100vh;
  filter: blur(2px);
  /* filter: brightness(70%); */
}
.inner{
  position: relative;
  z-index: 1;
  width: 1100px;
  height: 100vh;
  margin: auto;
  display: flex;
}
.text{
  font-size: 80px;
  color: #333;
  font-weight: 700;
}
.cart{
  width: 300px;
  height: 300px;
}
</style>