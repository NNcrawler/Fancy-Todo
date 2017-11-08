<template lang="html">
  <div class="col-md-12">
    <div class="col-md-4" v-for="task in todoFromVuex">
      <task-card :id="task._id" :title="task.title" :detail="task.detail" :status="task.status" :createdAt="task.createdAt"></task-card>
    </div>
  </div>
</template>

<script>
import taskCard from './task';

export default {
  props: ['type'],
  data() {
    return {
      todo: [],
    };
  },
  computed: {
    processedTodo() {
      return this.todo.map((task) => {
        const taska = task;
        const date = new Date(task.createdAt);
        taska.createdAt = `${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`;
        return task;
      });
    },
    todoFromVuex() {
      return this.$store.state.todo;
    },
  },
  beforeRouteEnter(to, from, next) {
    next((vm) => {
      // access to component instance via `vm`
      let type = 'unfinished';
      if (vm.$route.path === '/task/done') {
        type = 'finished';
      } else if (vm.$route.path === '/task/todo') {
        type = 'unfinished';
      }
      vm.$store.commit('updateTodo', type);
    });
  },
  mounted() {
  },
  components: {
    'task-card': taskCard,
  },
  created() {
    this.$on('update', () => {
      let type = 'unfinished';
      if (this.$route.path === 'task/done') {
        type = 'finished';
      } else if (this.$route.path === 'task/todo') {
        type = 'unfinished';
      }
      this.$request.get(`/task/${type}/${window.localStorage.getItem('user')}`)
        .then(({ data }) => {
          if (data.message === 'berhasil') {
            this.todo = data.todos;
          } else {
            throw data;
          }
        })
        .catch((err) => {
          console.log(err);
        });
    });
  },
};
</script>

<style lang="css">
</style>
