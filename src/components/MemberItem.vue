<script>

export default {
    name: 'MembersItem',

    props: {
        itemMember: Object,
    },
}

</script>

<template>

    <div class="member-card">

        <img :src="itemMember.memberImage" alt="">

        <div class="member-name">
            {{ itemMember.name }}
        </div>

        <div class="member-role">
            {{ itemMember.role }}
        </div>

        <div class="socials">
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


}

</style>