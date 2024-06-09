<template>
  <nav class="navbar navbar-expand-lg navbar-light shadow-0">
    <div class="container">
      <a class="navbar-brand mx-5" >
        <RouterLink to="/">
          <img src="../assets/logo.svg" alt="logo" width="150px" />
        </RouterLink>
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-mdb-toggle="collapse"
        data-mdb-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <font-awesome-icon :icon="['fas', 'fa-bars']" class="whit-text" />
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mx-auto d-flex align-items-center">
          <li class="nav-item mx-3">
            <a class="nav-link">
              <RouterLink to="/">Home</RouterLink>
            </a>
          </li>
          <li class="nav-item mx-3">
            <a class="nav-link">
              <RouterLink to="/about">About</RouterLink>
            </a>
          </li>
          <li class="nav-item mx-3">
            <a class="nav-link">
              <RouterLink to="/blog">Blog</RouterLink>
            </a>
          </li>
          <li class="nav-item mx-3">
            <a class="nav-link" href="#!">Cart</a>
          </li>
          <li class="nav-item mx-4">
            <button type="button" class="btn rounded-pill outline">Login</button>
          </li>
          <li class="nav-item mx-4">
            <button type="button" class="btn btn-primary rounded-pill btn-custom">Sign Up</button>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script lang="ts" setup></script>

<style>
.navbar {
  background: rgba(0, 0, 0, 0.25);
}
</style>
