<script>
import { store } from '../store.js';

import MemberItem from './MemberItem.vue';

export default {
    name: 'AppMembers',

    components: {
        MemberItem,
    },

    data() {
        return {
            store,
        }
    }
}

</script>

<template>

    <section id="our-team">

        <!-- <div class="shapes">
            <img src="/img/shape.png" alt="">
            <img src="/img/shape2.png" alt="">
        </div> -->

        <img src="/img/smart4.png" alt="">

        <div class="titles">
            <h3>
                Anidio Magic Team Members
            </h3>

            <h2>
                Let Us Animate Your Project
            </h2>

            <p>We create new worlds! Let's collaborate and create engaging, effective, award-wining animations</p>

        </div>

        <div class="team-members container">
            <MemberItem 
                v-for="currentMember in this.store.teamMembers"
                :itemMember="currentMember"
            >
            </MemberItem>
            <div class="arrows">
                <i class="fa-solid fa-arrow-left"></i>
               
                <i class="fa-solid fa-circle" v-for="n in 4"></i>
              
                <i class="fa-solid fa-arrow-right"></i>
            </div>
        </div>


    </section>

</template>

<style scoped lang="scss">

#our-team{
    position: relative;

    padding-top: 135px;

    /*.shapes{
        position: absolute;
        top: 0;
        right: 0;
        img{
            width: 100%;
        }
    }*/

    img{
        position: absolute;
        right: 0;
        top: 0;

        width: 135px;
        height: 135px;
        object-fit: contain;
    }

    .team-members{
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: 20px;

        .arrows{

            .fa-circle {
                font-size: .5em;
            }

        }
        
    }
}

</style>