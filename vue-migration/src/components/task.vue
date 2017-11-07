<template lang="html">
  <div class="panel panel-success">
    <div class="panel-heading">
      <h3 class="panel-title">{{title}}</h3><span class="badge badge-danger">Priority 1</span>
    </div>
    <div class="panel-body">
      <p>{{detail}}</p>
      <div class="btn-group">
        <button type="button" class="btn btn-success" @click="toggleStatus">{{toggleStatusText}}</button>
        <button type="button" class="btn btn-success dropdown-toggle" data-toggle="dropdown">
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
  },
  methods: {
    toggleStatus() {
      const data = {
        token: window.localStorage.getItem('user'),
        id: this.id,
      };
      this.$request.put('/task/toggle', data)
        .then((value) => {
          alert(value.data.message);
          alert('berhasil');
        })
        .catch((err) => {
          alert(err);
          alert('gagal');
        });
    },
    deleteTask() {
      alert(this.id);
      const data = {
        id: this.id,
        token: window.localStorage.getItem('user'),
      };
      alert(data.token);
      this.$request.delete('/task', { data })
       .then((value) => {
         console.log(value.data.message);
         alert('value.data.message');
       })
       .catch((err) => {
         console.log(err);
         alert('gagal');
       });
    },
  },
};
</script>

<style lang="css">
</style>
