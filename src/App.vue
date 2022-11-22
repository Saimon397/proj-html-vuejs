<template>
  <div>
    <HeaderComponent />
    <JumboComponent />
    <Main1Component />
    <Main2Component />
    <FooterComponent />
  </div>
</template>

<script>
import FooterComponent from './components/FooterComponent.vue';
import HeaderComponent from './components/HeaderComponent.vue';
import JumboComponent from './components/JumboComponent.vue';
import Main1Component from './components/Main1Component.vue';
import Main2Component from './components/Main2Component.vue';

export default {
  components: { HeaderComponent, Main1Component, FooterComponent, JumboComponent, Main2Component }
}
</script>

<style lang="scss" scoped>

</style>