<script>
import CardItem from './CardItem.vue';

export default {
    name: 'AppAnimation',

    components: {
        CardItem,
    }
}

</script>

<template>

    <section id="our-animation">

        <!-- <div class="smart-img">
                <img src="/img/smart.png" alt="" >
        </div> -->
        
        <div class="container">

            <div class="col-7 offset-3 titles">

                <h3>Our Love for Animation</h3>
        
                <h2>We're Storytelling Expert With Creative Smarts</h2>
        
                <p>
                    Our culture inspires the creative and innovative spirit tound throughout our Studio. We breathe life into new ideas!
                </p>

            </div>

            <div class="cards col-8 offset-3">
                <CardItem v-for="n in 3"></CardItem>
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
        z-index: 2;

        .titles{
            @include centered;
            flex-direction: column;
            gap: 20px;
            margin-bottom: 50px;
    
            text-align: center;
    
            h3{
                color: $secondaryColor;
            }
    
            h2{
                font-size: 3em;
    
                color: $primaryColor;
            }
        }
    
    
        .cards{
            display: flex;
            gap: 24px;
    
            z-index: 0;
        }
    }



    .smart-img {
        position: absolute;
        left: 0;

        width: 650px;
        height: 100%;
        
        z-index: 0;
        
        img{
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    }
}

</style>