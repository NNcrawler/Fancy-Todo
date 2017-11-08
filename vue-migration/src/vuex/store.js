import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    finishedTask: [],
    todo: [],
  },
  mutations: {
    updateTodo(state, type) {
      axios.get(`http://localhost:3000/task/${type}/${window.localStorage.getItem('user')}`)
        .then(({ data }) => {
          if (data.message === 'berhasil') {
            // eslint-disable-next-line
            state.todo = data.todos;
          } else {
            throw data;
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
});
