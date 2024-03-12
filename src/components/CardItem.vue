<script>

export default {
    name: 'CardItem',

    props: {
        itemCard: Object,
    }
}

</script>

<template>

    <div class="card col-4">
        
        <div class="card-icon">
            <img :src="itemCard.url" alt="">
        </div>

        <div class="card-title">
            {{ itemCard.title }}
        </div>

        <div class="card-text">
            {{ itemCard.text }}
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