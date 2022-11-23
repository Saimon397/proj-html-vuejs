<template>
    <section id="project">
        <div class="my-container">
            <div class="d-flex justify-content-between align-items-center">
                <div class="col-8">
                    <div class="d-flex align-items-center">
                        <div class="line"></div>
                        <div class="sub-title"></div>
                    </div>
                    <div class="title"></div>
                </div>
                <div class="arrow">
                    <button @click="scrollLeft()"><i class="fa-solid fa-arrow-left"></i></button>
                    <button @click="scrollRignt()"><i class="fa-solid fa-arrow-right"></i></button>
                </div>
            </div>
            <div class="carousel-container">
                <div class="carousel" ref="carousel">
                    <div><img src="" alt=""></div>
                    <div><img src="" alt=""></div>
                    <div><img src="" alt=""></div>
                    <div><img src="" alt=""></div>
                    <div><img src="" alt=""></div>
                    <div><img src="" alt=""></div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    methods: {
        scrollRignt() {
            if (this.i < 3) {
                this.i++;
                this.$nextTick(() => {
                    this.$refs.carousel.style.transform = `translateX(calc((-1) * 100% * ${this.i} / 3 - (0.333rem * ${this.i}))`
                })
            } else {
                this.i = 0;
                this.$nextTick(() => {
                    this.$refs.carousel.style.transform = null;
                })
            }

        },
        scrollLeft() {
            if (this.i > 0) {
                this.i--;
                this.$nextTick(() => {
                    this.$refs.carousel.style.transform = `translateX(calc((-1) * 100% * ${this.i} / 3 - (0.333rem * ${this.i}))`
                })
            } else {
                this.$nextTick(() => {
                    this.$refs.carousel.style.transform = `translateX(80px)`;
                    setTimeout(() => this.$refs.carousel.style.transform = null, 200)
                })
            }

        }
    }
}
</script>

<style lang="scss" scoped>
@use '../assets/partials/mixins' as *;
@use '../assets/partials/variables' as *;

section {
    background-color: blue;
    padding-top: 12rem;
    padding-bottom: 8rem;

    .carousel-container {
        overflow: hidden;
        margin-left: -1rem;
    }

    .carousel {
        display: flex;
        width: 100%;
        transition: 1s;

        &>* {
            width: calc((100% - 2rem) / 3);
            margin-left: 1rem;
            flex-shrink: 0;
        }
    }

    .line {
        width: 50px;
        background-color: red;
        height: 0.2rem;
        margin-right: 1rem;
    }

    .sub-title {
        color: white;
        text-transform: uppercase;
    }

    .title {
        line-height: 3rem;
        padding: 1rem 0;
    }

    .arrow {
        button {
            width: 50px;
            height: 50px;
            line-height: 50px;
            background-color: violet;
            color: white;
            border: 0;
            margin-left: 1rem;
            transition: 0.2s;

            &:hover {
                background-color: yellow;
            }
        }
    }
}
</style>