<script>

export default {
    name: 'MembersItem',
}

</script>

<template>

    <div class="member-card">

        <img src="/img/team1.png" alt="">

        <div class="member-name">
            Robert Coleman
        </div>

        <div class="member-role">
            Owner and Creative Director
        </div>

        <div class="member-socials">
            <div class="square">
                <i class="fa-brands fa-facebook-f"></i>
            </div>
            <div class="square">
                <i class="fa-brands fa-twitter"></i>
            </div>
            <div class="square">
                <i class="fa-brands fa-instagram"></i>
            </div>            
        </div>

    </div>

</template>


<style scoped lang="scss">
@use '../styles/variables' as *;

.member-card{
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 25px;

    width: calc(100% / 3 - 20px / 3 * 2);

    border-radius: 20px;

    background-color: #FEF5F0;

    /*img{
        transform: translateY(-20%);
    }*/

    .member-name{
        font-size: 1.3em;
        font-weight: bold;

        color: #311852;
    }

    .member-role{
        color: #311852;
    }

    .member-socials{
        display: flex;
        gap: 20px;

        color: #311852;

        .square{
            display: flex;
            justify-content: center;
            align-items: center;

            width: 45px;
            height: 45px;

            border: 1px solid grey;
            border-radius: 50%;

            background-color: white;
        }
    }

}

</style>