<script>
  import AppHeader from './components/AppHeader.vue'
  import CardsList from './components/CardsList.vue'
  import AppSearch from './components/AppSearch.vue'
  
  export default{
      name: 'App',
      components: {
        AppHeader,
        CardsList,
        AppSearch,
      }
  }
</script>

<template>
  <AppHeader/>
  <main>
    <AppSearch/>
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
