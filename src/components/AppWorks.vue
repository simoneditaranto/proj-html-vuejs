<script>

export default {
    name: 'AppWorks',
}

</script>

<template>

    <section id="our-works">

        <div class="titles">

            <h3>Our Works</h3>

            <h2>Featured Production</h2>

            <p>
                Here's just a small sample of some of those project that we're qulte proud of. If you are looking for something specific feel free to get in contact with us. 
            </p>

        </div>

        <div class="cards-works container">

            <div class="card" v-for="n in 4">
                <img src="/img/work1.png" alt="">
            </div>

        </div>

        <div class="btn">
            See Our Work
        </div>

    </section>

</template>

<style scoped lang="scss">
@use '../styles/mixins' as *;
@use '../styles/variables' as *;

#our-works{
@include centered;
flex-direction: column;

    padding-top: 120px;

    .cards-works{
        display: flex;
        flex-wrap: wrap;
        gap: 20px;

        .card{
            width: calc(100% / 2 - 20px / 2 * 1);

            img{
                width: 100%;
            }
        }
    }

    .btn{
        border: 1px solid $tertiaryColor;
    }
}

</style>