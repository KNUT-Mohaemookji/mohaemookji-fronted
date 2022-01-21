<template>
    <div class="main">  
        <Loader v-if="$store.state.loading == true"/>
        <div v-else>
            <div class="videoTop">
                <div class="videoTypes">
                    <ul>
                        <li class="videoType"
                            v-for="a, i in videoType" :key="i">{{videoType[i]}}</li>
                    </ul>
                </div>
            </div>
            <div class="inner">
                <Videos/>
                <!-- <Footer class="footer"/> -->
            </div>
            <VideoModal class="videoModal"/>
        </div>
    </div>
</template>

<script>
import Videos from './videoList/Videos.vue'
import VideoModal from './videoList/VideoModal.vue'
import Footer from '../components/Footer.vue'
import Loader from '../components/Loader.vue'
export default {
    components:{
        Videos,
        VideoModal,
        Footer,
        Loader,
    },
    data(){
        return{
            videoType: [
                'All', 'Meal', 'Diet', 'Exercise', 'Snack'
            ]
        }
    },
    mounted(){
        
    },
}
</script>

<style scoped>
.main{
    position: relative;
    width: 100vw;
    height: 100vh;
}
.videoTop{
    position: absolute;
    top: 10%;
    width: 100vw;
    height: 80px;
    /* background-color:blanchedalmond; */
    border-bottom: 3px solid rgb(242, 241, 241);
}
.videoTypes ul{
    position: absolute;
    z-index: 10;
    display: flex;
    left: 30px;
    bottom: 0;
    cursor: pointer;
    box-sizing: border-box;
}
.videoType{
    font-size: 20px;
    cursor: pointer;
    font-weight: 700;
    margin-right: 30px;
    color: rgb(159, 159, 159);
}
.inner{
    position: absolute;
    margin: auto;
    left: 0;
    right: 0;
    top: 10%;
    width: 1200px;
    height: 100%;
}
.videoModal{
    position: absolute;
    z-index: 10;
}
.footer{
    
}

@media screen and (max-width: 768px){
    .inner{
        width: 100%;
    }
    .videoType{
        font-size: 1rem;
    }
}
</style>