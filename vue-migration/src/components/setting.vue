<template lang="html">
  <div class="">
    <div class="row margin-setting">
      <h1>Setting</h1>
      <div class="col-md-3">
        <strong>Card color :</strong>
      </div>
      <div class="col-md-1">
        <button @click="changeColor('info')" type="button" class="btn btn-info btn-block"></button>
      </div>
    </div>
    <div class="row margin-setting">
      <div class="col-md-3">
      </div>
      <div class="col-md-1">
        <button @click="changeColor('warning')" type="button" class="btn btn-warning btn-block"></button>
      </div>
    </div>
    <div class="row margin-setting">
      <div class="col-md-3">
      </div>
      <div class="col-md-1">
        <button @click="changeColor('danger')" type="button" class="btn btn-danger btn-block"></button>
      </div>
    </div>
    <div class="row margin-setting">
      <div class="col-md-3">
      </div>
      <div class="col-md-1">
        <button @click="changeColor('success')" type="button" class="btn btn-success btn-block"></button>
      </div>
    </div>
    <hr>
    <div class="row margin-setting">

      <div class="col">
        <small>*reload the page for setting to get any effect.</small>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  methods: {
    changeColor(color) {
      window.localStorage.setItem('color', color);
    },
  },
};
</script>

<style lang="css">
.margin-setting{
  margin-top: 7px;
}
</style>
