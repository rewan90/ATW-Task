<template>
  <section class="hero-img ">
    <nav class="navbar navbar-expand-lg navbar-light mask-custom shadow-0">
      <div class="container">
        <a class="navbar-brand mx-5" href="#!">
          <img src="../../assets/logo.svg" alt="logo" width="150px" />
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
        <font-awesome-icon :icon="['fas', 'fa-bars']" class="whit-text"/>

      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
  <ul class="navbar-nav mx-auto d-flex  align-items-center">
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

    <div class="bg-color py-5">
      <div class="container centered">
        <div class="d-flex-table align-items-center justify-content-center">
          <h1 class="text-center d-flex align-items-center justify-content-center">
            Your own NFT Market place
            <br />
            without Coding
          </h1>
          <p class="text-center d-flex align-items-center justify-content-center">
            The fastest and easiest way to fully unlock the potential of
            <br />your digital assets. Create and run an exclusive marketplace <br />for your NFT
            business today!
          </p>
          <div class="d-flex align-items-center justify-content-center">
            <input
              type="email"
              class="form-control rounded-pill"
              placeholder="Enter your email...."
            />
            <button type="button" class="btn btn-primary rounded-pill btn-custom">
              Start Free
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup></script>

<style scoped>
.bg-color {
  height: 100%;
  height: 100vh;
  height: 949px;
  gap: 0px;
  opacity: 0px;
  background-size: 100% 100%;
  background: linear-gradient(181.14deg, #D9D9D9 21.73%, rgba(217, 217, 217, 0) 100.26%);
  background: rgba(0, 0, 0, 0.55);

}
nav{
  background: rgba(0, 0, 0, 0.25);

}

.hero-img {
  background-image: url(../../assets/hero.svg);
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  position: relative;
  text-align: center;
}
nav .navbar-nav li a {
  color: white !important;
}
input {
  width: 25% !important;
  margin-right: 10px;
  background-color: rgba(0, 0, 0, 1) !important;
}
.centered {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
nav,ul,li,a{
  font-family: Poppins;
font-size: 20px;
font-weight: 400;
line-height: 30px;
text-align: left;

}


</style>
