import Vue from 'vue'
import Vuex from 'vuex'
// import Vuex from 'vuex'

import videoData from '../data/video.json'
import martData from '../data/mart.json'

Vue.use(Vuex);

const store = new Vuex.Store({
    state(){
        return{
            // all
            loading: false,
            // 비디오 관련 데이터
            videoData,
            video: [],
            videoImg: [],
            videoTitle: [],
            profileImg: [],
            profileName: [],
            movieDetail: [],
            // 모달창 변수
            modalState: false,
            // 클릭한 video 부분.
            count: 0,

            // 마트관련 데이터 
            martData: require('../data/mart.json'),
            towns: [
                '연수동', '칠금동', '문화동', '봉방동', '용산동', '주덕읍', '중앙탑면', '호암동', '대소원면', '교현동', '수안보면', '살미면', '엄정면', 
                '목행동', '안림동', '노은면', '신니면', '소태면', '산척면', '금가면', '동량면', '양성면'
            ],
            townList: [],
        }
    },
    mutations: {
        // all
        startSpinner(state){
            // window.onload = () => {
            //     state.loading = false;
            // }
            state.loading = true;
        },
        endSpinner(state){
            state.loading = false;
        },
        
        // video 데이터 
        movieData(state){
            let data = state.videoData;
            data.map(a => {
                state.videoImg.push(a.thumbnail);
                state.videoTitle.push(a.title);
                state.video.push(a.url);
                state.profileImg.push(a.profile);
                state.profileName.push(a.channelId);
                state.movieDetail.push(a.detail);
            })
        },
        // 마트관련 데이터
        martData(state){
            state.towns.sort(); // 가나다순 정렬.
            let martData = state.martData.town.연수동;
            martData.map(a => {
                state.townList.push(a.name)
            })
            console.log(1)
            console.log($route.params.id);
        }
    },
    actions: {
        // 비디오 관련 데이터
        randomMovieDate(context){
            // 각 타이틀마다 랜덤 영상을 axios.get으로 가져오고 그 데이터를 위의 movieData에 정의해서 넣기
        }
        // 마트관련 데이터
    }
})

export default store;
