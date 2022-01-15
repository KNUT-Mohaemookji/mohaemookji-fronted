<template>
  <div class="inner">
    <div class="profiles">
      <div class="profile" v-for="a, i in dev.img.length" :key="i">
        <img class="img" :src="dev.img[i]" alt="이미지">
        <div class="introduction">
          <h4 class="jobGroup">{{dev.jobGroup[i]}}</h4>
          <h5 class="name">이름 : {{dev.name[i]}}</h5>
          <h5 class="email">이메일 : {{dev.email[i]}}</h5>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      dev: {
        img: ['https://avatars.githubusercontent.com/u/76980526?v=4', 
        'https://avatars.githubusercontent.com/u/76980526?v=4', 
        'https://avatars.githubusercontent.com/u/76980526?v=4', 
        'https://avatars.githubusercontent.com/u/76980526?v=4'],
        jobGroup: ['FrondEnd', 'BackEnd', 'BackEnd', 'BackEnd'],
        name: ['정규영', '용시훈', '이진형', '김재령'],
        email: ['jgy_98@naver.com', '1234@naver.com', '1234@naver.com', '1234@naver.com'],
      },
    }
  }
}
</script>

<style scoped>
  .inner{
    position: relative;
    width: 100vw;
    height: 100vh;
  }
  .profiles{
    position: absolute;
    top: 100px;
    right: 0;
  }
  .profile{
    background-color: #fff;
    width: 70vw;
    display: flex;
    margin: 15% 8%;
    /* text-align: center; */
  }
  .img{
    width: 150px;
    height: 150px;
    border: 3px solid rgb(128, 127, 127);
    border-radius: 50%;
    margin-right: 5%;
  }
  .introduction{
    margin-top: 30px;
  }
  @media screen and (max-width: 768px){
    .profile{
      display: block;
    }
    .img{
      width: 100px;
      height: 100px;
      margin-left: 30px;
    }
  }
</style>