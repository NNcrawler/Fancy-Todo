<template lang="html">
  <div v-if="checked" class="container">
    <div class="row quarter-offset"></div>
    <div class="row">
      <div class="col-md-4 col-md-offset-4">
        <h1 class="logo">Fancy Todo</h1>
        <div class="form-group has-success has-feedback">
          <label class="control-label" for="email">Email: </label>
          <input v-model="email" type="email" class="form-control" id="email">
          <span class="glyphicon glyphicon-envelope form-control-feedback"></span>
        </div>
        <div class="form-group has-success has-feedback">
          <label class="control-label" for="password">Password: </label>
          <input v-model="password" type="password" class="form-control" id="password">
          <span class="glyphicon glyphicon-log-in form-control-feedback"></span>
        </div>
        <button @click="login" type="button" class="btn btn-success btn-block">Login</button>
        <button type="button" class="btn btn-link">sign up</button>
        <hr>
        <button type="button" class="fb-login-button fb-login btn btn-block"><i class="fa fa-facebook-square" aria-hidden="true"></i> Login With Facebook</button>

        <hr>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      checked: false,
      email: '',
      password: '',
    };
  },
  methods: {
    login() {
      const data = {
        email: this.email,
        password: this.password,
        error: '',
      };
      this.$request.post('/user/login', data)
        .then((response) => {
          const res = response.data;
          if (res.message === 'berhasil') {
            window.localStorage.setItem('user', res.token);
            this.$router.push({ name: 'home' });
          } else {
            throw res;
          }
        })
        .catch((err) => {
          console.log(err);
          this.error = 'Oops something is wrong, please try again.';
        });
    },
  },
  mounted() {
    const user = window.localStorage.getItem('user');
    if (user) {
      this.$router.push({ name: 'index' });
    } else {
      this.checked = true;
    }
  },
};
</script>

<style lang="css">
.logo{
  font-family: 'Dancing Script', cursive;
}

.quarter-offset {
  height: 10vh;
}

.fb-login {
  background-color: #4267b2;

}

.fb-login:hover {
  background-color: #4267b2;

}

</style>
