<script>
import { store } from '../store.js';

import CardItem from './CardItem.vue';

export default {
    name: 'AppAnimation',

    components: {
        CardItem,
    },

    data() {
        return {
            store,
        }
    }
}

</script>

<template>

    <section id="our-animation">

        <div class="smart-img">
                <img src="/img/smart.png" alt="" >
        </div>
        
        <div class="container">

            <div class="primary-titles">

                <h3>Our Love for Animation</h3>
        
                <h2>We're Storytelling Expert With Creative Smarts</h2>
        
                <p>
                    Our culture inspires the creative and innovative spirit tound throughout our Studio. We breathe life into new ideas!
                </p>

            </div>

            <div class="cards">
                <CardItem 
                    v-for="currentCard in this.store.animationCards"
                    :itemCard="currentCard"
                >
                </CardItem>
            </div>

        </div>

    </section>

</template>

<style scoped lang="scss">
@use '../styles/variables' as *;
@use '../styles/mixins' as *;

#our-animation{
    position: relative;

    padding-top: 350px;
    padding-bottom: 135px;

    .container{
        padding-left: 300px;

        .primary-titles{
            margin-bottom: 50px;

            width: 80%;
        }
    
    
        .cards{
            display: flex;
            gap: $cardGap;
        }
    }



    .smart-img {
        position: absolute;
        left: 0;

        width: 450px;
        height: 800px;
        
        img{
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    }
}

</style>