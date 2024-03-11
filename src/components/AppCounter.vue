<script>
import CounterItem from './CounterItem.vue';

export default {
    name: 'AppCounter',

    components: {
        CounterItem,
    }
}

</script>

<template>

    <section id="our-counter">

        <div class="container">

            <h2>Anidio Quick Facts</h2>

            <div class="counter-cards">
                <CounterItem v-for="n in 4"></CounterItem>
            </div>

        </div>

    </section>

</template>

<style scoped lang="scss">

#our-counter{
    padding: 75px 0;
    
    color: white;
    
    background-image: url('/img/counter-bg.png');
    background-size: cover;

    .container{
        display: flex;
        align-items: center;
        flex-direction: column;
        gap: 30px;

        h2{
            font-size: 3em;
        }

        .counter-cards{
            display: flex;
            gap: 25px;

            width: 100%;
        }
    }

}

</style>