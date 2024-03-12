<script>
import { store } from '../store.js';

import ProcessItem from './ProcessItem.vue';

export default {
    name: 'AppProcess',

    components: {
        ProcessItem,
    },

    data() {
        return {
            store,
        }
    }
}

</script>

<template>

    <section id="our-process">

        <div class="process-image">
            <img src="/img/process-thumb.png" alt="">
        </div>

        <div class="process-container">
            <div class="titles">
                <h3>Our Process</h3>

                <h2>
                    Our Process for Your Animation Production
                </h2>

                <p>
                    We have an effective process for working on animation
                </p>
            </div>

            <div class="process-cards">
                <ProcessItem
                    v-for="currentProcess in this.store.processCards"
                    :itemProcess="currentProcess"
                >

                </ProcessItem>
            </div>

            <div class="arrows">
                <i class="fa-solid fa-arrow-left"></i>
                <i class="fa-solid fa-arrow-right"></i>
            </div>

        </div>
        

    </section>

</template>

<style scoped lang="scss">
@use '../styles/variables' as *;

#our-process{
    display: flex;

    padding-top: 120px;

    .process-image{
        transform: translateX(-30%);

        img{
            width: 100%;
        }

    }

    .process-container {

        .process-cards{
            display: flex;
            flex-wrap: wrap;
            gap: 10px;

            
        }

    }

}

</style>