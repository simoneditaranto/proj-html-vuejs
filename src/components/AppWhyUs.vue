<script>

export default {
    name: 'AppWhyUs',
}

</script>

<template>

    <section id="why-us">

        <div class="primary-titles">

            <h3>Why Anidio studio?</h3>

            <h2>
                We Love Our Clients
            </h2>

            <p>
                We are trusted throughout adland and have a wealth of reccomendatlons from start-ups to renowed global brands
            </p>

            <div class="container brands">
                <img :src="`/img/sponsor${n}.png`" alt="" v-for="n in 5" class="brand">
            </div>

        </div>

    </section>

</template>

<style scoped lang="scss">
@use '../styles/variables' as *;

#why-us{
    padding-top: 250px;

    .brands{
        display: flex;
        flex-wrap: wrap;
        gap: $sponsorGap;

        .brand {
            width: calc(100% / 5 - $sponsorGap / 5 * 4);
        }
    }
}

</style>