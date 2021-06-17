import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    dan: 9,
    name: "",
    age: "",
  },
  mutations: {
    // 동기작업
    testMutation(state, data) {
      alert(`hello ${data.name} your age is ${data.age}`);
      state.name = data.name;
      state.age = data.age;
      console.log(state.name, state.age);
    },
  },
  actions: {
    // 비동기작업
    testActions({ commit }, data) {
      setTimeout(() => {
        commit("testMutation", data);
      }, 1000);
    },
  },
});
