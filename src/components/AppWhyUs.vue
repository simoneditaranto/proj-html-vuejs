<script>

export default {
    name: 'AppWhyUs',
}

</script>

<template>

    <section id="why-us">

        <div class="titles">

            <h3>Why Anidio studio?</h3>

            <h2>
                We Love Our Clients
            </h2>

            <p>
                We are trusted throughout adland and have a wealth of reccomendatlons from start-ups to renowed global brands
            </p>

            <div class="container brands">
                <img src="/img/sponsor5.png" alt="" v-for="n in 5" class="brand">
            </div>

        </div>

    </section>

</template>

<style scoped lang="scss">

#why-us{
    padding-top: 135px;

    .brands{
        display: flex;
        flex-wrap: wrap;
        gap: 20px;

        .brand {
            width: calc(100% / 5 - 20px / 5 * 4);
        }
    }
}

</style>