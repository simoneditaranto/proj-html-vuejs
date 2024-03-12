<script>
import { store } from '../store.js';

export default {
    name: 'AppFooter',

    data() {
        return {
            store,
        }
    },
}

</script>

<template>

    <footer class="container">

        <div id="footer-top">

            <img src="/img/footer-logo.png" alt="anidio logo">

            <div class="links">

                <ul>
                    <li 
                        v-for="currentLink in this.store.footerLinks"
                    >
                        {{ currentLink }}
                    </li>
                </ul>

            </div>

        </div>

        <hr>

        <div id="footer-bot">

            <div class="copyright">
                Copyright <span><i class="fa-regular fa-copyright"></i></span> 2022 <span style="color: #311852">Softvirus</span>. All right reserved.
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

    </footer>

</template>

<style scoped lang="scss">
@use '../styles/mixins' as *;

footer{
    display: flex;
    flex-direction: column;
    gap: 30px;

    padding-top: 135px;
    padding-bottom: 40px;

    #footer-top{
        @include centered-between;

        .links{

            ul{
                display: flex;
                gap: 20px;
            }
        }
    }

    #footer-bot{
        @include centered-between;

        .copyright{
            font-size: .8em;
        }
    }


}

</style>