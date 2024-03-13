<script>
import { store } from '../store';

import CounterItem from './CounterItem.vue';

export default {
    name: 'AppCounter',

    components: {
        CounterItem,
    },

    data() {
        return {
            store,
        }
    }
}

</script>

<template>

    <section id="our-counter">

        
        <div class="container">
            
            <h2>Anidio Quick Facts</h2>
            
            <div class="counter-cards">
                <CounterItem 
                    v-for="currentCounter in this.store.staticsCounter"
                    :itemCounter="currentCounter"
                    >
                </CounterItem>
            </div>
        
        </div>
    
        <div class="bg-globe">
            <img src="/img/globe1.png" alt="">
        </div>

        <div class="shape-bottom">
            <img src="/img/shape-bottom.png" alt="">
        </div>

        <div class="shape-top">
            <img src="/img/shape-top.png" alt="">
        </div>
    </section>

</template>

<style scoped lang="scss">
@use '../styles/variables' as *;

#our-counter{
    position: relative;

    padding: 150px 0;
    
    color: white;
    
    background-image: url('/img/counter-bg.png');
    background-size: cover;

    overflow-y: hidden;

    .bg-globe{
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);

        width: 50%;
        height: 100%;

        img{
            width: 100%;
            height: 100%;
            object-fit: contain;

            opacity: 25%;

            animation-name: rotation;
            animation-duration: 50s;
            animation-iteration-count: infinite;
            animation-timing-function: linear;
        }
    }

    .shape-bottom {
        position: absolute;
        bottom: -5px;
        
        width: 100%;
        height: 10%;
        
        img{
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    }

    .shape-top{
        position: absolute;
        top: 0;
        
        width: 100%;
        height: 10%;
        
        img{
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    }

    .container{
        display: flex;
        align-items: center;
        flex-direction: column;
        gap: 30px;

        h2{
            font-size: 3em;

            z-index: 1;
        }

        .counter-cards{
            display: flex;
            gap: $counterGap;

            width: 100%;

            z-index: 1;
        }
    }

}

@keyframes rotation{
    0%{
        rotate: 0deg;
    }

    25%{
        rotate: 90deg;
    }

    50%{
        rotate: 180deg;
    }


    100%{
        rotate: 360deg;
    }

}

</style>