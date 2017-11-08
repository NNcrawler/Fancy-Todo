<template lang="html">
  <div v-bind:class="getColorPanel" class="panel">
    <div class="panel-heading">
      <h3 class="panel-title">{{title}}</h3><span class="badge badge-danger">Priority 1</span>
    </div>
    <div class="panel-body">
      <p>{{detail}}</p>
      <div class="btn-group">
        <button type="button" :class="getColorButton" class="btn" @click="toggleStatus">{{toggleStatusText}}</button>
        <button type="button" :class="getColorButton" class="btn dropdown-toggle" data-toggle="dropdown">
          <span class="caret"></span>
          <span class="sr-only">Toggle Dropdown</span>
        </button>
        <ul class="dropdown-menu" role="menu">
          <li><a href="#">edit</a></li>
          <li @click="deleteTask"><a href="#">remove</a></li>
        </ul>
      </div> <small class="text-muted">created {{createdAt}}</small>
    </div>
  </div>
</template>

<script>
export default {
  props: ['title', 'detail', 'createdAt', 'status', 'id'],
  computed: {
    toggleStatusText() {
      return this.status === 'Not Done' ? 'Done' : 'Return to todo';
    },
    getColorPanel() {
      const res = {};
      if (window.localStorage.getItem('color') === 'info') {
        res['panel-info'] = true;
      } else if (window.localStorage.getItem('color') === 'success') {
        res['panel-success'] = true;
      } else if (window.localStorage.getItem('color') === 'warning') {
        res['panel-warning'] = true;
      } else if (window.localStorage.getItem('color') === 'danger') {
        res['panel-danger'] = true;
      }
      // res['list-group-item-success'] = true;
      return res;
    },
    getColorButton() {
      const res = {};
      if (window.localStorage.getItem('color') === 'info') {
        res['btn-info'] = true;
      } else if (window.localStorage.getItem('color') === 'success') {
        res['btn-success'] = true;
      } else if (window.localStorage.getItem('color') === 'warning') {
        res['btn-warning'] = true;
      } else if (window.localStorage.getItem('color') === 'danger') {
        res['btn-danger'] = true;
      }
      // res['list-group-item-success'] = true;
      return res;
    },
  },
  methods: {
    toggleStatus() {
      const data = {
        token: window.localStorage.getItem('user'),
        id: this.id,
      };
      this.$request.put('/task/toggle', data)
        .then(() => {
          let type = 'unfinished';
          if (this.$route.path === 'task/done') {
            type = 'finished';
          } else if (this.$route.path === 'task/todo') {
            type = 'unfinished';
          }
          this.$store.commit('updateTodo', type);
        })
        .catch((err) => {
          alert(err);
          alert('gagal');
        });
    },
    deleteTask() {
      // alert(this.id);
      const data = {
        id: this.id,
        token: window.localStorage.getItem('user'),
      };
      // alert(data.token);
      this.$request.delete('/task', { data })
        .then(() => {
          let type = null;
          if (this.$route.path === '/task/done') {
            type = 'finished';
          } else if (this.$route.path === '/task/todo') {
            type = 'unfinished';
          }
          this.$store.commit('updateTodo', type);
        })
        .catch((err) => {
          console.log(err);
        //  alert('gagal');
        });
    },
  },
};
</script>

<style lang="css">
</style>
