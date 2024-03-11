<script>
import AppAnimation from './AppAnimation.vue';
import AppCounter from './AppCounter.vue';
import AppWorks from './AppWorks.vue';
import AppProcess from './AppProcess.vue';
import AppMembers from './AppMembers.vue';
import AppWhyUs from './AppWhyUs.vue';
import AppCreate from './AppCreate.vue';


export default {
    name: 'AppMain',

    components: {
        AppAnimation,
        AppCounter,
        AppWorks,
        AppProcess,
        AppMembers,
        AppWhyUs,
        AppCreate,
    }
}

</script>

<template>

    <main>

        <AppAnimation></AppAnimation>

        <AppCounter></AppCounter>

        <AppWorks></AppWorks>

        <AppProcess></AppProcess>

        <AppMembers></AppMembers>

        <AppWhyUs></AppWhyUs>

        <AppCreate></AppCreate>

    </main>

</template>

<style scoped lang="scss">

</style>