<script>
import AppNav from './AppNav.vue';

export default {
    name: 'AppHeader',

    components: {
        AppNav,
    },

    data() {
        return {

        }
    }
}

</script>

<template>

    <header>

        <AppNav></AppNav>

        <div id="jumbo">

            <h3>Imagine, Create, Experience</h3>

            <h1>We Animate With Ninja-Like Precision</h1>

            <p>We are a character-driven animation studio striving to make high-quality animations.</p>

            <div class="jumbo-buttons">
                <div class="btn secondary">Start a Project</div>
                <div class="btn primary">Portfolio</div>
            </div>

            <img src="/img/middle.png" alt="" class="video-intro">

            <img src="/img/left-man.png" alt="" class="left-man">
            <img src="/img/right-man.png" alt="" class="right-man">

        </div>

    </header>

</template>

<style scoped lang="scss">
@use '../styles/variables' as *;
@use '../styles/mixins' as *;

header{
    color: white;

    background-image: url('/img/banner-bg.png');
    background-size: cover;
    h1{
        font-size: 3em;
    }

    h3{
        /*color: $primaryColor;*/
        color: #ff7a1f;
    }

    #jumbo{
        display: flex;
        flex-direction: column;
        align-items: center;
        /*@inlcude centered;*/
        gap: 30px;

        position: relative;

        .jumbo-buttons{
            display: flex;
            gap: 24px;
        }

        .video-intro{
            transform: translateY(50%);
        }

        .left-man{
            position: absolute;
            left: 0;
        }
        .right-man{
            position: absolute;
            right: 0;
        }

    }
}

</style>