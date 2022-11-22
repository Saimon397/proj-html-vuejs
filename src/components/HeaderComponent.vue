<template>
  <header class="sticky-top position-sticky">
    <div class="container-fluid m-auto py-1" id="nav">
      <div class=" d-flex justify-content-between align-items-center">
        <div> <img class="w-50 ms-5 pt-1" src="/img/dark-logo.png" alt=""> </div>
        <!-- lista -->
        <div>
          <ul class="pt-3">
            <a href="#nogo">
              <li class="ms-3" v-for="(element, index) in NavList" :key="index"> {{ element.item }}
                <i class="fa-solid fa-angle-down icon-size"></i>
              </li>
            </a>
          </ul>
        </div>
        <!-- select language -->
        <div class="ms-5">
          <select class="form-select text-uppercase border-0" aria-label="Language">
            <option v-for="(element, index) in LanguageList" :key="index">{{ element.item }}</option>
          </select>
        </div>
        <div><a href="#nogo"><i class="fa-regular fa-circle-user text-dark"></i></a></div>
        <!-- seard -->
        <div>
          <div class="search">
            <input type="text" name="" placeholder="Search...">
            <a href="#nogo"><i class="fa-solid fa-magnifying-glass text-secondary text-dark"></i></a>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  components: {
    name: 'HeaderComonent',
  },
  data: function () {
    return {
      NavList: [
        {
          item: 'Home'
        },
        {
          item: 'Pages'
        },
        {
          item: 'Courses'
        },
        {
          item: 'Features'
        },
        {
          item: 'Blog'
        },
        {
          item: 'Shop'
        },
      ],

      LanguageList: [
        {
          img: 'img/en.png',
          item: 'English',
        },
        {
          item: 'Français',
        },
        {
          item: 'Deutsch',
        },
      ]
    };
  },
}
</script>

<style lang="scss" scoped>
@use '../assets/partials/mixins' as *;
@use '../assets/partials/variables' as *;

header {
  background-color: $col1;
  box-shadow: 10px 5px 5px $col5;

  .search {
    padding: 20px 20px;
    background-color: $col1;
    border-left: 2px solid $col3;
  }

  input {
    border: 0;
    padding: 0;
    width: 8rem;
    outline: none;
  }

  a {
    text-decoration: none;
    list-style: none;
    display: inline;
    font-weight: 500;
  }

  ul li {
    list-style: none;
    display: inline;
    padding: 10px;
    color: $col1-1;
  }

  .icon-size {
    font-size: 10px;
  }
}
</style>
