<template lang="html">
  <div class="col-md-12">
    <!-- {{todo}} -->
    <div class="col-md-4" v-for="task in processedTodo">
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
  },
  mounted() {
    this.$request.get(`/task/unfinished/${window.localStorage.getItem('user')}`)
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
  },
  components: {
    'task-card': taskCard,
  },
};
</script>

<style lang="css">
</style>
