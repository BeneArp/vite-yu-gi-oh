<script>
  import AppHeader from './components/AppHeader.vue'
  import CardsList from './components/CardsList.vue'
  
  export default{
      name: 'App',
      components: {
        AppHeader,
        CardsList,
      }
  }
</script>

<template>
  <AppHeader/>
  <main>
    <CardsList/>
  </main>
</template>

<style lang="scss">
  @use './styles/general.scss' as *;
  @use './styles/partials/variables' as *;

  main{
    background-color: $main-bg;
  }

</style>
