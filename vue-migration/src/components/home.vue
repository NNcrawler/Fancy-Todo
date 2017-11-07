<template lang="html">
  <div class="container">

    <div v-if="checked" class="row">

      <div class="col-md-3">
        <div class="row menu-gap">

        </div>
        <h1 class="logo text-center">Fancy Todo</h1>
          <a href="#" data-toggle="modal" data-target="#addTask" class="list-group-item list-group-item-success"><span class="glyphicon glyphicon-plus"></span> Create Task</a>
          <div class="list-group"><router-link :to="{ name: 'todo' }"><a href="#" class="list-group-item list-group-item-success"><span class="glyphicon glyphicon-check"></span> Todo</a></router-link>
          <a href="#" class="list-group-item list-group-item-success"><span class="glyphicon glyphicon-list-alt"></span> Finished Task</a>
          <a href="#" class="list-group-item list-group-item-success"><span class="glyphicon glyphicon-cog"></span> Setting</a>
          <a @click="logout" href="#" class="list-group-item list-group-item-success"><span class="glyphicon glyphicon-log-out"></span> Logout</a>
        </div>
      </div>

      <div class="col-md-9">
        <div class="row content-gap">

        </div>
        <div class="row">

          <router-view/>

        </div>
      </div>

    </div>

    <div class="modal" id="addTask">
      <add-task/>
    </div>

  </div>
</template>

<script>
export default {
  data() {
    return {
      checked: false,
    };
  },
  components: {
    'add-task': () => import('../components/add-task'),
  },
  methods: {
    logout() {
      window.localStorage.removeItem('user');
      this.$router.push({ name: 'login' });
    },
  },
  mounted() {
    const user = window.localStorage.getItem('user');
    if (!user) {
      this.$router.push({ name: 'login' });
    } else {
      this.checked = true;
      this.$router.push({ name: 'todo' });
    }
  },
};
</script>

<style lang="css">
.menu-gap {
  height: 13vh;
}

.content-gap{
  height: 10vh;
}

</style>
