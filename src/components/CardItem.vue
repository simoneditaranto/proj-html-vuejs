<script>

export default {
    name: 'CardItem',
}

</script>

<template>

    <div class="card col-4">
        
        <div class="card-icon">
            <img src="/img/smart1.png" alt="">
        </div>

        <div class="card-title">
            3D Modelling
        </div>

        <div class="card-text">
            We constantly ask questions. It helps us shape your story and deliver the results you crave. Yep, we'll drill deep to deliver above and beyond your expectatlons.
        </div>
        
    </div>

</template>

<style scoped lang="scss">
@use '../styles/variables' as *;

.card{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 30px;

    padding: 30px 15px;

    border: 1px solid grey;
    border-radius: 30px;

    .card-title{
        font-size: 1.3em;
        font-weight: bold;

        /*color: $primaryColor;*/
        color: #311852;
    }

    .card-text{
        text-align: center;
    }
}

</style>