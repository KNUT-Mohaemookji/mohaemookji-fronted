<template>
  <div class="inner">
      <div class="loginBox">
          <p class="name">Mohaemookji</p>
          <form class="login" action="/login" name="login" method="post">
            아이디  <input type="text" class="id"/> <br/>
            비밀번호  <input type="password" class="pw"/> <br/>
            <br/>
            <input value="로그인" type="submit" class="submit"/>
            <br/><br/>
            <div class="snsLogin">
                <div class="kakao">카카오로 로그인하기</div>
                <div class="naver">네이버로 로그인하기</div>
            </div>
            <br/>
            <ul class="join">
                <li v-for="a, i in login" :key="i">
                    <router-link :to = url[i]>{{a}}</router-link>
                </li>
            </ul>
          </form>
      </div>
  </div>
</template>

<script>
export default {
    data(){
        return{
            login: [
                '회원가입',
                '아이디 찾기',
                '비밀번호 찾기'
            ],
            url:[
                '/login/join',
                '/login/searchId',
                '/login/searchPw',
            ]
        }
    }
}
</script>

<style scoped>
.inner{
    width: 100vw;
    height: 100vh;
    background-color: rgb(236, 236, 236);
}
.loginBox{
    position: relative;
    border-radius: 10px;
    top: 25%;
    margin: auto;
    width: 40vw;
    height: 50vh;
    background-color: #fff;
}
.name{
    padding-top: 10px;
    font-size: 30px;
    font-weight: 700;
    text-align: center;
    font-family: 'Courier New', Courier, monospace;
}
.login{
    position: absolute;
    text-align: center;
    top: 70px;
    left: 0;
    right: 0;
    /* line-height: ; */
}
.id{
    margin-left: 10px;
}
.id, .pw{
    width: 300px;
    padding: 10px;
    margin-top: 10px;
}
.snsLogin{
    display: flex;
}
.kakao, .naver, .submit{
    text-align: center;
    font-weight: 700;
    color: #333;
    padding: 10px;
    left: 0;
    right: 0;
    width: 70%;
    height: 5%;
    cursor: pointer;
}
.submit{
    background-color: blanchedalmond;
    border-radius: 10px;
    border: 0;
}
.kakao{
    background-color: rgb(255, 251, 0);
}
.naver{
    background-color: rgb(86, 255, 86);
    margin-left: 10px;
}   
.join{
    position: absolute;
    display: flex;
    left: 0;
    right: 0;
}
.join li{
    font-size: 13px;
    margin: auto;
    cursor: pointer;
}
.join li a{
    color: rgb(176, 176, 176);
}
.join li a:nth-child(3){
    color: rgb(252, 192, 115);
}
</style>