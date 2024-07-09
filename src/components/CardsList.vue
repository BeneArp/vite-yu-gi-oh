<script>
    import Card from './Card.vue';
    import axios from 'axios';

    import {store} from '../store'

    export default {
        name: "CardsList",
        components: {
            Card,
        },

        data(){
            return{
                store,
            }
        },

        methods:{
            getCardsList(){
                axios.get(store.apiUrl).then(result => {
                    console.log(result.data);
                    store.cardsList = result.data;

                }).catch(error => {
                    console.log(error);
                })
            }
        },

        created(){
            this.getCardsList();
        }
    }

</script>

<template>

    <div class="container">
        <div id="counter">
            <span>Found Cards</span>
        </div>

        <div id="cards-container">
            <Card/>
        </div>
    </div>

</template>

<style lang="scss" scoped>
    @use '../styles/partials/variables' as *;
    @use '../styles/partials/mixins' as *;

    .container{
        padding: 2em;
        // debug
        height: 600px;
        background-color: goldenrod;

        #counter{
            background-color: rgb(33 37 41);
            padding: 1.5em 1em;
            margin-bottom: 0.5em;

            span{
                color: white;
                font-weight: bold;
            }
        }

        #cards-container{
            @include flex;
            flex-wrap: wrap;
        }
    }

</style>