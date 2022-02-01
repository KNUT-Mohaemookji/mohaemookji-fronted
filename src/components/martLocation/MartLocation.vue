<template>
    <div class="contain">
        <p class="townName">{{$route.params.id}}</p>
        <div class="marts">
            <KakaoMap id="map"/>
            <div class="martList">
                <ul class="martAll">
                    <!--최소 데이터가 최소 5개 이상 있어야 출력이 된다.. (이유찾기)-->
                    <div v-for="a, i in moreWatchCount" :key="i">
                        <li class="mart" v-for="townList, j in martData.towns[townLocation]" :key="j">
                            {{tt[j][i].name}}
                            <br><span class="time">운영시간 : {{tt[j][i].time}}</span>
                            <br><span class="tel">연락처 : {{tt[j][i].tel}}</span>
                        </li>
                    </div>
                    <button class="moreBtn"
                    @click="moreWatchCount += 5">
                        더 보기
                    </button>
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
            martCount: 0,
            tt: [],
            moreWatchCount: 5,
            num: 0,
        }
    },
    created(){

    },
    mounted(){
        this.$store.commit('town/martData');
        this.$store.commit('town/townList', this.$route.params.id)
        this.townData(this.$route.params.id);
    },
    computed: {
        ...mapState('town', ['townList', 'martData', 'townLocation',])
    },
    methods: {
        townData(){
            this.tt = this.martData.towns[this.townLocation]
        }
    }
}
</script>

<style scoped>
.contain{
    margin: auto;
    width: 1100px;
    height: 100vh;
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
.moreBtn{
    width: 100%;
    height: 50px;
    margin-bottom: 10px;
    background-color: #fff;
    border-radius: 10px;
    border: 3px solid rgb(220, 220, 220);
    color: rgb(250, 212, 162);
    font-weight: 500;
    font-size: 20px;
}
@media screen and (max-width: 768px){
    .contain{
        width: 600px;
    }
    .marts{
        display: block;
    }
    #map{
        width: 100%;
    }
    .martList{
        width: 100%;
        margin: 30px 0px 0px;
    }
}
</style>