<template>
  <div class="inner">
        <div class="joinBox">
            <p>Mohaemookgi</p>
            <form action="/join" method="post">
                이름
                <input class="id" type="text" placeholder="이름입력">
                <br/><br/>
                이메일
                <input class="email" type="emain" placeholder="이메일 입력"/>
                <br/><br/>
                <input class="submit" type="submit" value="완료">
            </form>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.inner{
    width: 100vw;
    height: 100vh;
    background-color: rgb(236, 236, 236);
}
.joinBox{
    position: relative;
    margin: auto;
    padding: 20px;
    border-radius: 10px;
    top: 120px;
    width: 500px;
    height: 550px;
    background-color: #fff;
}
.joinBox p{
    padding-top: 10px;
    font-size: 30px;
    font-weight: 700;
    text-align: center;
    font-family: 'Courier New', Courier, monospace;
}
.id, .pw, .email, .submit{
    padding: 10px;
    width: 100%;
}
.submit{
    background-color: blanchedalmond;
    border-radius: 10px;
    border: 0;
}
@media screen and (max-width: 800px){
    .joinBox{
        width: 100%;
    }
}

</style>