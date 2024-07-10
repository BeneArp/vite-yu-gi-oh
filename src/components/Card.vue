<script>
    export default {
        name: "Card",
        props: ['info']
    }

</script>

<template>

    <div class="card">
        <div class="image">
            <img :src="info.card_images[0].image_url" :alt="info.name">
        </div>
        <div class="info">
            <div class="title">
                <h3>{{ info.name }}</h3>
            </div>
            <span>
                {{ info.archetype }}
            </span>
        </div>
    </div>

</template>

<style lang="scss" scoped>
    @use '../styles/partials/variables' as *;
    @use '../styles/partials/mixins' as *;

    .card{
        padding: 0.5em;
        margin: 1em 0.5em;
        // debug
        background-color: rgb(33 37 41);

        .info{
            padding: 1.5em 1em;
            text-align: center;
            color: white;

            .title{
                margin-bottom: 0.8em;
            }
        }
    }

</style>
