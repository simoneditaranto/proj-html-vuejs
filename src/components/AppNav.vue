<script>
import { store } from '../store.js';

export default {
    name: 'AppNav',

    props: {
        linkName: String,
    },

    data() {
        return {
            store,
        }
    },
}

</script>

<template>

    <nav>
        <div id="nav-container">
        
            <img src="/img/logo.png" alt="logo">

            <ul>
                <li v-for="currentLink in this.store.headerLinks"> {{ currentLink }} </li>
                <li class="btn secondary">Get a Quote</li>
            </ul>

        </div>
    </nav>

</template>

<style scoped lang="scss">
@use '../styles/variables' as *;
@use '../styles/mixins' as *;

nav{
    position: relative;

    padding: 20px 0;

    color: white;

    z-index: 1;
    #nav-container{
        @include centered-between;

        margin: 0 auto;

        width: 80%;

        ul{
            display: flex;
            align-items: center;
            gap: 20px;

            font-weight: bold;

            li{
                font-family: Chakra Petch, sans-serif;
                font-size: 1.1em;

                cursor: pointer;

                transition: all 0.4s;

                &:hover:not(&:last-child){
                    color: $fourthColor;
                }
            }
        }
    }
}

</style>