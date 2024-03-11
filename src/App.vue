<script>
import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';
import AppFooter from './components/AppFooter.vue';

export default {

  components: {
    AppHeader, 
    AppMain,
    AppFooter,
  },

}

</script>

<template>
  
  <h1>Titolo</h1>
  <AppHeader></AppHeader>
  <AppMain></AppMain>
  <AppFooter></AppFooter>

</template>

<style scoped lang="scss">

h1 {
  color: red;
}

</style>
