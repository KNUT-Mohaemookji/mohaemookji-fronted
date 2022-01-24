<template>
<div class="body" v-if="$store.state.video.modalState">
    <div class="blackBg"
    @click="$store.state.video.modalState = false">
    </div>
    <div class="container">
        <!-- <div class="movie" :style="{backgroundImage: `url(${$store.state.video[$store.state.count]})`}"/> -->
        <iframe id="player" type="text/html" width="640" height="360"
            class="movie"
            :src= "video[count]"
            frameborder="0"></iframe>
        <!--store에 저장된 count(클릭한 index의 위치)를 사용해 들어갈 데이터를 넣어준다.-->
        <div class="introduction">
            <h4 class="title">{{videoTitle[count]}}</h4>
            <div class="profile">
                <img class="profileImg" :src="profileImg[count]" alt="프로필 이미지">
                <div class="profileName">{{profileName[count]}}</div>
            </div>
            <div class="movieDetail">{{movieDetail[count]}}</div>
        </div>
    </div>
    </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
    computed: {
        ...mapState('video', ['count', 'videoTitle', 'video', 'videoImg', 'profileImg', 'profileName', 'movieDetail'])
    }
}
</script>

<style scoped>
.body{
    position: fixed;
    /* position: absolute; */
    width: 100vw;
}
    .blackBg{
        position: absolute;
        width: 100%;
        height: 100vh;
        background-color: #000;
        opacity: .5;
    }
    .container{
        position: relative;
        top: 50px;
        z-index: 10;
        width: 60%;
        height: 90vh;
        background-color: rgb(242, 241, 241);
        border: 1px solid #333;
        border-radius: 10px;
    }
    .introduction{
        padding: 0px 20px;
    }
    .movie{
        margin-top: 20px;
        width: 100%;
        aspect-ratio: 16/9;
        height: 60%;
        border: 1px solid #333;
    }
    .profile{
        display: flex;
    }
    .profileImg{
        width: 50px;
        height: 50px;
        border-radius: 50%;
    }
    .profileName{
        font-size: 18px;
        color: rgb(122, 122, 122);
        margin: 12px;
    }
    .movieDetail{
        margin-top: 15px;
        font-size: 20px;
        color: #333;
    }
    @media screen and (max-width: 768px){
        .container{
            width: 100%;
        }
        .movie{
            margin-left: 10px;
        }
        .profileImg{
            width: 40px;
            height: 40px;
        }
        .profileName{
            font-size: 16px;
            margin: 10px;
        }
        .movieDetail{
            font-size: 16px;
        }
    }
</style>