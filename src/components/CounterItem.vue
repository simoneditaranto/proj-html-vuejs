<script>

export default {
    name: 'CounterItem',

    props: {
        itemCounter: Object,
    },
}

</script>

<template>

    <div class="counter-card">
        <div class="counter-number">
            {{itemCounter.number}}+
        </div>

        <div class="counter-type">
            {{itemCounter.referenceTo}}
        </div>
    </div>

</template>

<style scoped lang="scss">
@use '../styles/variables' as *;
@use '../styles/mixins' as *;

.counter-card{
    @include centered;
    flex-direction: column;

    padding: 45px 20px;

    width: calc(100% / 4 - 25px / 4 * 3);
    
    border-radius: 20px;
    
    border: 1px solid rgba(255, 255, 255, 0.3);

    .counter-number{
        font-size: 2.5em;
        font-weight: bold;
    }

    .counter-type{
        color: $fourthColor;
    }

}

</style>