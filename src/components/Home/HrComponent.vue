<template>
  <div class="d-flex flex-wrap m-0 align-items-center justify-content-around p-2">
    <h3 class="mb-0">Powering leading brands</h3>
    <h3 class="mb-0">
      <img src="../../assets/hr/coindesk.svg" alt="Coindesk">
      Coindesk
    </h3>
    <h3 class="mb-0">
      <img src="../../assets/hr/H E F T Y V E R S E.svg" alt="H E F T Y V E R S E">
      H E F T Y V E R S E
    </h3>
  </div>
</template>

<script lang="ts" setup></script>

<style scoped>
.d-flex {
  flex-wrap: wrap; 
}

h3 {
  margin-bottom: 0.5rem; 
}

img {
  width: 50px; 
  height: 50px; 
  margin-right: 10px; 
}


/* On small screens (less than 768px) */
@media (max-width: 767px) {
  .d-flex {
    flex-direction: column; /* stack elements vertically */
  }
  h3 {
    margin-bottom: 1rem; /* increase margin for better spacing */
  }
}

/* On medium screens (between 768px and 992px) */
@media (min-width: 768px) and (max-width: 991px) {
  .d-flex {
    justify-content: space-between; /* distribute elements evenly */
  }
}

/* On large screens (greater than 992px) */
@media (min-width: 992px) {
  .d-flex {
    justify-content: space-around; /* distribute elements with equal space around */
  }
}
</style>