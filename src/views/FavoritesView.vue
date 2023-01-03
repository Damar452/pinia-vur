
<script setup>
import { storeToRefs } from 'pinia';
import { useFavoritesStore } from '../store/favorites';
import { RouterLink } from 'vue-router';


const useFavorites = useFavoritesStore();
const { remove } = useFavorites;
const { favorites } = storeToRefs(useFavorites);

</script>

<template>
    <h1>Favoritos</h1>
    <p v-if="favorites.length === 0">Sin favoritos</p>
    <ul class="list-group" v-else>

        <li class="list-group-item" v-for="favorite in favorites" :key="favorite.id">
            <div>
                {{ favorite.name }}
            </div>
            <div>
                <router-link class="btn btn-sm btn-primary mr-2" :to="`/pokemons/${favorite.name}`" > Más información </router-link>
                <button class="btn btn-sm btn-danger" @click="remove(favorite.id)"> Eliminar </button>
            </div>
        </li>


    </ul>
</template>