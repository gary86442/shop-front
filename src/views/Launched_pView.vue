<script setup>
import { onMounted } from 'vue'
import useFetchCard from '../composables/useFetchCard.js'

const { data, fetchInit, errorMessage } = useFetchCard()
const baseURL = 'https://little-river-2522.fly.dev'
onMounted(async () => {
  await fetchInit(baseURL.concat('/api/v1/launched_ps/'))
})
</script>
<template>
  <div class="container-fluid d-flex align-items-center justify-content-center">
    <div
      class="product-details d-flex align-item-center justify-content-center p-3"
    >
      <div class="product-image">
        <!-- Replace this with the product image -->
        <img src="https://picsum.photos/400/600" alt="Product" />
      </div>
      <div class="product-info p-4">
        <h1>商品標題</h1>
        <p class="mt-3">商品描述</p>
        <p class="mt-3 align-items-start">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id
          magna ac est cursus ornare vel eu odio. Duis luctus interdum cursus.
        </p>
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
  min-height: 150px;
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

.product-info button:hover {
  /* Add styles for button hover effect */
}
</style>
