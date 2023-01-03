import { defineStore } from "pinia"
import { ref } from "vue"

export const useFavoritesStore = defineStore('favorites', () => {

    const favorites = ref([]);

    if(localStorage.getItem('favorites')){
        favorites.value = JSON.parse(localStorage.getItem('favorites'));
    }

    const add = (poke) => {
        favorites.value.push(poke);
        setItemStorage();
    }

    const remove = (id) => {
        favorites.value = favorites.value.filter(item => item.id !== id);
        setItemStorage();
    }

    const findPoke = (id) => {
        return favorites.value.find( poke => poke.id === id );
    }

    const setItemStorage = () => {
        localStorage.setItem('favorites', JSON.stringify(favorites.value));
    }

    return {
        favorites,
        add,
        remove,
        findPoke
    }
})