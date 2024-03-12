<script>

export default {
    name: 'AppProcess',
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
                <div class="card" v-for="n in 2">

                    <div class="card-logo">

                        <img src="/img/process2.png" alt="">

                    </div>

                    <h4>Pre-Production</h4>

                    <p>We'll take your idea and create a techincal script which consists of action notes and animation descriptions</p>

                </div>
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

            .card{
                display: flex;
                align-items: center;
                flex-direction: column;
                gap: 25px;

                padding: 30px 35px;

                width: calc(100% / 2 - 10px / 2 * 1);

                border: 1px solid #f7f0ff;
                border-radius: 20px;

                text-align: center;

                .card-logo{
                    padding: 30px;

                    width: 130px;
                    height: 130px;
                    
                    background-color: #FEF5F0;

                    border-radius: 50%;

                    img{
                        width: 100%;
                        height: 100%;
                    }
                }

                h4 {
                    font-size: 1.5em;

                    color: $primaryColor;
                }

                p{
                    padding: 0 30px;
                }


            }
        }

    }

}

</style>