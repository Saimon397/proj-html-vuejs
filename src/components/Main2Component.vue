<template>
    <div class="container-fluid mt-5 pt-5 text-center bg-col2">
        <div>
            <h4>Let's Dream Big Together</h4>
        </div>
        <div class="d-flex justify-content-center">
            <h1>Explore How can I help you</h1>
        </div>
        <!-- inserisco i 3 component dinamicamente -->
        <div class="d-flex justify-content-around my-5">
            <div class="px-3 card" v-for="(element, index) in elements2" :key="index">
                <img :src="`img/${element.img}.jpg`" alt="">
                <h5>{{ element.name }}</h5>
                <p> {{ element.info }} </p>
                <div class="bord"></div>
                <div class="disc-now-button">
                    <a @click.prevent :href="`${element.url}`">Discover now<i
                            class="fa-solid fa-arrow-right-long ms-2 mt-1"></i></a>
                </div>

            </div>
        </div>
    </div>
</template>

<script>
export default {
    components: {
        name: 'Main2Component',
    },
    data: function () {
        return {
            elements2: [
                {
                    img: 'home-business-service-slide-01-480x298.jpg',
                    name: 'Consultative Trainig',
                    info: 'with a coach addressing multiple issues that are off balance, affecting your business in various unconsidered ways.',
                    url: '#',
                },
                {
                    img: 'home-business-service-slide-02-480x298.jpg',
                    name: 'Real Deal Coaching',
                    info: 'Brings an exceptionally powerful opportunity. Being able to accept, to work with that opportunity.',
                    url: '#',
                },
                {
                    img: 'home-business-service-slide-03-480x298.jpg',
                    name: 'Advisor Training Program',
                    info: 'Getting high quality, entrepreneur mindset driven online business coaching, is what is needed.',
                    url: '#',
                },
            ]
        }
    }
}
</script>

<style lang="scss" scoped>
@use '../assets/partials/mixins' as *;
@use '../assets/partials/variables' as *;

.bg-col2 {
    background-color: $col11;
}

h4 {
    color: $col4;
    padding-bottom: 30px;
}

h1 {
    font-weight: bold;
}

.bord {
    border-bottom: 1px solid $col3;
}

.card {
    background-color: $col1;
    box-shadow: 10px 5px 5px $col5;
    width: 400px;
}

.disc-now-button {
    padding: 10px;
    background-color: $col1;
    margin: 0 auto;
    widows: 80%;
    transition-duration: .3s;
    border-radius: 15px;

    &:hover {
        background-color: $col1-1;
    }

    a {
        text-decoration: none;
        color: $col4;
        font-weight: bolder;
    }

}
</style>