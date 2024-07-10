<script>
  import AppHeader from './components/AppHeader.vue'
  import CardsList from './components/CardsList.vue'
  import AppSearch from './components/AppSearch.vue'

  import {store} from './store'
  import axios from 'axios'

  
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
        // console.log(`${store.apiUrl}&archetype=${store.selectedOption}`);
        axios.get(`${store.apiUrl}&archetype=${store.selectedOption}`).then(result => {
          console.log(result.data.data);
          store.cardsList = result.data.data;
          // console.log(store.cardsList[0].card_images[0].image_url);

          }).catch(error => {
              console.log(error);
          })
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
