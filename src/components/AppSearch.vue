<script>
    export default {
        name: "AppSearch",
    }

</script>

<template>

    <div class="container">
        <select name="tipo di carta" id="">
            <option value="spells">Spells</option>
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
        padding: 1em 3em;
        border-radius: 10px;
        border: none;
        font-size: 16px;
    }
</style>
