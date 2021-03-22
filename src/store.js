import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    categoryCode: null
  },
  mutations: {
    changeCategoryCode(state, newCategoryCode) {
      state.categoryCode = newCategoryCode
    }
  },
  actions: {

  },
  getters:{
    categoryCode(state){
      return state.categoryCode
    }
  }
})
