<template>
    <div class="bgg container-fluid mt-5 pt-5 pb-5">
        <div class="text-center">
            <h4>Let's Dream Big Together</h4>
        </div>
        <div class="text-center">
            <h1>Explore How can I help you</h1>
        </div>
        <div class="d-flex container-fluid justify-content-around mt-5 pt-5 row gap-3">
            <div class="card2" v-for="(element, index) in elements3" :key="index">
                <div class="card2-1">
                    <p>{{ element.cap }}</p>
                    <h5> {{ element.name }} </h5>
                </div>
                <div class="card3">
                    <span class="num"> {{ element.num }} </span>
                    <span class="data"> {{ element.data }} </span>
                    <span class="button"> {{ element.buttonn }} </span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    components: {
        name: 'Main5Component',
    },
    data: function () {
        return {
            elements3: [
                {
                    cap: '📍 Texas, US',
                    name: 'Storytelling Workshop',
                    num: '22',
                    data: 'APR',
                    buttonn: 'Get ticket',
                },
                {
                    cap: '📍 New York, US',
                    name: 'Painting Art Contest 2020',
                    num: '10',
                    data: 'OCT',
                    buttonn: 'Get ticket',
                },
                {
                    cap: '📍 Hamburg, Germany',
                    name: 'International Art Fair 2020',
                    num: '23',
                    data: 'NOV',
                    buttonn: 'Get ticket',
                },
                {
                    cap: '📍 Illinois, US',
                    name: 'Street Performance: Call for Artist',
                    num: '15',
                    data: 'DEC',
                    buttonn: 'Get ticket',
                },
                {
                    cap: '📍 Illinois, US',
                    name: 'Consumer Food Safety Education Conference',
                    num: '22',
                    data: 'JUL',
                    buttonn: 'Get ticket',
                },
                {
                    cap: '📍 Dubai',
                    name: 'How meditation improve your mental health',
                    num: '12',
                    data: 'AUG',
                    buttonn: 'Get ticket',
                },
            ]
        }
    }
}
</script>

<style lang="scss" scoped>
@use '../assets/partials/mixins' as *;
@use '../assets/partials/variables' as *;

.bgg {
    background-color: $col1;
}

h4 {
    color: $col4;
    padding-bottom: 30px;
}

h1 {
    font-weight: bold;
}

.card2 {
    background-color: $col11;
    box-shadow: 10px 5px 5px $col5;
    width: 600px;
    height: 200px;
    border-radius: 10px;

    &:hover {
        background-color: $col1;
        border-left: $col4;
    }

    p {
        color: $col5;
    }

    h5 {
        color: $col1-2;
    }
}

.card2-1 {
    margin-top: 30px;
    margin-left: 20px;
}

.card3 {
    width: 500px;
    height: 200px;
    margin-left: 320px;
}

.num {
    margin-right: 10px;
    color: $col4;
    font-weight: bold;
    font-size: 40px;
}

.data {
    color: $col1-2;
    font-weight: 500;
    font-size: 30px;
}

.button {
    margin-left: 10px;
    margin-top: 20px;
    justify-content: center;
    font-weight: bold;
    padding: 18px 18px;
    background-color: $col4;
    border-radius: 4%;
    width: 25%;
    transition: .2s;
    color: $col1;

    &:hover {
        background-color: $col1-1;
    }

    a {
        text-decoration: none;
    }
}
</style>