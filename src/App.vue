<script>
  import AppHeader from './components/AppHeader.vue'
  import CardsList from './components/CardsList.vue'
  import AppSearch from './components/AppSearch.vue'

  import {store} from './store'

  
  export default{
      name: 'App',
      components: {
        AppHeader,
        CardsList,
        AppSearch,
      },

      data(){
        return{
          store,
        }
      },


      methods:{
        changeSelectedOption(){
        console.log(store.selectedOption);
      },

      }
    }
</script>

<template>
  <AppHeader/>
  <main>
    <AppSearch @search="changeSelectedOption"/>
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
