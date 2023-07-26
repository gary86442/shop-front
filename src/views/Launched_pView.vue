<script setup>
import { onMounted, ref } from 'vue'
import router from '../router'
import { useRoute } from 'vue-router'
import useFetchCard from '../composables/useFetchCard.js'
import useAddCart from '../composables/useAddCart.js'
import { useBaseURLStore } from '../stores/useBaseURLStore.js'
import { useAuthStore } from '../stores/useAuthStore'
const { token } = useAuthStore()
const { baseURL } = useBaseURLStore()
const route = useRoute()
const { data, fetchInit, errorMessage } = useFetchCard()
const { newCart, addCart } = useAddCart()

const addToCart = async launched_p_id => {
  if (!token) {
    router.push('/login')
    window.alert('請先登入')
  }
  await addCart(baseURL.concat('/api/v1/carts'), { launched_p_id }, token)
  // newCart.value = res.data.cart_product
  // console.log(newCart.value)
}

const productId = ref(0)

onMounted(async () => {
  productId.value = route.params.launched_p_id // 正確設置產品ID
  await fetchInit(baseURL.concat(`/api/v1/launched_ps/${productId.value}`))
})
</script>
<template>
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
        <div class="mt-4">
          <p class="m-1">價格：</p>
          <p class="align-items-start">　　{{ data.launched_p.price }}$</p>
        </div>
        <div class="mt-4">
          <p class="m-1">庫存：</p>
          <p class="align-items-start">　　{{ data.launched_p.stock }}</p>
        </div>
        <button @click="addToCart(data.launched_p.id)">加入購物車</button>
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
