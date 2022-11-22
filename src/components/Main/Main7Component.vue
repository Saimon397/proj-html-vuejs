<template>
    <div class="bggg container-fluid mt-5 pt-5 mb-5 pb-5">
        <div class="text-center">
            <h1>Subscribe<mark>Newsletters</mark></h1>
        </div>
        <div class="text-center pt-3">
            <h5>Enter your email address to register to our newsletter subscription<br>delivered on a regular basis!
            </h5>
            <form>
                <div class="mb-3 mt-5 d-flex justify-content-around">
                    <input placeholder="Enter your email" type="email" class="form-control" id="exampleInputEmail1"
                        aria-describedby="emailHelp">
                    <span class="button">
                        <a class="text-white" href="#nogo">Subscribe</a>
                    </span>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.bggg {
    background-color: rgb(254, 254, 254);
}

h1 {
    font-weight: bold;
    color: rgb(51, 51, 51);
}

mark {
    background-color: rgb(254, 254, 254);
    font-weight: 400;
    color: rgb(30, 174, 150);
}

input {
    height: 50px;
    width: 430px;
}

.button {
    margin-left: -920px;
    font-weight: bold;
    padding: 12px;
    background-color: rgb(30, 174, 150);
    border-radius: 4%;
    width: 10%;
    transition: .2s;

    &:hover {
        background-color: rgb(75, 71, 110);
    }

    a {
        text-decoration: none;
    }
}
</style>