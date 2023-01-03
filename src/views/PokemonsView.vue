
<script setup>
    import { RouterLink } from 'vue-router';
    import { useGetData } from '@/composables/getData';

    const { getData, data, loading,  error } = useGetData();

    getData('https://pokeapi.co/api/v2/pokemon/');


</script>

<template>
    <h1>Pokemons</h1>
    <p v-if="loading">Cargando información...</p>
    <div class="alert alert-danger mt-2" v-if="error">{{ error }}</div>
    <div v-if="data">
        <ul class="list-group">
        <li v-for="pokemon in data.results" class="list-group-item">
            <router-link :to="`pokemons/${pokemon.name}`" > {{ pokemon.name }} </router-link>
        </li>
    </ul>
    <div class="mt-2">
        <button class="btn btn-warning mr-2" :disabled="!data.previous" @click="getData(data.previous)">Previous</button>
        <button class="btn btn-primary" :disabled="!data.next" @click="getData(data.next)">Next</button>
    </div>
    </div>
</template>