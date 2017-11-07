<template lang="html">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>
        <h4 class="modal-title">Add Task</h4>
      </div>
      <div class="modal-body">
        <div class="alert alert-warning alert-dismissable">
          <button type="button" class="close" data-dismiss="alert" aria-hidden="true">×</button>
          <strong>TIPS!</strong> Create task as simple and possible and as little as possible.
        </div>
        <div class="row">
          <div class="col-xs-12">
            <label>Task</label>
            <input v-model='title' type="text" class="form-control" placeholder="Name">
          </div>

        </div>
        <div class="row">
          <div class="col-xs-12">
            <label>Description</label>
            <textarea v-model='detail' class="form-control" rows="3"></textarea>
          </div>
        </div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
        <button @click="addTask" type="button" class="btn btn-success">Send</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: '',
      detail: '',
      message: '',
    };
  },
  methods: {
    addTask() {
      const dataInputed = {
        token: window.localStorage.getItem('user'),
        title: this.title,
        detail: this.detail,
      };
      this.$request.post('/task', dataInputed)
        .then(({ data }) => {
          if (data === 'berhasil') {
            this.message = 'Task saved!';
          } else {
            throw data;
          }
        })
        .catch((err) => {
          this.message = `Oops something wrong. ${err}`;
        });
    },
  },
};
</script>

<style lang="css">
</style>
