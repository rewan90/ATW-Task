
<template>
    
    <!-- Render the nav component if the current route does not have the 'hideNav' property -->
    <NavBar v-if="!$route.meta.hideNav" />

    <RouterView />
    <FooterBar/>

</template>


<script>
import { RouterView } from 'vue-router';
import NavBar from './components/NavBar.vue';
import FooterBar from './components/FooterBar.vue';

export default {
  components: {
    RouterView,
    NavBar,
    FooterBar
  }
}
</script>