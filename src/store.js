import {reactive} from 'vue'

export const store = reactive({
    cardsList: [],
    apiUrl: 'https://db.ygoprodeck.com/api/v7/cardinfo.php?num=20&offset=0',
    selectedOption: null,
});

export const archetype = reactive({
    archetypeList: [],
    archetypeUrl: 'https://db.ygoprodeck.com/api/v7/archetypes.php'
})

// https://db.ygoprodeck.com/api/v7/cardinfo.php?archetype=Blue-Eyes