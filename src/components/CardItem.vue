<script>

export default {
    name: 'CardItem',

    props: {
        itemCard: Object,
    }
}

</script>

<template>

    <div class="card" :class="itemCard.color">
        
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
@use '../styles/mixins' as *;

.card{
    @include centered;
    flex-direction: column;
    gap: 30px;

    width: calc(100% / 3 - $cardGap / 3 * 2);

    padding: 30px 15px;

    border: 1px solid grey;
    border-radius: 30px;

    .card-title{
        font-size: 1.3em;
        font-weight: bold;

        color: $primaryColor;
    }

    .card-text{
        text-align: center;
    }
}

.card.first{
    background-color: #FEF4EB;
}

.card.second{
    background-color: #EEECFA;
}

.card.third{
    background-color: #FFEAEC;
}

</style>