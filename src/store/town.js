// import martData from '../data/mart.json'

const town = {
    namespaced: true,
    state: {
        martData: require('../data/mart.json'),
        towns: [
            '연수동', '칠금동', '문화동', '봉방동', '용산동', '주덕읍', '중앙탑면', '호암동', '대소원면', '교현동', '수안보면', '살미면', '엄정면', 
            '목행동', '안림동', '노은면', '신니면', '소태면', '산척면', '금가면', '동량면', '양성면'
        ],
        townList: [],
        townLocation: 0,
        a: '1'
    },
    mutations: {
        townList(state, data){
            let btnClick = [...state.towns] // towns를 가져옴.
            state.townLocation = btnClick.indexOf(data); // 버튼을 클릭한 index 값 가져옴.
            console.log(state.martData.towns[state.townLocation])
        },
    }
}

export default town