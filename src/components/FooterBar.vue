<template>
  <footer class="container-fluid p-0">
    <div class="container pt-5">
      <div class="row">
        <div class="col-lg-4 col-md-6 col-sm-12 pr-md-5">
          <h2>Join our weekly digest!</h2>
          <h6>Get exclusive promotions & updates straight to your inbox.</h6>
          <div class="input-group mb-3">
            <input
              type="email"
              class="form-control rounded-pill"
              placeholder="Enter your email...."
            />
            <div class="input-group-append mx-2">
              <button type="button" class="btn btn-dark rounded-pill">Subscribe</button>
            </div>
          </div >
          <button type="button" class="btn btn-primary rounded-pill btn-custom">
            Create Free Store
          </button>
        </div>

        <div class="col-lg-2 col-md-2 col-sm-6 d-flex flex-column align-items-center">
          <h3>FEATURES</h3>
          <ul >
            <li><a href="#!">Build Store</a></li>
            <li><a href="#!">Sell NFT</a></li>
            <li><a href="#!">Grow Business</a></li>
          </ul>
        </div>

        <div class="col-lg-2 col-md-2 col-sm-6 d-flex flex-column align-items-center">
          <h3>SERVICES</h3>
          <ul class="text-start">
            <li><a href="#!">Concierge</a></li>
            <li><a href="#!">Customization</a></li>
          </ul>
        </div>

        <div class="col-lg-2 col-md-2 col-sm-6 d-flex flex-column align-items-center">
          <h3>PRODUCT</h3>
          <ul class="list-left">
            <li><a href="#!">About Us</a></li>
            <li><a href="#!">Whitepaper</a></li>
            <li><a href="#!">$N1 Token</a></li>
            <li><a href="#!">Directory</a></li>
          </ul>
        </div>

        <div class="col-lg-2 col-md-2 col-sm-6 d-flex flex-column align-items-center">
          <h3>RESOURCES</h3>
          <ul>
            <li><a href="#!">Help Center</a></li>
            <li><a href="#!">NFTify Branding</a></li>
            <li><a href="#!">Success Stories</a></li>
            <li><a href="#!">Video Tutorials</a></li>
            <li><a href="#!">Contact Support</a></li>
          </ul>
        </div>
      </div>
    </div>

    <hr class="my-3" />

    <section class="p-3 pt-0">
      <div class="row d-flex align-items-center">
        <div class="d-flex flex-column align-items-center justify-content-center">
          <h5>The Leading No-code NFT Marketplace Solution</h5>
        </div>
        <div class="d-flex justify-content-around p-3">
          <div class="p-3">
            <span class="text-white">© Copyright NFTify Network. All Rights Reserved.</span>
          </div>
          <ul class="list-unstyled d-flex">
            <li>
              <a class="btn btn-outline-light btn-floating m-1" role="button">
                <font-awesome-icon :icon="['fab', 'twitter']" size="2x" />
              </a>
            </li>

            <li>
              <a class="btn btn-outline-light btn-floating m-1" role="button">
                <font-awesome-icon :icon="['fab', 'telegram']" size="2x" />
              </a>
            </li>
            <li>
              <a class="btn btn-outline-light btn-floating m-1" role="button">
                <font-awesome-icon :icon="['fab', 'facebook']" size="2x" />
              </a>
            </li>
            <li>
              <a class="btn btn-outline-light btn-floating m-1" role="button">
                <font-awesome-icon :icon="['fab', 'linkedin-in']" size="2x" />
              </a>
            </li>
            <li>
              <a class="btn btn-outline-light btn-floating m-1" role="button">
                <font-awesome-icon :icon="['fab', 'youtube']" size="2x" />
              </a>
            </li>
            <li>
              <a class="btn btn-outline-light btn-floating m-1" role="button">
                <font-awesome-icon :icon="['fab', 'instagram']" size="2x" />
              </a>
            </li>
          </ul>

          <div class="d-flex p-3">
            <p class="mx-4">Terms of Service Privacy Policy</p>
            <p>Privacy Policy</p>
          </div>
        </div>
      </div>
    </section>
  </footer>
</template>

<script lang="ts" setup></script>

<style scoped>
footer {
  background: linear-gradient(180deg, #52057b 0%, #000000 100%);
  /* height: 70vh; */
}

li a {
  color: rgba(214, 213, 168, 1);
  font-family: Poppins;
  font-size: 12px;
  font-weight: 300;
  line-height: 18px;
}

li {
  margin-top: 12px;
}

h3 {
  font-family: Poppins;
  font-size: 15px;
  font-weight: 700;
  line-height: 22.5px;
  text-align: left;
}

hr {
  height: 2px;
  color: rgba(129, 103, 151, 1);
}

ul {
  padding: 0;
  margin: 0;
}

/* Media queries */

/* Small screens (less than 768px) */
@media (max-width: 767px) {
  .container {
    padding: 20px;
  }
  .col-lg-4 {
      width: 100%;
    }
  .col-sm-12 {
    width: 100%;
  }
  .col-lg-2 {
      width: 50%;
    }
  h2 {
    font-size: 18px;
  }
  h3 {
    font-size: 13px;
  }
  li {
    margin-top: 6px;
  }
  .input-group {
    flex-direction: column;
  }
  .input-group-append {
    margin-top: 10px;
  }
  input{
    width: 100% !important;
  }
  .btn-custom {
    width: 100%;
    margin-bottom: 20px;
  }
}

/* Medium screens (between 768px and 992px) */
@media (min-width: 768px) and (max-width: 991px) {
  .container {
    padding: 30px;
  }
  .row {
    flex-direction: row;
  }
  .col-lg-4, .col-md-6, .col-sm-12 {
    width: 50%;
  }
  h2 {
    font-size: 20px;
  }
  h3 {
    font-size: 15px;
  }
  li {
    margin-top: 10px;
  }
  .input-group {
    flex-direction: row;
  }
  .input-group-append {
    margin-top: 0;
  }
  .btn-custom {
    width: 50%;
  }
}

/* Large screens (greater than 992px) */
@media (min-width: 992px) {
  .container {
    padding: 40px;
  }
  .row {
    flex-direction: row;
  }
  .col-lg-4, .col-md-6, .col-sm-12 {
    width: 33.33%;
  }
  h2 {
    font-size: 22px;
  }
  h3 {
    font-size: 17px;
  }
  li {
    margin-top: 14px;
  }
  .input-group {
    flex-direction: row;
  }
  .input-group-append {
    margin-top: 0;
  }

}
</style>
