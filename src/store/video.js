import Vue from 'vue'
import Vuex from 'vuex'
// import Vuex from 'vuex'

import data from '../data/data.json'
Vue.use(Vuex);

const video = new Vuex.Store({
    state(){
        return{
            videoData: data,
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
        }
    },
    mutations: {
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
            console.log(data)
        }
    },
    actions: {
        randomMovieDate(context){
            // 각 타이틀마다 랜덤 영상을 axios.get으로 가져오고 그 데이터를 위의 movieData에 정의해서 넣기
        }
    }
})

export default video;