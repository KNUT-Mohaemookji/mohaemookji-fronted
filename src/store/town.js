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
    },
    mutations: {
        martData(state){
            state.towns.sort(); // 가나다순 정렬.
            let martData = state.martData.towns.연수동;
            console.log(martData)
            martData.map(a => {
                state.townList.push(a.name)
            })  
        }
    }
}

export default town