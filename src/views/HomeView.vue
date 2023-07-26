<script setup>
import { onMounted } from 'vue'
import ProductCard from '../components/ProductCard.vue'
import useFetchCard from '../composables/useFetchCard.js'

const { data, fetchInit, errorMessage } = useFetchCard()
const baseURL = 'https://little-river-2522.fly.dev'
onMounted(async () => {
  await fetchInit(baseURL.concat('/api/v1/launched_ps'))
})
</script>

<template>
  <div>
    <h1 v-if="data.length === 0">loading</h1>
    <div class="container-fluid">
      <div class="row mt-3 p-3">
        <ProductCard
          v-for="product in data.Launched_ps"
          :id="product.id"
          :image="product.image"
          :title="product.Product.name"
          :description="product.Product.description"
          :price="product.price"
        />
      </div>
    </div>
  </div>
</template>

<style scoped></style>
