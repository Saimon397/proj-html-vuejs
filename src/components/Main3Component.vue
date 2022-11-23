<template>
    <div class="container-fluid bg-col2 mt-5 mb-5 pt-5 pb-5">
        <div class="text-center">
            <h4>Let's Dream Big Together</h4>
        </div>
        <div class="text-center">
            <h1>Explore How can I help you</h1>
        </div>
        <div class="d-flex justify-content-around py-5 gap-1">
            <div class="carddd container" v-for="(card, index) in store.cards" :key="index">
                <img :src="card.img" alt="">
                <div class="cost"> {{ card.price }} </div>
                <h5>{{ card.info1 }}</h5>
                <div class="rest">
                    <span><i class="fa-solid fa-file-lines me-2"></i></span>
                    <span class="">{{ card.lessons }} Lessons</span>
                    &nbsp;
                    <span><i class="fa-solid fa-user me-2"></i></span>
                    <span>{{ card.Students }} Students</span>
                </div>
            </div>
        </div>
        <div class="text-center pt-5">
            <p>Take the control of their life back and start doing things to make their dream come true.<br><a
                    @click.prevent href="#nogo">View all courses<i class="fa-solid fa-arrow-right-long ps-2"></i></a>
            </p>
        </div>
    </div>
</template>

<script>
import { store } from '../data/store';
export default {
    components: {
        name: 'Main3Component',
    },
    data: function () {
        return {
            store,
        }
    }
}
</script>

<style lang="scss" scoped>
@use '../assets/partials/mixins' as *;
@use '../assets/partials/variables' as *;

.bg-col2 {
    background-color: $col1;
}

h4 {
    color: $col4;
    padding-bottom: 30px;
}

h1 {
    font-weight: bold;
}

.carddd {
    transition: 0.8s;

    &:hover {
        transform: scale(1.2);
    }
}

h5 {
    text-align: center;
    color: $col1;
}

img {
    box-shadow: 10px 5px 5px $col5;
    border-radius: 7px;
    width: 340px;
}

.cost {
    padding: 20px;
    color: $col16;
    font-size: 25px;
    font-weight: bold;
    margin-top: -180px;
}

.rest {
    text-align: center;
    color: $col1;
}

p {
    font-size: 20px;
    color: $col5;

    a {
        color: $col1-2;
    }
}
</style>