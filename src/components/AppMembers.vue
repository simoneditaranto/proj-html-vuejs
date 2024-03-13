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

        <!-- <img src="/img/shape.png" alt="">
        <img src="/img/shape2.png" alt=""> -->

        <div class="back-1">

        </div>
        <div class="back-2">
            
        </div>

        <img src="/img/smart4.png" alt="">

        <div class="primary-titles">
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
@use '../styles/variables' as *;

#our-team{
    position: relative;

    padding-top: 135px;

    .back-1{
        position: absolute;    
        top: 220px;

        width: 50%;
        height: 100%;

        background-image: url('/img/shape.png');
        background-size: cover;
        background-repeat: round;
    }

    .back-2{
        width: 50%;
        height: 100%;
        background-image: url('/img/shape2.png');
        background-size: cover;
        position: absolute;
        right: 0;
    }

    img{
        position: absolute;
        right: 0;
        top: 0;

        width: 135px;
        height: 135px;
        object-fit: contain;
    }

    .primary-titles{
        padding-bottom: 100px;
        margin-bottom: 0;
    }

    .team-members{
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: $membersGap;

        z-index: 1;

        .arrows{

            .fa-circle {
                font-size: .5em;
            }

        }
        
    }
}

</style>