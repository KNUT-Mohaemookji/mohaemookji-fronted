<template>
  <div class="body">
    <!-- <div class="mapImg"/>
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
.mapImg{
  position: absolute;
  background-image: url('https://user-images.githubusercontent.com/76980526/151373162-f0256782-f39f-4f1d-95d3-2f249aed53d7.png');
  width: 100vw;
  height: 100vh;
  filter: blur(3px);
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