<template>
  <div class="section-background d-flex align-items-center justify-content-center">
    <div class="container">
      <div class="row align-items-center justify-content-center">
        <div class="col-md-6 order-md-1">
          <div class="img-wrapper">
            <img src="../../assets/sec2.jpeg" class="img-border" alt="collection" />
          </div>
          <div class="mt-5"></div>
        </div>
        <div class="col-md-6 order-md-2">
          <h2 class="text-justify">
            “KattyEfa NFT “<br />
            The image is a high-quality <br />
            digital painting with a <br />
            resolution of 5000x1250<br />
            pixels.<br />
            <span>$1.5 million </span>
          </h2>
          <div class="">
            <CircleArrow />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import CircleArrow from '../CircleArrow.vue'
</script>

<style scoped>
.section-background {
  background: rgba(0, 0, 0, 1);
  height: 90vh;
}

.container {
  font-family: Poppins;
  font-size: 32px;
  font-weight: 400;
  line-height: 48px;
  text-align: left;
}
span {
  font-family: Poppins;
  font-size: 32px;
  font-weight: 700;
  line-height: 48px;
  text-align: left;
}

.img-wrapper {
  position: relative;
  top: 50px;
}

.img-border {
  width: 561px;
  height: 562px;
  border: 3px solid #52057b;
  border-radius: 0px 32px 0px 32px;
}

@media (max-width: 768px) {
  .section-background {
    height: auto;
  }

  .container {
    padding: 0 15px;
  }

  .col-md-6 {
    margin-bottom: 20px;
  }

  .img-wrapper {
    top: 20px;
  }

  .img-border {
    width: 100%;
  }
}
</style>

