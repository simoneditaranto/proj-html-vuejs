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
            
            <img src="/img/dots-right.png" alt="" class="dots-right">
            <img src="/img/dots-left.png" alt="" class="dots-left">
            <img src="/img/globe1.png" alt="" class="globe-1 rotation">
            <img src="/img/light.png" alt="" class="light">
            <img src="/img/globe2.png" alt="" class="globe-2 rotation">

            <div class="secondary-titles">
                <h3>Imagine, Create, Experience</h3>
    
                <h1>We Animate With Ninja-Like Precision</h1>
    
                <p>We are a character-driven animation studio striving to make high-quality animations.</p>
    
                <div class="jumbo-buttons">
                    <div class="btn secondary">Start a Project</div>
                    <div class="btn primary">Portfolio</div>
                </div>
            </div>

            
            <img src="/img/left-man.png" alt="" class="left-man">
            <img src="/img/right-man.png" alt="" class="right-man">
            
            
        </div>
        
        <div class="video-intro">
            <div class="thumb-video">
                <img src="/img/middle.png" alt="">

                <div class="play">
                    <i class="fa-solid fa-play"></i>
                </div>
            </div>
        </div>
        
        <div class="shape-bottom">
    
            <img src="/img/bottom-shape.png" alt="">
    
        </div>

    </header>

    
</template>

<style scoped lang="scss">
@use '../styles/variables' as *;
@use '../styles/mixins' as *;

header{
    position: relative;

    height: 840px;

    color: white;

    background-image: url('/img/banner-bg.png');
    background-size: cover;

    .shape-bottom{
        position: absolute;
        bottom: -10px;
        width: 100%;

        img{
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    }

    #jumbo{
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 30px;

        padding-top: 100px;

        position: relative;

        .secondary-titles{
            width: 50%;


            h1{
                font-size: 4.5em;
            }

            .jumbo-buttons{
                display: flex;
                gap: 24px;
            }

        }

        .dots-right{
            position: absolute;
            top: 0;
            right: 0;
        }

        .dots-left{
            position: absolute;
            top: 0;
            left: 0;
        }

        .globe-1{
            position: absolute;
            top: 0;
            left: 10%;

            width: 125px;
        }

        .globe-2{
            position: absolute;
            top: 25%;
            right: 30%;

            width: 90px;
        }

        .rotation{
            animation-name: rotation;
            animation-duration: 3s;
            animation-iteration-count: infinite;
            animation-timing-function: linear;
        }

        .light{
            position: absolute;
            top: 0;
            right: 10%;
        }  

        .left-man{
            position: absolute;
            left: 0;

            animation-name: movement;
            animation-duration: 8s;
            animation-iteration-count: infinite;
            animation-timing-function: linear;
        }
        .right-man{
            position: absolute;
            right: 0;

            animation-name: movement;
            animation-duration: 8s;
            animation-iteration-count: infinite;
            animation-timing-function: linear;
        }

    }

    .video-intro{
        position: absolute;
        top: 105%;
        left: 50%;
        transform: translate(-50%, -50%);

        z-index: 2;

        .thumb-video{
            position: relative;

            .play {
                @include centered;

                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);

                border-radius: 50%;

                width: 95px;
                height: 95px;

                background-color: #A616EA;
                
                i{
                    font-size: 2em;
    
                    color: white;
    
                }
            }

        }
    }
    
}

@keyframes movement {
    0% {
        top: 50px;
    }

    25%{
        top: 100px;
    }

    50%{
        top: 150px;
    }

    75% {
        top: 100px;
    }

    100%{
        top: 50px;
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