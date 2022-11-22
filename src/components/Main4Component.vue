<template>
    <div class="bg3 container-fluid justify-content-between pt-5 pb-5">
        <div class="d-flex col-12">
            <div class="bg-video">
                <img src="/img/home-business-video-poster-670x450.jpg" alt="">
                <div class="yt">
                    <a href="https://www.youtube.com/watch?v=ElFJ1qcl74U&t=2s"><img src="/img/icon-youtube-play.png"
                            alt=""></a>
                </div>
            </div>
            <div class="question">
                <h1>To Thive In Business Today, You'll Need a Good Plan</h1>
                <div v-for="(element, index) in elements3" :key="index">
                    <div class="small-container">
                        <div class="question-box">
                            <div class="question-text">
                                <h4>{{ element.name }}</h4>
                            </div>
                            <div class="question-hr"><i class="fa-regular fa-circle-down"></i></div>
                            <div class="hidden">
                                {{ element.info }}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    components: {
        name: 'Main4Component',
    },
    data: function () {
        return {
            elements3: [
                {
                    name: 'How can we help ?',
                    info: 'How many courses you\'ve been on, using however many techniques and methods. Unless you\'ve come to realize the value of mindset, then you\'ve yet to understand how success comes. With everyone else\'s mindset involved impacting too. Hence why business coaching is so crucial for success.',
                },
                {
                    name: 'Why would I need a business COACH ?',
                    info: 'Every great entrepreneur is surrounded by coaches and advisor. A great business coach will listen and guide you to success. Perhaps most importantly, a business coach will make you focus on your goals and hold you accountable to th things you should do, and to where you want your business to be.',
                },
                {
                    name: 'What is one-on-one coaching ?',
                    info: 'We understand that every business is at a different stage of development; this is why we\'ve also developed multiple Group Coaching programs to fit the needs of every kind od business. Unlike a consultant, your personal MaxCoach will do more than just show you want to do - he or she will be with you when you need them most.',
                },
            ]
        }
    }
}
</script>

<style lang="scss" scoped>
@use '../assets/partials/mixins' as *;
@use '../assets/partials/variables' as *;

.bg3 {
    background-image: url(../../public/img/background-map-dots-top-right-transparent.png);
    background-size: cover;
    background-color: $col1-1;
}

.bg-video {
    position: relative;
    padding-top: 100px;
    width: 100%;
}

.yt {
    margin-top: -250px;
    margin-left: 280px;
}

h1 {
    padding-top: 90px;
    padding-bottom: 40px;
    color: $col1;
    font-weight: bold;
}

.question {
    margin-bottom: 60px;
}

.questions h2 {
    padding-top: 50px;
    padding-bottom: 30px;
    font-size: 30px;
}

.question .small-container:last-child {
    border-bottom: 1px solid rgb(162, 162, 162);
}

.question-hr i {
    padding-right: 30px;
    padding-top: 30px;
}

.question-text {
    font-weight: bold;
}

.question-box {
    border-top: 1px solid rgb(162, 162, 162);
    position: relative;
    min-height: 30px;
    align-items: center;
    padding: 20px 0;
}

.question-text h4 {
    margin: 10px;
}

.question-box i {
    position: absolute;
    top: 2px;
    right: 10px;
    transition: 0.8s;
}

.question-box:hover i {
    rotate: 180deg;
    padding-left: 30px;
    padding-bottom: 30px;
}

.question-box .hidden {
    display: none;
}

.question-box:hover .hidden {
    display: block;
    font-size: 15px;
    margin-top: 20px;
    width: 80%;
    transition: 0.8s;
}
</style>