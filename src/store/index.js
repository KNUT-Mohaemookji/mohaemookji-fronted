import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import video from './video.js'
import town from './town.js'

const store = new Vuex.Store({
    modules: {
        video,
        town,
    }
})

export default store