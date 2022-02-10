const main = {
    namespaced: true,
    state: {
        text:['D','i', 'f','f','e','r','e','n', 't','\u00a0' ,'k', 'i', 'n', 'd','s','\u00a0', 'o','f', '\u00a0', 'f','o','o','d','!'],
        loaderState: true,
    },
    mutations:{
        // 로딩 상태를 변화시켜주는 로직 작성.
        loaderState(state, data){
            state.loaderState = false;
        }
    },
}
export default main