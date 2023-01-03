
<script setup>
    import { useRoute, useRouter } from 'vue-router';
    import { ref } from 'vue';
    import { useGetData } from '@/composables/getData';

    const route = useRoute();
    const router = useRouter();
    const name = ref(route.params.name);


    const { getData, data, loading, error } = useGetData();

    getData(`https://pokeapi.co/api/v2/pokemon/${name.value}`);

    const onBack = () => {
        router.push('/pokemons');
    }

</script>

<template>
    <p v-if="loading">Cargando la información...</p>
    <div class="alert alert-danger mt-2" v-if="error">{{ error }}</div>
    <div v-if="data" >
        <img :src="data.sprites?.front_default" alt="poke">
        <h1> Poke name: {{ name }}</h1>
    </div>
    <button class="btn btn-outline-primary" @click="onBack" >Atrás</button>
</template>
