<template>
  <div>
    <LandingPage></LandingPage>
    <SectionOne></SectionOne>
    <SectionTwo></SectionTwo>
    <CollectionSwipe></CollectionSwipe>

  </div>
</template>

<script>
import LandingPage from '../components/Home/LandingPage.vue';
import SectionOne from '../components/Home/SectionOne.vue';
import SectionTwo from '../components/Home/SectionTwo.vue';
import CollectionSwipe from '../components/Home/CollectionSwipe.vue';


export default {
  name: 'HomeView',
  components: {
    LandingPage,
    SectionOne,
    SectionTwo,
    CollectionSwipe


  }
}
</script>

<style>

</style>