import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'

import { library } from '@fortawesome/fontawesome-svg-core'
import Swiper from 'swiper/bundle'
import './assets/main.css'
import 'swiper/css/bundle'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import {
  faFacebook,
  faInstagram,
  faLinkedinIn,
  faTelegram,
  faTwitter,
  faYoutube
} from '@fortawesome/free-brands-svg-icons'

const app = createApp(App)
const swiper = new Swiper()

app.config.globalProperties.$swiper = swiper

library.add(faBars)
library.add(faFacebook)
library.add(faInstagram, faLinkedinIn, faTelegram,faFacebook,faTwitter, faYoutube)

app.component('font-awesome-icon', FontAwesomeIcon)

app.use(createPinia())

app.use(router)

app.mount('#app')
