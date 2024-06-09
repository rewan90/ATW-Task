FILE: NotFound.vue

<template>
  <div class="wrapper">
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <div class="error-template">
            <h1>Oops!</h1>
            <h2>404 Page Not Found</h2>
            <div class="error-details">Sorry, an error has occurred, requested page not found!</div>
            <div class="error-actions">
              <router-link to="/" class="btn btn-primary  btn-custom btn-lg">
                <font-awesome-icon :icon="['fas', 'house']" />                Take Me Home
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NotFound'
}
</script>

<style scoped>
.error-template {
  padding: 40px 15px;
  text-align: center;
}
.error-actions {
  margin-top: 15px;
  margin-bottom: 15px;
}
</style>
