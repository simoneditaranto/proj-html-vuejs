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

        <div class="member-photo">

            <img :src="itemMember.memberImage" alt="">
            
        </div>

        <div class="member-info">

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

    </div>

</template>


<style scoped lang="scss">
@use '../styles/variables' as *;

.member-card{
    display: flex;
    flex-direction: column;
    align-items: center;

    width: calc(100% / 3 - $membersGap / 3 * 2);

    border-radius: 20px;

    background-color: $sevenColor;

    .member-photo {
        width: 200px;
        height: 200px;

        transform: translateY(-50px);

        transition: .2s ease;
        
        img{
            width: 100%;
            height: 100%;
        }

        &:hover {
            transform: translateY(-40px);
        }
    }

    .member-info{
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 20px;

        transform: translateY(-30px);
        
        .member-name{
            font-size: 1.3em;
            font-weight: bold;
    
            color: $primaryColor;
        }
    
        .member-role{
            color: $primaryColor;
        }

        .socials{
            margin-top: 20px;
        }

    }

}

</style>