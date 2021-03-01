// import Vue from 'vue';
import Vuex from 'vuex';
// import axios from 'axios';

const store = new Vuex.Store({
  state: {
    id: '',
    state: 0
  },
  mutations: {
    setId (state, id) {
      state.id = id
    },
    setState (state, number) {
      state.state = number
    }
  },
  getters: {
    id: state => state.id,
    state: state => state.state
  }
})
;
export default store;
