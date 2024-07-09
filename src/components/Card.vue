<script>
    export default {
        name: "Card",
    }

</script>

<template>

    <div class="card">
        <div class="image">
            
        </div>
        <div class="info"></div>
    </div>

</template>

<style lang="scss" scoped>
    @use '../styles/partials/variables' as *;
    @use '../styles/partials/mixins' as *;

    .card{
        width: calc((100% / 5) - 1em);
        padding: 0.5em;
        margin: 1em 0.5em;
        // debug
        background-color: rgb(33 37 41);
        height: 200px;
    }

</style>
