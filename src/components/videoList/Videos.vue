<template>
    <div class="inner">
        <div class="videoBoxs">
            <div class="videoBox" @click="consoles()" 
            v-for="a, i in 9" :key="i">
                <div class="video"
                :style="{backgroundImage: `url(${videoImg[i]})`}"
                @click = modalData(i) />
                <div class="movieExplanation">
                    <h5 class="videoTitle">{{videoTitle[i]}}</h5>
                </div>
                <div class="profile">
                    <img class="profileImg" :src="profileImg[i]" alt="??">
                    <p class="profileName">{{profileName[i]}}</p>
                </div>
                <p class="views">조희수</p>
            </div>
        </div>
        <Footer class="footer"/>
    </div>
</template>

<script>
import axios from 'axios'
import {mapState} from 'vuex'
import Footer from '../Footer.vue'
export default {
    components:{
        Footer,
    },
    props: {
        data: Object,
    },
    computed: {
        ...mapState('video', ['videoImg', 'videoTitle', 'profileImg', 'profileName'])
    },
    mounted(){
        this.getData()
        .then(() => {
            // 아래 똑같은 코드 최적화 시키기.
            let videoSkeleton = document.querySelectorAll('.videoBox');
            for(var i = 0; i < videoSkeleton.length; i++){
                videoSkeleton[i].classList.remove('loading');
            }
        })
        .catch((err) => {
            alert('실패');
        })
    },
    methods: {
        consoles(){
            console.log(this.$store.state.video[this.$store.state.count])
        },
        // 인자 count는 클릭한 데이터가 몇번째 순서에 있는지 나타내줌.
        modalData(count){
            // 첫번째 데이터를 누르면 첫번째 데이터의 내용들이 모달창에 뜨도록 하기
            this.$store.state.video.modalState = true // modal창을 띄워주고,
            this.$store.state.video.count = count; // store에 있는 count에 클릭한 index 위치를 보내준다.
        },
        async getData(){
            this.$store.commit('video/movieData');
            let videoSkeleton = document.querySelectorAll('.videoBox');
            for(var i = 0; i < videoSkeleton.length; i++){
                videoSkeleton[i].classList.add('loading');
            }
            console.log(videoSkeleton.length);
        }
    }
}
</script>

<style scoped>
    .videoBoxs{
        display: flex;
        flex-wrap: wrap;
    }
    .videoBox{
        position: relative;
        left: 20px;
        margin: auto;
        width: 300px;
        height: 350px;
        background-color: rgb(242, 241, 241);
        border-radius: 10px;
        margin-left: 30px;
        margin-top: 30px;
    }
    @keyframes shimmer{
        from {background-position: 100%;}
        to {background-position: 0;}
    }
    .videoBox.loading{
        background-image: linear-gradient(
        90deg,
            #eeeeee 0%, #eeeeee 40%,
            #dddddd 50%, #dddddd 55%,
            #eeeeee 65%, #eeeeee 100%
        );
        background-size: 400%;
        animation: shimmer 1500ms infinite;
        
    }
    .video{
        width: 100%;
        height: 200px;
        border-radius: 10px;
        background-size: cover;
        transition: .3s;
        background-position: center;
        cursor: pointer;
    }
    .video:hover{
        width: 120%;
        margin-left: -30px;
        /* background-size: 120%; */
    }
    /* .movieExplanation{
        display: flex;
    } */
    .videoTitle{
        width: 100%;
        overflow-x: hidden;
        padding: 10px;
        text-overflow: ellipsis;
        white-space:nowrap;
    }
    .profile{
        margin-left: 10px;
        width: 100%;
        height: 50px;
        /* background-color: rgb(159, 154, 154); */
        display: flex;
    }
    .profileImg{
        width: 50px;
        height: 50px;
        border: 3px solid rgb(199, 197, 197);
        border-radius: 50%;
    }
    .profileName{
        font-size: 18px;
        color: rgb(143, 142, 142);
        margin: 12px;
    }
    .views{
        margin: 15px;
    }
    .footer{
        position: relative;
        top: 30px;
    }
    @media screen and (max-width: 768px){
        .videoBoxs{
            margin-left: 30px;
            display: block;
        }
        .videoBox{
            width: 80%;
        }
        .video{
            width: 100%;
            height: 60%;
        }
        .video:hover{
            width: 100%;
            margin-left: 0px;
        }
        .footer{
            /* position: absolute;
            top: 10px; */
        }
    }
</style>