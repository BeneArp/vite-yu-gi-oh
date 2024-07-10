<script>
    import {archetype} from '../store'
    import axios from 'axios';

    export default {
        name: "AppSearch",

        data(){
        return{
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
        this.getArchetypeList()
      }
    }

</script>

<template>

    <div class="container">
        <select name="tipo di carta" id="">
            <option value="">Select an Archetype</option>
            <option value="" v-for="archetypeSerch in archetype.archetypeList">{{ archetypeSerch.archetype_name }}</option>
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
