<template>
  <div class="container mt-5 pt-5 text-center">
    <div>
      <h4>Let's Dream Big Together</h4>
    </div>
    <div class="d-flex justify-content-center">
      <h1>We are pioneers of the digital approach, using leading-edge technology to simplify procedures and apply
        executive coaching in the new age of digitalization.</h1>
    </div>
    <!-- inserisco i 6 component dinamicamente -->
    <div class="d-flex justify-content-around pt-5">
      <div class="px-3" v-for="(element, index) in elements" :key="index">
        <h5>{{ element.name }}</h5>
        <p> {{ element.info }} </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {
    name: 'MainComponent',
  },
  data: function () {
    return {
      elements: [
        {
          img: '',
          name: 'One to One',
          info: 'Getting the necessary clarity about the current state to help you improve your game.',
        },
        {
          img: '',
          name: 'Anywhere',
          info: 'Access to valuable and portable program which allow you to setup and live anywhere you want.',
        },
        {
          img: '',
          name: 'On Time',
          info: 'Punctuality is our top priority because it\'s an essential criteria to assess a program quality.',
        },
        {
          img: '',
          name: 'Online Coures',
          info: 'Online business coaching now offers you a very powerful way to empower your business into success.',
        },
        {
          img: '',
          name: 'Consulting',
          info: 'You will get a clear sense of direction for your business, thorough assessment and faster results.',
        },
        {
          img: '',
          name: 'Self Development',
          info: 'Business Coaching often keep your focus and develop you both in a professional and personal way.',
        },
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
@use '../assets/partials/mixins' as *;
@use '../assets/partials/variables' as *;

h4 {
  color: $col4;
  padding-bottom: 30px;
}

h1 {
  color: $col1-2;
  font-weight: bold;
}

h5 {
  color: $col1-2;
  font-weight: 500;
}

p {
  color: $col5;
}
</style>