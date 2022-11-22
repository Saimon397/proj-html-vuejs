<template>
  <div>
    <HeaderComponent />
    <JumboComponent />
    <Main1Component />
    <Main2Component />
    <Main3Component />
    <Main4Component />
    <Main5Component />
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
import Main4Component from './components/Main4Component.vue';
import Main5Component from './components/Main5Component.vue';

export default {
  components: { HeaderComponent, Main1Component, FooterComponent, JumboComponent, Main2Component, Main3Component, Main4Component, Main5Component }
}
</script>

<style lang="scss" scoped>

</style>