<template>
    <div class="contain">
        <p class="townName">{{$route.params.id}}</p>
        <div class="marts">
            <KakaoMap id="map"/>
            <div class="martList">
                <ul class="martAll">
                    <li class="mart" v-for="townList in townList" :key="townList">
                        {{townList}}
                        <br><span class="tel">연락처</span>
                        <br><span class="time">운영시간</span>
                    </li>
                </ul>
            </div>
        </div>
  </div>
</template>

<script>
import {mapState} from 'vuex'
import KakaoMap from './KakaoMap.vue'
export default {
    components:{
        KakaoMap,
    },
    data(){
        return{

        }
    },
    mounted(){
        this.$store.commit('martData');
    },
    computed: {
        ...mapState(['townList'])
    },
}
</script>

<style scoped>
.contain{
    margin: auto;
    width: 1100px;
    height: 100vh;
    /* background-color: beige; */
}
.townName{
    font-size: 50px;
    font-weight: 700;
    padding: 70px 0px 0px 20px;
}
.marts{
    display: flex;
}
#map, .martList{
    position: relative;
    margin: auto;
    width: 500px;
    height: 70vh;
    border: 3px solid rgb(205, 205, 205);
    border-radius: 10px;
}
.martList{
    overflow-y: scroll;
}
.martAll{
    position: absolute;
    width: 100%;
    left: -20px;
}
.mart{
    text-align: center;
    height: 100px;
    margin: 10px;
    font-size: 22px;
    color: #333;
    border: 3px solid rgb(225, 225, 225);
    font-weight: 700;
    border-radius: 10px;
    cursor: pointer;
}
.mart .tel, .mart .time{
    font-size: 16px;
}
</style>