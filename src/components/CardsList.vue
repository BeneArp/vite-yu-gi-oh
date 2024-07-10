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
                if(store.selectedOption === null){
                    axios.get(store.apiUrl).then(result => {
                    console.log(result.data.data);
                    store.cardsList = result.data.data;
                    // console.log(store.cardsList[0].card_images[0].image_url);

                    }).catch(error => {
                        console.log(error);
                    })
                }
                
            },
        },

        created(){
            this.getCardsList();
        }

    }

</script>

<template>

    <div class="container">
        <div id="counter">
            <span>Found Cards {{ store.cardsList.length }}</span>
        </div>

        <div id="cards-container">
            <div class="col" v-for="card in store.cardsList" :key="card.id">
                <Card :info="card"/>
            </div>
        </div>
    </div>

</template>

<style lang="scss" scoped>
    @use '../styles/partials/variables' as *;
    @use '../styles/partials/mixins' as *;

    .container{
        padding: 2em;
        // debug
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
            align-items: flex-start;
            gap: 1em;

            .col{
                width: calc((100% / 5) - 1em);
            }
        }
    }

</style>