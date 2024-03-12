<script>

export default {
    name: 'ProcessItem',

    props: {
        itemProcess: Object,
    }
}

</script>

<template>

    <div class="card">

    <div class="notification">
        <div class="rectangle">

        </div>
        <div class="circle">
            <span>{{ itemProcess.numberNot }}</span>
        </div>
    </div>

    <div class="card-logo">

        <img :src="itemProcess.url" alt="">

    </div>

    <h4>{{itemProcess.title}}</h4>

    <p>{{itemProcess.text}}</p>

    </div>

</template>

<style scoped lang="scss">
@use '../styles/variables' as *;
@use '../styles/mixins' as *;

.card{
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 25px;

    position: relative;

    padding: 30px 35px;

    width: calc(100% / 2 - 10px / 2 * 1);

    border: 1px solid #f7f0ff;
    border-radius: 20px;

    text-align: center;

    .notification{
        position: absolute;
        top: 0;
        right: 20px;

        .rectangle{
            width: 45px;
            height: 80px;
    
            background-color: #f7f0ff;
        }
        
        .circle{
            @include centered;

            width: 45px;
            height: 45px;

            transform: translateY(-50%);

            border-radius: 50%;

            background-color: #f7f0ff;
        }
    }

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

</style>