<template>
  <div>
    <HeaderComponent />
    <JumboComponent />
    <MainComponent />
    <FooterComponent />
  </div>
</template>

<script>
import FooterComponent from './components/FooterComponent.vue';
import HeaderComponent from './components/HeaderComponent.vue';
import JumboComponent from './components/JumboComponent.vue';
import MainComponent from './components/MainComponent.vue';

export default {
  components: { HeaderComponent, MainComponent, FooterComponent, JumboComponent }
}
</script>

<style lang="scss" scoped>

</style>