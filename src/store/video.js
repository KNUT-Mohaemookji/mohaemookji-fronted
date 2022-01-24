import videoData from '../data/video.json'

const video = {
    namespaced: true,
    state: () =>({
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
    }),
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
    }
}

export default video