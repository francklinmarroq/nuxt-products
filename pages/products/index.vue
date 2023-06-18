<template>
    <div>
        <div class="grid grid-cols-4 gap-5">
            <div v-for="product in products" :key="index">
                <ProductCard :product="product" />
            </div>
        </div>
    </div>
</template>


<script setup>
import ProductCard from '../../components/ProductCard.vue';

definePageMeta({
    layout: 'products'
})
const { data: products } = await useFetch('https://fakestoreapi.com/products')

useHead({
    title: 'Nuxt Products | Products',
    meta: [
        {name: 'description', content:'Nuxt 3 Products'}
    ]
})


</script>


<style lang="css">
h2 {
    margin-bottom: 20px;
    font-size: 36px;
}

p {
    margin: 20px 0;
}
</style>