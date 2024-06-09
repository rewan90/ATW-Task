<template>
  <div>
    <LandingPage></LandingPage>
    <HrComponent></HrComponent>
    <SectionOne class="mb-2"></SectionOne>
    <SectionTwo class="mb-2"></SectionTwo>
    <CollectionSwipe></CollectionSwipe>

  </div>
</template>

<script>
import LandingPage from '../components/Home/LandingPage.vue';
import HrComponent from '../components/Home/HrComponent.vue';

import SectionOne from '../components/Home/SectionOne.vue';
import SectionTwo from '../components/Home/SectionTwo.vue';
import CollectionSwipe from '../components/Home/CollectionSwipe.vue';


export default {
  name: 'HomeView',
  components: {
    LandingPage,
    HrComponent,
    SectionOne,
    SectionTwo,
    CollectionSwipe


  }
}
</script>

<style>

</style>