<script>

export default {
    name: 'AppCreate',
}

</script>

<template>

    <section id="create">

        <div class="titles">

            <h3>
                We Create New Worlds!
            </h3>

            <h2>
                Want Tips On Your Storytelling?
            </h2>

            <p>
                Join our newsletter for tips on how to elevate your brand througt storytelling
            </p>

        </div>

        <div class="register">
         <input type="text" placeholder="Enter your email"> 
            <div class="btn secondary">Submit</div>
        </div>

    </section>

</template>

<style scoped lang="scss">
@use '../styles/variables' as *;

#create{

    padding: 85px 0;

    background-image: url('/img/preloader.png');
    background-size: cover;

    .titles {
        
        h3{
            color: $fourthColor;
        }

        h2{
            color: white;
        }

        p{
            color: white;
        }

    }

    .register{
        position: relative;
        
        margin: 0 auto;
        
        width: 50%;

        input{
            padding: 26px 10px;
    
            width: 100%;
    
            border-radius: 40px;
            border: none;

            background-color: white;
        }

        .btn{
            position: absolute;
            right: 10px;
            top: 10%;
        }
    }
}


</style>