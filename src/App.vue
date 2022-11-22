<template>
  <div>
    <HeaderComponent />
    <JumboComponent />
    <Main1Component />
    <Main2Component />
    <Main3Component />
    <FooterComponent />
  </div>
</template>

<script>
import FooterComponent from './components/FooterComponent.vue';
import HeaderComponent from './components/HeaderComponent.vue';
import JumboComponent from './components/JumboComponent.vue';
import Main1Component from './components/Main1Component.vue';
import Main2Component from './components/Main2Component.vue';
import Main3Component from './components/Main3Component.vue';

export default {
  components: { HeaderComponent, Main1Component, FooterComponent, JumboComponent, Main2Component, Main3Component }
}
</script>

<style lang="scss" scoped>

</style>