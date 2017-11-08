<template lang="html">
  <div class="container">

    <div class="row">

      <div class="col-md-3">
        <div class="row menu-gap">

        </div>
        <h1 class="logo text-center">Fancy Todo</h1>
        <div class="list-group">
          <a href="#" data-toggle="modal" data-target="#addTask" v-bind:class="getColor" class="list-group-item"><span class="glyphicon glyphicon-plus"></span> Create Task</a>
          <router-link :to="{ name: 'todo' }"><a href="#" v-bind:class="getColor" class="list-group-item "><span class="glyphicon glyphicon-check"></span> Todo</a></router-link>
          <router-link :to="{ name: 'done' }"><a href="#" v-bind:class="getColor" class="list-group-item "><span class="glyphicon glyphicon-list-alt"></span> Finished Task</a></router-link>
          <router-link :to="{ name: 'setting' }"><a href="#" v-bind:class="getColor" class="list-group-item "><span class="glyphicon glyphicon-cog"></span> Setting</a></router-link>
          <a @click="logout" href="#" v-bind:class="getColor" class="list-group-item"><span class="glyphicon glyphicon-log-out"></span> Logout</a>
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
  computed: {
    getColor() {
      const res = {};
      if (window.localStorage.getItem('color') === 'info') {
        res['list-group-item-info'] = true;
      } else if (window.localStorage.getItem('color') === 'success') {
        res['list-group-item-success'] = true;
      } else if (window.localStorage.getItem('color') === 'warning') {
        res['list-group-item-warning'] = true;
      } else if (window.localStorage.getItem('color') === 'danger') {
        res['list-group-item-danger'] = true;
      }
      // res['list-group-item-success'] = true;
      return res;
    },
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
  created() {
    // this.$on('updatePost', () => {
    //   this.$forceUpdate();
    //   alert('aselo');
    // });
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
