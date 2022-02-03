import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import video from './video.js'
import town from './town.js'
import main from './main'

const store = new Vuex.Store({
    modules: {
        main,
        video,
        town,
    }
})

export default store