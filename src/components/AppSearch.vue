<script>
    import {store, archetype} from '../store'
    import axios from 'axios';

    export default {
        name: "AppSearch",

        data(){
        return{
            store,
            archetype,
        }
      },

      methods:{
        getArchetypeList(){
          axios.get(archetype.archetypeUrl).then(result => {
            console.log(result.data);
            archetype.archetypeList = result.data

          }).catch(error => {
            console.log(error);
          })
        }
      },

      created(){
        this.getArchetypeList();
        console.log(store.selectedOption);
      }
    }

</script>

<template>

    <div class="container">
        <select name="tipo di carta" id="" v-model="store.selectedOption" @change="$emit('search')">
            <!-- <option value="">Select an Archetype</option> -->
            <option :value="archetypeSerch.archetype_name" v-for="archetypeSerch in archetype.archetypeList" :key="archetypeSerch.archetype_name">{{ archetypeSerch.archetype_name }}</option>
        </select>
    </div>

</template>

<style lang="scss" scoped>
    @use '../styles/partials/variables' as *;
    @use '../styles/partials/mixins' as *;

    .container{
        padding-left: 0;
    }

    select{
        margin: 2em 0;
        display: inline-block;
        padding: 0.8em 2em;
        border-radius: 10px;
        border: none;
        font-size: 17px;
    }
</style>
