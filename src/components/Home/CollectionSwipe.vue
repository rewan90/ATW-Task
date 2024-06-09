<template>  
<div class="section-background p-2 ">


<h1 class="p-4" >Collection</h1>

  <div class="d-flex align-items-center justify-content-center p-5">
    <swiper
      :responsive="[
        {
          breakpoint: 1200,
          settings: {
            slidesPerView: 4,
          },
        },
        {
          breakpoint: 900,
          settings: {
            slidesPerView: 3,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesPerView: 2,
          },
        },
        {
          breakpoint: 0,
          settings: {
            slidesPerView: 1,
          },
        },
      ]"
      :freeMode="true"
      :navigation="true"
      :modules="modules"
      class="mySwiper"
    >


      <swiper-slide>
        <div class="position ">
          <img src="../../assets/swipe/1.svg" alt="collection" />
          <div class="captioun">
            PROJECT NFT cub <br />
            Floor : 0.07 ETH
          </div>
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="position">
          <img src="../../assets/swipe/2.svg" alt="collection" />
          <div class="captioun">
            Game character 3d Collection <br />
            Floor : 0.05 ETH
          </div>
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="position">
          <img src="../../assets/swipe/3.svg" alt="collection" />
          <div class="captioun">
            Monkey Collections <br />
            Floor : 0.01 ETH
          </div>
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="position">
          <img src="../../assets/swipe/4.svg" alt="collection" />
          <div class="captioun">
            PROJECT NFT cub  <br />
            Floor : 0.07 ETH
          </div>
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="position">
          <img src="../../assets/swipe/1.svg" alt="collection" />
          <div class="captioun">
            PROJECT NFT cub <br />
            Floor : 0.07 ETH
          </div>
        </div>
      </swiper-slide>

      <swiper-slide>
        <div class="position">
          <img src="../../assets/swipe/2.svg" alt="collection" />
          <div class="captioun">
            PROJECT NFT cub <br />
            Floor : 0.07 ETH
          </div>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</div>  

</template>
<script>
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import { Navigation } from 'swiper/modules'

export default {
  components: { Swiper, SwiperSlide },
  setup() {
    return { modules: [Navigation] }
  }
}
</script>

<style scoped>
.section-background{
  height: 70vh;

}
.mySwiper {
  --swiper-navigation-color: #52057b;
    --swiper-navigation-size: 50px;
  --swiper-slides-per-view: 4;
  
  width: 80%;

}
.swiper-slide{
  width: 350px !important;
}
.swiper-slide img {
  border: 2px solid #52057b;
  border-radius: 16px;

  width: 319px;
}
.captioun {
  position: absolute;
  bottom: 0;
  background: rgba(0, 0, 0, 0.75);
  color: rgba(255, 255, 255, 1);
  width: 100%;
  text-align: center;
  padding: 20px;
}
.position {
  position: relative;
  width: 319px;
}


/* media queries for responsiveness */
@media (max-width: 1200px) {
 .mySwiper {
    /* adjust slidesPerView for smaller screens */
    --swiper-slides-per-view: 3;
  }
}

@media (max-width: 900px) {
 .mySwiper {
    /* adjust slidesPerView for even smaller screens */
    --swiper-slides-per-view: 2;
  }
}

@media (max-width: 600px) {
 .mySwiper {
    --swiper-slides-per-view: 1;
  }
}




</style>


