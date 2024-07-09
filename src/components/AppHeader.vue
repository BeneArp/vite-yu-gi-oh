<script>

    export default {
        name: "AppHeader",
    }

</script>

<template>

    <header>

        <img src="https://upload.wikimedia.org/wikipedia/commons/2/21/Yu-Gi-Oh%21.png" alt="">
        <h1>Yu-Gi-Oh Api</h1>

    </header>

</template>

<style lang="scss" scoped>
    @use '../styles/partials/variables' as *;
    @use '../styles/partials/mixins' as *;    

    header{
        padding: 1.5em;

        img{
            height: 30px;
            vertical-align: middle;
        }

        h1{
            display: inline-block;
            vertical-align: middle;
            font-size: 40px;
            margin: 0 0.5em;
        }
    }

</style>