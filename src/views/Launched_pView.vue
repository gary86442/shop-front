<script setup>
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'
import useFetchCard from '../composables/useFetchCard.js'
const route = useRoute()
const { data, fetchInit, errorMessage } = useFetchCard()
const productId = ref(0)
const baseURL = 'https://little-river-2522.fly.dev'
onMounted(async () => {
  productId.value = route.params.launched_p_id // 正確設置產品ID
  await fetchInit(baseURL.concat(`/api/v1/launched_ps/${productId.value}`))
})
</script>
<template>
  <!-- {{ data.launched_p.Product }} -->
  <div class="container-fluid d-flex align-items-center justify-content-center">
    <div
      v-if="data.launched_p"
      class="product-details d-flex align-item-center justify-content-center p-3"
    >
      <div class="product-image">
        <!-- Replace this with the product image -->
        <img src="https://picsum.photos/400/600" alt="Product" />
      </div>
      <div class="product-info p-4">
        <h1>{{ data.launched_p.Product.name }}</h1>
        <p class="mt-3">商品描述</p>
        <p class="mt-3 align-items-start">
          {{ data.launched_p.Product.description }}
        </p>
        <p class="mt-3">價格</p>
        <p class="mt-3 align-items-start">$：{{ data.launched_p.price }}</p>
        <button>立即購買</button>
      </div>
    </div>
  </div>
</template>

<style>
/* Add your custom CSS for Netflix style */
.container {
  flex-direction: column;

  padding: 20px;
  background-color: #222; /* Replace with Netflix background color */
  color: #fff; /* Replace with Netflix text color */
}

.product-details {
  background-color: #333; /* Replace with product details background color */
  max-width: 60%;
}

.product-image img {
  max-width: 300px;
  /* Add other styles for product image if needed */
}

.product-info {
  flex: 1;
  padding: 20px;
}

.product-info h1 {
  font-size: 32px;
  margin-bottom: 10px;
}

.product-info p {
  font-size: 24px;
  margin-bottom: 20px;
  /* min-height: 150px; */
  text-align: start;
}

.product-info button {
  padding: 10px 20px;
  background-color: #e50914; /* Replace with Netflix button color */
  color: #fff; /* Replace with Netflix button text color */
  border: none;
  cursor: pointer;
  font-size: 16px;
  font-weight: bold;
  border-radius: 4px;
}
</style>
